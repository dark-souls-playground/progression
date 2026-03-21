import { Component, OnInit } from '@angular/core';
import { Node, Zone, Dictionary, NodeCondition } from './node';
import { NODES, ZONES } from './node-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'progression';
  public allZones = ZONES;
  public allNodes = NODES;
  public zoneMap: Dictionary<Zone> = {};
  public nodeMap: Dictionary<Node> = {};
  public showDone: boolean = true;
  public agreeToTerms: boolean = false;
  public showAllSpoilers: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    for (let zone of this.allZones) {
      this.zoneMap[zone.id] = zone;
    }
    for (let node of this.allNodes) {
      this.nodeMap[node.id] = node;
    }
  }

  public getNodesInZone(zone: Zone) {
    let nodeList = [];
    for (let nodeKey in this.allNodes) {
      let node = this.allNodes[nodeKey];
      if (node.zoneId == zone.id) {
        nodeList.push(node);
      }
    }
    return nodeList;
  }

  /*
  public getStatus(node: Node) {
    if (node.done) return "DONE";
    if (this.isPartiallyUnlocked(node)) return "VISIBLE_BUT_NOT_DOABLE"; // visible but users can't mark as done yet
    if (this.isVisible(node)) return "DOABLE"; // visible and user can mark as done if they did it
    return "NOT_VISIBLE";
  }
  */

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

  public isAccessible(node: Node): boolean {
    /*
    try to keep this orthogonal to whether it's done or not
    if (this.isDone(node)) {
      // already unlocked
      return false;
    }
    */
    if (node.unlessAny && node.unlessAny.length > 0) {
      for (let depId of node.unlessAny) {
        let dep = this.nodeMap[depId];
        if (dep.done) {
          // if any of the "unless" dependencies are done, it's not accessible
          return false;
        }
      }
    }
    if (node.ifAny && node.ifAny.length > 0) {
      for (let depId of node.ifAny) {
        let dep = this.nodeMap[depId];
        if (dep.done) {
          // if any of the "any" dependencies are done, it's accessible
          return true;
        }
      }
    }
    if (node.ifAll && node.ifAll.length > 0) {
      for (let depId of node.ifAll) {
        let dep = this.nodeMap[depId];
        if (!dep.done) {
          // if any of the "all" dependencies are NOT done, it's locked
          return false;
        }
      }
      // if all of the "all" dependencies are done, it's unlockable
      return true;
    }
    console.warn("Node with no ifAny, ifAll, unlessAny conditions:", node);
    return false;
  }

  public isLocked(node: Node): boolean {
    /*
    try to keep this orthogonal to whether it's done or not
    if (this.isDone(node)) {
      // already unlocked
      return false;
    }
    */
    if (node.lockedUnlessAny && node.lockedUnlessAny.length > 0) {
      for (let depId of node.lockedUnlessAny) {
        let dep = this.nodeMap[depId];
        if (dep.done) {
          // if any of the "lockedUnlessAny" dependencies are done, it's unlocked
          return false;
        }
      }
      return true;
    }
    // if there are no lockedUnlessAny conditions, we consider it not locked
    // (even if it's not accessible yet - keep this orthogonal)
    return false;
  }

  public isVisible(node: Node): boolean {
    // NOTE: Checking to see if we can make this orthogonal to whether it's done...
    /*
    if (this.isDone(node)) {
      return true;
    }
    */
    if (this.isAccessible(node)) {
      return true;
    }
    return false;
  }

  // OLD
  /*
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
        let dep = this.nodeMap[depId];
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
  */

  public markDone(node: Node) {
    node.done = true;
    this.handleAutoDone(node);
  }

  public handleAutoDone(prereqNode: Node) {
    for (let node of this.allNodes) {
      if (node.autoDoneIf && node.autoDoneIf == prereqNode.id) {
        node.done = true;
      }   
    }
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
      case 'maj': return ""; // "Do";
      case 'get': return "Get";
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

  public evaluateCondition(c: NodeCondition): boolean {
    if (typeof c === "string") {
      let node = this.nodeMap[c];
      return this.isDone(node);
    }
    if (c.ifAny) {
      for (let subcondition of c.ifAny) {
        let isDepDone = this.evaluateCondition(subcondition);
        if (isDepDone) {
          return true;
        }
      }
      return false;
    }
    if (c.ifAll) {
      for (let subcondition of c.ifAll) {
        let isDepDone = this.evaluateCondition(subcondition);
        if (!isDepDone) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

}
