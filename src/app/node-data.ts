import { Node, Zone } from './node';

interface Dictionary<T> {
    [Key: string]: T;
}

export const ZONE: Dictionary<Zone> = {
    "ASYLUM": { key: "ASYLUM", color: "#c0a0a0", col: 5, row: 1, numRows: 2, title: "N. Undead Asylum" },
    "FIRELI": { key: "FIRELI", color: "#c0ffc0", col: 5, row: 4, numRows: 1, title: "Firelink Shrine" },
    "UDBURG": { key: "UDBURG", color: "#c0c0c0", col: 4, row: 6, numRows: 5, title: "Undead Burg" },
    "PARISH": { key: "PARISH", color: "#c0c0a0", col: 4, row: 12, numRows: 5, title: "Undead Parish" },
    "DEPTHS": { key: "DEPTHS", color: "#a0a0a0", col: 6, row: 9, numRows: 2, title: "The Depths" },
    "BLIGHT": { key: "BLIGHT", color: "#ffffa0", col: 6, row: 12, numRows: 1, title: "Blighttown" },
    "QUEDOM": { key: "QUEDOM", color: "#ffa0a0", col: 6, row: 14, numRows: 3, title: "Quelaag's Domain" },
    "SENFOR": { key: "SENFOR", color: "#ff8080", col: 5, row: 18, numRows: 2, title: "Sen's Fortress" },
    "ANRLND": { key: "ANRLND", color: "#ffffa0", col: 5, row: 21, numRows: 3, title: "Anor Londo" },
    "FIRALT": { key: "FIRALT", color: "#ffa0a0", col: 5, row: 25, numRows: 4, title: "Firelink Altar" },
    "CATACO": { key: "CATACO", color: "#ff8080", col: 6, row: 30, numRows: 3, title: "The Catacombs" },
    "TMBGNT": { key: "TMBGNT", color: "#c04040", col: 6, row: 34, numRows: 3, title: "Tomb of the Giants" },
    "DRGARD": { key: "DRGARD", color: "#a0ffa0", col: 1, row: 23, numRows: 5, title: "Darkroot Garden" },
    "DRBASN": { key: "DRBASN", color: "#a0ffc0", col: 1, row: 23, numRows: 5, title: "Darkroot Basin" },
    "VDRAKE": { key: "VDRAKE", color: "#a0ffc0", col: 1, row: 23, numRows: 5, title: "Valley of Drakes" },
    "DUKARC": { key: "DUKARC", color: "#a0c0ff", col: 4, row: 30, numRows: 3, title: "Duke's Archives" },
    "CRYCAV": { key: "CRYCAV", color: "#c0ffff", col: 4, row: 34, numRows: 3, title: "Crystal Cave" },
    "NLRUIN": { key: "NLRUIN", color: "#a0ffff", col: 2, row: 30, numRows: 3, title: "New Londo Ruins" },
    "ABYSS1": { key: "ABYSS1", color: "#404040", col: 2, row: 34, numRows: 3, title: "The Abyss" },
    "DMRUIN": { key: "DMRUIN", color: "#ffc080", col: 8, row: 29, numRows: 4, title: "Demon Ruins" },
    "IZALIT": { key: "IZALIT", color: "#ffa040", col: 8, row: 34, numRows: 3, title: "Lost Izalith" },
    "KILNFF": { key: "KILNFF", color: "#606060", col: 5, row: 39, numRows: 6, title: "Kiln of the First Flame" }
};


export const NODE: Dictionary<Node> = {

    // TODO: MASTER KEY (NOT MVP v1.0)
    //   "Did you choose Master Key as starting gift?"
    //   "Get Master Key from ???"
    //   Fix doors (e.g. Watchtower Key OR Master Key)
    // TODO: ADD Moonlight Butterfly
    // TODO: ADD Valley of Drakes
    // TODO: Unlock elevator btw Parish and Firelink, Revisit Asylum, get Peculiar Doll, Painted World (optional content)
    // TODO: Key to Londo Ruins...
    // TODO: Izalith shortcut via Chaos Servant covenant +30 Humanity
    // TODO: Unlock other shortcuts?

    "LOC_ASYLUM": { zone: ZONE.ASYLUM, type: "loc", title: "N. Undead Asylum", ifAny: [], recomm: "Lv 1-10", image: "assets/images/places/northern-undead-asylum.jpg" },
    "KIL_ASYDEM": { zone: ZONE.ASYLUM, type: "kil", title: "Asylum Demon", ifAny: ["LOC_ASYLUM"], recomm: "Lv 1-10", image: "assets/images/enemies/asylum-demon.jpg" },
    "LOC_FIRELI": { zone: ZONE.ASYLUM, type: "loc", title: "Firelink Shrine", ifAny: ["KIL_ASYDEM"], recomm: "Lv 1-10", image: "assets/images/places/firelink-shrine.jpg" },

    "LOC_UBURG1": { zone: ZONE.FIRELI, type: "loc", title: "Undead Burg", ifAny: ["LOC_FIRELI"], recomm: "Lv 1-10" },
    "LOC_CATACO": { zone: ZONE.FIRELI, type: "loc", title: "Catacombs", ifAny: ["LOC_FIRELI"], recomm: "Lv 30-50" },
    "LOC_NLRUIN": { zone: ZONE.FIRELI, type: "loc", title: "New Londo Ruins", ifAny: ["LOC_FIRELI"], recomm: "Lv 50-70" },
    "LOC_ELEVAT": { zone: ZONE.FIRELI, type: "maj", title: "Take elevator to Parish", ifAll: ["LOC_FIRELI", "MAJ_FIXELE"], recomm: "Lv 1-10" },
    "MAJ_JFRAMP": { zone: ZONE.FIRELI, type: "maj", title: "Talk to Frampt", ifAll: ["MAJ_GETVES"], recomm: "Lv 50-70" },

    "KIL_TAURUS": { zone: ZONE.UDBURG, type: "kil", title: "Taurus Demon", ifAny: ["LOC_UBURG1"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },
    "LOC_UBURG2": { zone: ZONE.UDBURG, type: "maj", title: "Find bridge with red dragon", ifAny: ["KIL_TAURUS"], recomm: "Lv 1-10" },
    "LOC_LBURG1": { zone: ZONE.UDBURG, type: "maj", title: "Unlock door by bridge and go down", ifAll: ["LOC_UBURG2", "MAJ_BASKEY"], recomm: "Lv 20-30" },
    "LOC_PARISH": { zone: ZONE.UDBURG, type: "loc", title: "Undead Parish", ifAny: ["LOC_UBURG2"], recomm: "Lv 10-20" },
    "LOC_DEPTHS": { zone: ZONE.UDBURG, type: "maj", title: "Unlock door to The Depths", ifAll: ["LOC_LBURG1", "KIL_CAPDEM"], recomm: "Lv 20-30" },
    "KIL_CAPDEM": { zone: ZONE.UDBURG, type: "kil", title: "Capra Demon", ifAny: ["LOC_LBURG1"], recomm: "Lv 20-30" },
    "LOC_WTBDOR": { zone: ZONE.UDBURG, type: "loc", title: "Door at bottom of Burg tower", ifAny: ["LOC_UBURG1", "LOC_DRBASL"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },
    // TODO: add option to unlock door using Master Key
    "MAJ_OPNWTB": { zone: ZONE.UDBURG, type: "maj", title: "Unlock door at bottom of Burg tower (Havel area)", ifAll: ["LOC_WTBDOR", "GET_WTBKEY"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },

    "MAJ_FIXELE": { zone: ZONE.PARISH, type: "maj", title: "Find elevator and take it down", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    "KIL_BELGAR": { zone: ZONE.PARISH, type: "kil", title: "Bell Gargoyles", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    "MAJ_BELL01": { zone: ZONE.PARISH, type: "maj", title: "Ring the First Bell", ifAny: ["KIL_BELGAR"], recomm: "Lv 10-20" },
    "MAJ_BASKEY": { zone: ZONE.PARISH, type: "maj", title: "Find Basement Key", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    "LOC_SENFOR": { zone: ZONE.PARISH, type: "maj", title: "GATE open to Sen's Fortress", ifAll: ["LOC_PARISH", "MAJ_BELL01", "MAJ_BELL02"], recomm: "Lv 35-45" },
    "LOC_DRGAR1": { zone: ZONE.PARISH, type: "loc", title: "Darkroot Garden (outside Parish)", ifAny: ["LOC_PARISH"], recomm: "Lv 35-50" },
    "MAJ_BUYCOA": { zone: ZONE.PARISH, type: "maj", title: "BUY Crest of Artorias from Andre for 20,000 souls", ifAll: ["LOC_PARISH"], recomm: "Lv 35-50" },

    "KIL_GAPDRG": { zone: ZONE.DEPTHS, type: "kil", title: "Gaping Dragon + Key to Blighttown", ifAny: ["LOC_DEPTHS"], recomm: "Lv 20-30" },
    "LOC_BLIGHT": { zone: ZONE.DEPTHS, type: "maj", title: "UNLOCK door to Blighttown", ifAny: ["KIL_GAPDRG"], recomm: "Lv 30-40" },

    "LOC_QUEDOM": { zone: ZONE.BLIGHT, type: "loc", title: "Quelaag's Domain", ifAny: ["LOC_BLIGHT"], recomm: "Lv 35-45" },

    "KIL_QUELAA": { zone: ZONE.QUEDOM, type: "kil", title: "Chaos Witch Quelaag", ifAny: ["LOC_QUEDOM"], recomm: "Lv 35-45" },
    "MAJ_BELL02": { zone: ZONE.QUEDOM, type: "maj", title: "Ring the Second Bell", ifAny: ["KIL_QUELAA"], recomm: "Lv 35-45" },

    "KIL_MLBFLY": { zone: ZONE.DRGARD, type: "kil", title: "Moonlight Butterfly", ifAny: ["LOC_DRGAR1"], recomm: "Lv ??-??" },
    "GET_WTBKEY": { zone: ZONE.DRGARD, type: "get", title: "Watchtower Basement Key", ifAny: ["KIL_MLBFLY"], recomm: "Lv ??-??" },
    "MAJ_OPNSOA": { zone: ZONE.DRGARD, type: "maj", title: "UNLOCK Seal of Artorias", ifAll: ["LOC_DRGAR1", "MAJ_BUYCOA"], recomm: "Lv 35-50" },
    "LOC_DRGAR2": { zone: ZONE.DRGARD, type: "loc", title: "Darkroot Garden (middle) (between Seal and Alvina)", ifAny: ["MAJ_OPNSOA", "LOC_DRGAR3"], recomm: "Lv 35-50" },
    "LOC_DRGAR3": { zone: ZONE.DRGARD, type: "loc", title: "Darkroot Garden (back)", ifAny: ["LOC_DRGAR2", "KIL_HYDRA1"], recomm: "Lv 35-50" },
    "KIL_GGWSIF": { zone: ZONE.DRGARD, type: "kil", title: "Great Gray Wolf Sif", ifAny: ["LOC_DRGAR3"], recomm: "Lv 35-50" },
    "GET_COVART": { zone: ZONE.DRGARD, type: "get", title: "AUTO Get Covenant of Artorias (ring)", ifAny: ["KIL_GGWSIF"], recomm: "Lv 35-50" },

    "LOC_DRBAST": { zone: ZONE.DRBASN, type: "loc", title: "Darkroot Basin: long skinny path", ifAny: ["LOC_DRGAR1", "LOC_DRBASL", "LOC_DRBASC"], recomm: "Lv ??-??" },
    "LOC_DRBASC": { zone: ZONE.DRBASN, type: "loc", title: "Darkroot Basin: bonfire in cave", ifAny: ["LOC_DRBAST", "LOC_VDRAKE"], recomm: "Lv ??-??" },
    "LOC_DRBASL": { zone: ZONE.DRBASN, type: "loc", title: "Darkroot Basin: lake area with hydra and golems", ifAny: ["MAJ_OPNWTB", "LOC_DRBAST", "KIL_HYDRA1"], recomm: "Lv ??-??" },
    "KIL_HYDRA1": { zone: ZONE.DRBASN, type: "kil", title: "Hydra", ifAny: ["LOC_DRBASL", "LOC_DRBASB"], recomm: "Lv ??-??" },
    "LOC_DRBASB": { zone: ZONE.DRBASN, type: "loc", title: "Ladder behind Hydra", ifAny: ["KIL_HYDRA1", "LOC_DRGAR3"], recomm: "Lv ??-??" },
    // TODO: DLC Requirements and DLC Content
    "MAJ_DLC!!!": { zone: ZONE.DRBASN, type: "maj", title: "DLC (if you do other requirements)", ifAny: ["KIL_HYDRA1"], recomm: "Lv ??-??" },

    "LOC_VDRAKE": { zone: ZONE.VDRAKE, type: "loc", title: "Valley of Drakes", ifAny: ["LOC_DRBASC"], recomm: "Lv ??-??" },

    "KIL_IRNGOL": { zone: ZONE.SENFOR, type: "kil", title: "Iron Golem", ifAny: ["LOC_SENFOR"], recomm: "Lv 35-45" },
    "LOC_ANRLND": { zone: ZONE.SENFOR, type: "maj", title: "TRAVEL TO Anor Londo", ifAny: ["KIL_IRNGOL"], recomm: "Lv 45-60" },

    "KIL_ORNSMO": { zone: ZONE.ANRLND, type: "kil", title: "Ornstein & Smough", ifAny: ["LOC_ANRLND"], recomm: "Lv 50-60" },
    "MAJ_GETVES": { zone: ZONE.ANRLND, type: "maj", title: "Get the Lordvessel", ifAny: ["KIL_ORNSMO"], recomm: "Lv 50-60" },

    "LOC_FIRALT": { zone: ZONE.FIRALT, type: "loc", title: "Firelink Altar", ifAny: ["MAJ_JFRAMP", "MAJ_JKAATH"], recomm: "Lv 50-60" },
    "MAJ_PUTVES": { zone: ZONE.FIRALT, type: "maj", title: "Place the Lordvessel", ifAny: ["LOC_FIRALT"], recomm: "Lv 50-60" },

    "KIL_PINWHL": { zone: ZONE.CATACO, type: "kil", title: "Pinwheel", ifAny: ["LOC_CATACO"], recomm: "Lv 30-50" },
    "LOC_TMBGNT": { zone: ZONE.CATACO, type: "loc", title: "(Orange Fog Gate if locked) Tomb of the Giants", ifAll: ["KIL_PINWHL", "MAJ_PUTVES"], recomm: "Lv 55-75" },

    "KIL_GLNITO": { zone: ZONE.TMBGNT, type: "kil", title: "Gravelord Nito", ifAny: ["LOC_TMBGNT"], recomm: "Lv 55-75" },
    "GET_LSOUL1": { zone: ZONE.TMBGNT, type: "get", title: "AUTO Get Lord Soul", ifAny: ["KIL_GLNITO"], recomm: "Lv 55-75" },

    "LOC_DUKARC": { zone: ZONE.DUKARC, type: "loc", title: "(Orange Fog Gate if locked) Duke's Archives", ifAll: ["LOC_ANRLND", "MAJ_PUTVES"], recomm: "Lv 50-70" },
    "MAJ_SEATH1": { zone: ZONE.DUKARC, type: "maj", title: "Seath Encounter", ifAny: ["LOC_DUKARC"], recomm: "Lv 50-70" },
    "LOC_DUKAR2": { zone: ZONE.DUKARC, type: "loc", title: "Duke's Archives Pt. 2", ifAny: ["MAJ_SEATH1"], recomm: "Lv 50-70" },
    "LOC_CRYCAV": { zone: ZONE.CRYCAV, type: "loc", title: "Crystal Caves", ifAny: ["LOC_DUKAR2"], recomm: "Lv 55-75" },
    "KIL_SEATH2": { zone: ZONE.CRYCAV, type: "kil", title: "Seath", ifAny: ["LOC_CRYCAV"], recomm: "Lv 55-75" },
    "GET_LSSHD2": { zone: ZONE.CRYCAV, type: "get", title: "AUTO Get Lord Soul Shard", ifAny: ["KIL_SEATH2"], recomm: "Lv 55-75" },

    "GET_H2OKEY": { zone: ZONE.NLRUIN, type: "get", title: "Key to the Seal", ifAny: ["LOC_NLRUIN"], recomm: "Lv 50-70" },
    "MAJ_LOWH2O": { zone: ZONE.NLRUIN, type: "maj", title: "Lower the Water", ifAny: ["GET_H2OKEY"], recomm: "Lv 50-70" },
    "LOC_ABYSS1": { zone: ZONE.ABYSS1, type: "loc", title: "The Abyss", ifAll: ["MAJ_LOWH2O", "GET_COVART"], recomm: "Lv 50-70" },
    "KIL_FOURKG": { zone: ZONE.ABYSS1, type: "kil", title: "Four Kings", ifAny: ["LOC_ABYSS1"], recomm: "Lv 50-70" },
    "GET_LSSHD1": { zone: ZONE.ABYSS1, type: "get", title: "AUTO Get Lord Soul Shard", ifAny: ["KIL_FOURKG"], recomm: "Lv 50-70" },
    "MAJ_JKAATH": { zone: ZONE.ABYSS1, type: "maj", title: "Talk to Kaathe", ifAll: ["KIL_FOURKG", "MAJ_GETVES"], recomm: "Lv 50-70" },

    "LOC_DMRUIN": { zone: ZONE.DMRUIN, type: "loc", title: "Demon Ruins", ifAny: ["KIL_QUELAA"], recomm: "Lv 60-75" },
    "KIL_DSCHRG": { zone: ZONE.DMRUIN, type: "kil", title: "Ceaseless Discharge", ifAny: ["LOC_DMRUIN"], recomm: "Lv 60-75" },
    "KIL_FIRESG": { zone: ZONE.DMRUIN, type: "kil", title: "(Orange Fog Gate if locked) Demon Firesage", ifAll: ["KIL_DSCHRG", "MAJ_PUTVES"], recomm: "Lv 65-80" },
    "KIL_CENTIP": { zone: ZONE.DMRUIN, type: "kil", title: "Centipede Demon", ifAny: ["KIL_FIRESG"], recomm: "Lv 65-80" },
    "LOC_IZALIT": { zone: ZONE.IZALIT, type: "loc", title: "Lost Izalith", ifAny: ["KIL_CENTIP"], recomm: "Lv 65-80" },
    "KIL_BCHAOS": { zone: ZONE.IZALIT, type: "kil", title: "Bed of Chaos", ifAny: ["LOC_IZALIT"], recomm: "Lv 65-80" },
    "GET_LSOUL2": { zone: ZONE.IZALIT, type: "get", title: "AUTO Get Lord Soul", ifAny: ["KIL_BCHAOS"], recomm: "Lv 65-80" },

    "MAJ_FILVES": { zone: ZONE.KILNFF, type: "maj", title: "Fill the Lordvessel (completely)", ifAll: ["GET_LSSHD1", "GET_LSSHD2", "GET_LSOUL1", "GET_LSOUL2"], recomm: "Lv 70-99" },
    "LOC_KILNFF": { zone: ZONE.KILNFF, type: "loc", title: "Descend into land of ashes and Black Knights", ifAll: ["MAJ_FILVES"], recomm: "Lv 70-99" },
    "KIL_GWYNLC": { zone: ZONE.KILNFF, type: "kil", title: "Gwyn, Lord of Cinder (do DLC first!)", ifAny: ["LOC_KILNFF"], recomm: "Lv 70-99" },
    "MAJ_AGEFIR": { zone: ZONE.KILNFF, type: "maj", title: "Light bonfire", ifAny: ["KIL_GWYNLC"], recomm: "Lv 70-99" },
    "MAJ_AGEDRK": { zone: ZONE.KILNFF, type: "maj", title: "Leave bonfire", ifAny: ["KIL_GWYNLC"], recomm: "Lv 70-99" },
    "MAJ_FINISH": { zone: ZONE.KILNFF, type: "maj", title: "AUTO Watch the ending, enter New Game+, reset keys", ifAny: ["MAJ_AGEFIR", "MAJ_AGEDRK"], recomm: "Lv 70-99" }

};
