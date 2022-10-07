export interface Zone {
    key: string;
    title: string;
    color: string;
    col?: number;
    row?: number;
    numRows?: number;
}

export interface LevelRange {
    title: string;
    col: number;
}

export interface Node {
    zone: Zone;
    type: string; // "loc", "kil", "maj"
    id?: string;
    loc?: string; // TODO: make this required
    title: string;
    image?: string;
    recomm?: string;
    //level: number;
    //colOffset?: number;
    ifAny?: string[];
    ifAll?: string[];
    done?: boolean;
    visible?: boolean;
}
