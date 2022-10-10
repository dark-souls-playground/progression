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
    zone: Zone;
    type: string; // "loc", "kil", "maj"
    id?: string;
    title: string;
    image?: string;
    recomm?: string;
    ifAny?: string[];
    ifAll?: string[];
    autoDoneIf?: string;
    done?: boolean;
    visible?: boolean;
}
