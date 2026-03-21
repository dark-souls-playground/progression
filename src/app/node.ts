export interface Dictionary<T> {
    [Key: string]: T;
}

export interface Zone {
    id: string;
    title: string;
    color: string;
}

export interface LevelRange {
    title: string;
    col: number;
}

export interface Node {
    id: string;
    zoneId: string;
    type: string; // "loc", "kil", "maj"
    title: string;
    image?: string;
    recomm?: string;
    ifAny?: string[];
    ifAll?: string[];
    unlessAny?: string[];
    lockedUnlessAny?: string[];
    autoDoneIf?: string;
    done?: boolean;
    //visible?: boolean;
}

export type NodeCondition = string | {
    ifAny?: NodeCondition[],
    ifAll?: NodeCondition[]
}
