import { Component, OnInit } from '@angular/core';
import { Node, Zone } from '../node';
import { NODE, ZONE } from '../node-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: './app.component-svg-pos.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'progression';

  //public zoneIds = Object.getOwnPropertyNames(ZONE) as string[];
  public allZones = Object.values(ZONE);
  public allNodes = Object.values(NODE);
  public showDone: boolean = true;
  public showAllSpoilers: boolean = false;
  public NODE_WIDTH = 200;
  public NODE_HEIGHT = 48;
  public NODE_PADDING_WIDTH = 32;
  public NODE_PADDING_HEIGHT = 10;
  public NODE_PADDING_TITLE = 16;
  public NODE_MARGIN = 10;
  public UNIT_WIDTH = this.NODE_WIDTH + 2 * this.NODE_PADDING_WIDTH + this.NODE_MARGIN; 
  public UNIT_HEIGHT = this.NODE_HEIGHT + 2 * this.NODE_PADDING_HEIGHT + this.NODE_MARGIN; 
  public grid: any = [];
  public todoList: any = [];

  constructor() {
  }

  /*
  public getNodePosX(node: Node) {
    let zone = node.zone;
    let colOffset = node.colOffset || 0;
    return (zone.col + colOffset) * this.UNIT_WIDTH;
  }

  public getNodePosY(node: Node) {
    let zone = node.zone;
    return (zone.row + node.level) * this.UNIT_HEIGHT;
  }

  public getNodeIdPosX(nodeId: string) {
    let node = NODE[nodeId];
    return this.getNodePosX(node);
  }

  public getNodeIdPosY(nodeId: string) {
    let node = NODE[nodeId];
    return this.getNodePosY(node);
  }

  public getZonePosX(zone: any) {
    return zone.col * this.UNIT_WIDTH;
  }

  public getZonePosYStart(zone: any) {
    return zone.row * this.UNIT_HEIGHT - this.NODE_PADDING_HEIGHT;
  }

  public getZonePosYEnd(zone: any) {
    return (zone.row + zone.numRows - 1) * this.UNIT_HEIGHT + this.NODE_HEIGHT + this.NODE_PADDING_HEIGHT; // + this.NODE_PADDING_HEIGHT;
  }
  */

  ngOnInit(): void {
    NODE["LOC_ASYLUM"].done = true;
    this.grid = [];
    this.todoList = [];
    for (let zoneKey in this.allZones) {
      let zone = this.allZones[zoneKey];
      let nodesInZone = this.getNodesInZone(zone);
      // let row: any = [];
      // this.grid.push(row);
      for (let node in nodesInZone) {
        // row.push(node);
        this.todoList.push(node);
      }

      // let row: any = [];
      // this.grid.push(row);
      // for (let nodeKey in this.allNodes) {
      //   let node = this.allNodes[nodeKey];
      //   if (node.zone.title == zone.title) {
      //     row.push(node);
      //     this.todoList.push(node);
      //   }
      // }
    }
  }

  public getNodesInZone(zone: Zone) {
    let nodeList = [];
    for (let nodeKey in this.allNodes) {
      let node = this.allNodes[nodeKey];
      if (node.zone.title == zone.title) {
        nodeList.push(node);
      }
    }
    return nodeList;
  }

  public getStatus(node: Node) {
    if (node.done) return "DONE";
    if (this.isPartiallyUnlocked(node)) return "VISIBLE_BUT_NOT_DOABLE"; // visible but users can't mark as done yet
    if (this.isVisible(node)) return "DOABLE"; // visible and user can mark as done if they did it
    return "NOT_VISIBLE";
  }

  public isDone(node: Node): boolean {
    if (node.done) {
      return true;
    }
    return false;
  }

  public shouldHideDone(node: Node): boolean {
    if (node.done && !this.showDone) {
      return true;
    }
    return false;
  }

  public isUnlockable(node: Node): boolean {
    if (this.isDone(node)) {
      // already unlocked
      return false;
    }
    if (node.ifAny && node.ifAny.length > 0) {
      for (let depId of node.ifAny) {
        let dep = NODE[depId];
        if (dep.done) {
          // if any of the "any" dependencies are done, it's unlockable
          return true;
        }
      }
    }
    if (node.ifAll && node.ifAll.length > 0) {
      for (let depId of node.ifAll) {
        let dep = NODE[depId];
        if (!dep.done) {
          // if any of the "all" dependencies are NOT done, it's locked
          return false;
        }
      }
      // if all of the "all" dependencies are done, it's unlockable
      return true;
    }
    return false;
  }

  public isVisible(node: Node): boolean {
    //console.log("getting visibility for:", node);
    if (this.isDone(node)) {
      return true;
    }
    if (this.isUnlockable(node)) {
      return true;
    }
    if (this.isPartiallyUnlocked(node)) {
      return true;
    }
    return false;
  }

  public isPartiallyUnlocked(node: Node): boolean {
    //console.log("getting isPartiallyUnlocked for:", node);
    if (node.done) {
      return false;
    }
    // we only show something as locked if there is at least 2 dependencies
    // AND they have not unlocked all of them
    if (node.ifAny && node.ifAny.length > 0) {
      // so for an OR, this is never true
      return false;
    }
    if (node.ifAll && node.ifAll.length > 1) {
      let numDepsDone = 0;
      for (let depId of node.ifAll) {
        let dep = NODE[depId];
        if (dep.done) {
          numDepsDone++;
        }
      }
      if (numDepsDone > 0 && numDepsDone < node.ifAll.length) {
        return true;
      }
      return false;
    }
    return false;
  }

  public markDone(node: Node) {
    node.done = true;
  }

  public setShowAllSpoilers(newValue: boolean) {
    this.showAllSpoilers = newValue;
  }

  public setShowDone(newValue: boolean) {
    this.showDone = newValue;
  }

  public getVerb(node: Node) {
    switch(node.type) {
      case 'kil': return "Kill";
      case 'loc': return "Discover";
      case 'maj': return ""; // "do";
      case 'get': return "Get";
    }
    return node.type;
  }

  public getVerbPastTense(node: Node) {
    switch(node.type) {
      case 'kil': return "killed";
      case 'loc': return "discovered";
      case 'maj': return "did";
      case 'get': return "got";
    }
    return node.type;
  }

  public shouldDisplayNode(node: Node) {
    return !(this.shouldHideDone(node)) && ((this.isVisible(node) || this.showAllSpoilers));
  }

  public shouldDisplayZone(zone: Zone) {
    let nodesInZone = this.getNodesInZone(zone);
    for (let node of nodesInZone) {
      if (this.shouldDisplayNode(node)) {
        return true;
      }
    }
    return false;
  }

}
