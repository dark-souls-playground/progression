import { Node, Zone } from './node';

interface Dictionary<T> {
    [Key: string]: T;
}

export const ZONE: Dictionary<Zone> = {
    "ASYLUM": { id: "ASYLUM", color: "#c0a0a0", title: "Undead Asylum" },
    "FIRELI": { id: "FIRELI", color: "#c0ffc0", title: "Firelink Shrine" },
    "UDBURG": { id: "UDBURG", color: "#c0c0c0", title: "Undead Burg" },
    "PARISH": { id: "PARISH", color: "#c0c0a0", title: "Undead Parish" },
    "VDRAKE": { id: "VDRAKE", color: "#a0ffc0", title: "Valley of Drakes" },
    "DEPTHS": { id: "DEPTHS", color: "#a0a0a0", title: "The Depths" },
    "BLIGHT": { id: "BLIGHT", color: "#ffffa0", title: "Blighttown" },
    "QUEDOM": { id: "QUEDOM", color: "#ffa0a0", title: "Quelaag's Domain" },
    "SENFOR": { id: "SENFOR", color: "#ff8080", title: "Sen's Fortress" },
    "ANRLND": { id: "ANRLND", color: "#ffffa0", title: "Anor Londo" },
    "FIRALT": { id: "FIRALT", color: "#ffa0a0", title: "Firelink Altar" },
    "CATACO": { id: "CATACO", color: "#ff8080", title: "The Catacombs" },
    "TMBGNT": { id: "TMBGNT", color: "#c04040", title: "Tomb of the Giants" },
    "DRGARD": { id: "DRGARD", color: "#a0ffa0", title: "Darkroot Garden" },
    "DRBASN": { id: "DRBASN", color: "#a0ffc0", title: "Darkroot Basin" },
    "DUKARC": { id: "DUKARC", color: "#a0c0ff", title: "Duke's Archives" },
    "CRYCAV": { id: "CRYCAV", color: "#c0ffff", title: "Crystal Cave" },
    "NLRUIN": { id: "NLRUIN", color: "#a0ffff", title: "New Londo Ruins" },
    "ABYSS1": { id: "ABYSS1", color: "#404040", title: "The Abyss" },
    "DMRUIN": { id: "DMRUIN", color: "#ffc080", title: "Demon Ruins" },
    "IZALIT": { id: "IZALIT", color: "#ffa040", title: "Lost Izalith" },
    "KILNFF": { id: "KILNFF", color: "#606060", title: "Kiln of the First Flame" }
};


export const NODE: Dictionary<Node> = {

    // TODO: MASTER KEY (NOT MVP v1.0)
    //   "Did you choose Master Key as starting gift?"
    //   "Get Master Key from ???"
    //   Fix doors (e.g. Watchtower Key OR Master Key)
    // TODO: finish Valley of Drakes
    // TODO: auto
    // TODO: exclusive
    // TODO: missions
    // TODO: NPC dialogue text
    // TODO: Revisit Asylum, get Peculiar Doll, Painted World (optional content)
    // TODO: Key to Londo Ruins...
    // TODO: Izalith shortcut via Chaos Servant covenant +30 Humanity
    // TODO: Unlock other shortcuts?

    "MAJ_NGAME0": { id: "MAJ_NGAME0", zone: ZONE.ASYLUM, type: "loc", title: "Start New Game", ifAny: [], recomm: "Lv 1-10", image: "assets/images/places/northern-undead-asylum.jpg" },
    "KIL_ASYDEM": { id: "KIL_ASYDEM", zone: ZONE.ASYLUM, type: "kil", title: "Asylum Demon", ifAny: ["MAJ_NGAME0"], recomm: "Lv 1-10", image: "assets/images/enemies/asylum-demon.jpg" },
    "LOC_FIRELI": { id: "LOC_FIRELI", zone: ZONE.ASYLUM, type: "loc", title: "Firelink Shrine", ifAny: ["KIL_ASYDEM"], recomm: "Lv 1-10", image: "assets/images/places/firelink-shrine.jpg" },

    "LOC_UBURG1": { id: "LOC_UBURG1", zone: ZONE.FIRELI, type: "loc", title: "Undead Burg", ifAny: ["LOC_FIRELI"], recomm: "Lv 1-10" },
    "LOC_CATACO": { id: "LOC_CATACO", zone: ZONE.FIRELI, type: "loc", title: "Catacombs", ifAny: ["LOC_FIRELI"], recomm: "Lv 30-50" },
    "LOC_NLRUIN": { id: "LOC_NLRUIN", zone: ZONE.FIRELI, type: "loc", title: "New Londo Ruins", ifAny: ["LOC_FIRELI"], recomm: "Lv 50-70" },
    "LOC_ELEVAT": { id: "LOC_ELEVAT", zone: ZONE.FIRELI, type: "maj", title: "Fix elevator to Parish", ifAll: ["LOC_FIRELI", "MAJ_FIXELE"], autoDoneIf: "MAJ_FIXELE", recomm: "Lv 1-10" },
    "MAJ_BUYMKY": { id: "MAJ_BUYMKY", zone: ZONE.FIRELI, type: "maj", title: "Buy Master Key from Domhnall for 5,000 souls", ifAll: ["MAJ_BELL01", "MAJ_BELL02"], recomm: "Lv ??-??" },
    "MAJ_JFRAMP": { id: "MAJ_JFRAMP", zone: ZONE.FIRELI, type: "maj", title: "Talk to Frampt", ifAll: ["MAJ_GETVES"], recomm: "Lv 50-70" },

    "KIL_TAURUS": { id: "KIL_TAURUS", zone: ZONE.UDBURG, type: "kil", title: "Taurus Demon", ifAny: ["LOC_UBURG1"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },
    "LOC_UBURG2": { id: "LOC_UBURG2", zone: ZONE.UDBURG, type: "maj", title: "Find bridge with red dragon", ifAny: ["KIL_TAURUS"], recomm: "Lv 1-10" },
    "LOC_LBURG1": { id: "LOC_LBURG1", zone: ZONE.UDBURG, type: "maj", title: "Unlock door by bridge and go down", ifAll: ["LOC_UBURG2", "MAJ_BASKEY"], recomm: "Lv 20-30" },
    "LOC_PARISH": { id: "LOC_PARISH", zone: ZONE.UDBURG, type: "loc", title: "Undead Parish", ifAny: ["LOC_UBURG2"], recomm: "Lv 10-20" },
    "KIL_CAPDEM": { id: "KIL_CAPDEM", zone: ZONE.UDBURG, type: "kil", title: "Capra Demon", ifAny: ["LOC_LBURG1"], recomm: "Lv 20-30" },
    "GET_DEPKEY": { id: "GET_DEPKEY", zone: ZONE.UDBURG, type: "get", title: "Key to the Depths", ifAny: ["KIL_CAPDEM"], autoDoneIf: "KIL_CAPDEM", recomm: "Lv 20-30" },
    "LOC_DEPTHS": { id: "LOC_DEPTHS", zone: ZONE.UDBURG, type: "maj", title: "Unlock door to The Depths", ifAll: ["LOC_LBURG1", "KIL_CAPDEM"], recomm: "Lv 20-30" },
    "LOC_WTBDOR": { id: "LOC_WTBDOR", zone: ZONE.UDBURG, type: "loc", title: "Door at bottom of Burg tower", ifAny: ["LOC_UBURG1", "LOC_DRBASL"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },
    // TODO: add option to unlock door using Master Key
    "MAJ_OPNWTB": { id: "MAJ_OPNWTB", zone: ZONE.UDBURG, type: "maj", title: "Unlock door at bottom of Burg tower (Havel area)", ifAll: ["LOC_WTBDOR", "GET_WTBKEY"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },

    "MAJ_FIXELE": { id: "MAJ_FIXELE", zone: ZONE.PARISH, type: "maj", title: "Find elevator and take it down", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    "KIL_BELGAR": { id: "KIL_BELGAR", zone: ZONE.PARISH, type: "kil", title: "Bell Gargoyles", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    "MAJ_BELL01": { id: "MAJ_BELL01", zone: ZONE.PARISH, type: "maj", title: "Ring the First Bell", ifAny: ["KIL_BELGAR"], recomm: "Lv 10-20" },
    "MAJ_BASKEY": { id: "MAJ_BASKEY", zone: ZONE.PARISH, type: "maj", title: "Find Basement Key", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    "LOC_SENFOR": { id: "LOC_SENFOR", zone: ZONE.PARISH, type: "maj", title: "Enter Sen's Fortress (gate closed if locked)", ifAll: ["LOC_PARISH", "MAJ_BELL01", "MAJ_BELL02"], recomm: "Lv 35-45" },
    "LOC_DRGAR1": { id: "LOC_DRGAR1", zone: ZONE.PARISH, type: "loc", title: "Darkroot Garden (outside Parish)", ifAny: ["LOC_PARISH"], recomm: "Lv 35-50" },
    "MAJ_BUYCOA": { id: "MAJ_BUYCOA", zone: ZONE.PARISH, type: "maj", title: "Buy Crest of Artorias from Andre for 20,000 souls", ifAll: ["LOC_PARISH"], recomm: "Lv 35-50" },

    "LOC_VDRAKE": { id: "LOC_VDRAKE", zone: ZONE.VDRAKE, type: "loc", title: "Valley of Drakes", ifAny: ["LOC_DRBASC"], recomm: "Lv ??-??" },

    "KIL_GAPDRG": { id: "KIL_GAPDRG", zone: ZONE.DEPTHS, type: "kil", title: "Gaping Dragon", ifAny: ["LOC_DEPTHS"], recomm: "Lv 20-30" },
    "GET_BLIKEY": { id: "GET_BLIKEY", zone: ZONE.DEPTHS, type: "get", title: "Blighttown Key", ifAny: ["KIL_GAPDRG"], autoDoneIf: "KIL_GAPDRG", recomm: "Lv 20-30" },
    "MAJ_BLIDOR": { id: "MAJ_BLIDOR", zone: ZONE.DEPTHS, type: "maj", title: "Unlock door to Blighttown", ifAll: ["LOC_DEPTHS", "GET_BLIKEY"], recomm: "Lv 30-40" },

    "LOC_BLIGHU": { id: "LOC_BLIGHU", zone: ZONE.BLIGHT, type: "loc", title: "Blighttown upper level", ifAny: ["GET_BLIKEY", "LOC_BLIGHL"], recomm: "Lv 30-40" },
    "LOC_BLIGHL": { id: "LOC_BLIGHL", zone: ZONE.BLIGHT, type: "loc", title: "Blighttown bottom level (swamp)", ifAny: ["LOC_BLIGHU", "LOC_BLIGHB"], recomm: "Lv 30-40" },
    "LOC_BLIGHB": { id: "LOC_BLIGHB", zone: ZONE.BLIGHT, type: "loc", title: "Blighttown back (wheel)", ifAny: ["LOC_BLIGHL", "LOC_VDRAKE"], recomm: "Lv 30-40" },
    "LOC_QUEDOM": { id: "LOC_QUEDOM", zone: ZONE.BLIGHT, type: "loc", title: "Quelaag's Domain", ifAny: ["LOC_BLIGHL"], recomm: "Lv 35-45" },

    "KIL_QUELAA": { id: "KIL_QUELAA", zone: ZONE.QUEDOM, type: "kil", title: "Chaos Witch Quelaag", ifAny: ["LOC_QUEDOM"], recomm: "Lv 35-45" },
    "MAJ_BELL02": { id: "MAJ_BELL02", zone: ZONE.QUEDOM, type: "maj", title: "Ring the Second Bell", ifAny: ["KIL_QUELAA"], recomm: "Lv 35-45" },

    "KIL_MLBFLY": { id: "KIL_MLBFLY", zone: ZONE.DRGARD, type: "kil", title: "Moonlight Butterfly", ifAny: ["LOC_DRGAR1"], recomm: "Lv ??-??" },
    "GET_WTBKEY": { id: "GET_WTBKEY", zone: ZONE.DRGARD, type: "get", title: "Watchtower Basement Key", ifAny: ["KIL_MLBFLY"], recomm: "Lv ??-??" },
    "MAJ_OPNSOA": { id: "MAJ_OPNSOA", zone: ZONE.DRGARD, type: "maj", title: "Unlock Seal of Artorias", ifAll: ["LOC_DRGAR1", "MAJ_BUYCOA"], recomm: "Lv 35-50" },
    "LOC_DRGAR2": { id: "LOC_DRGAR2", zone: ZONE.DRGARD, type: "loc", title: "Darkroot Garden (middle) (between Seal and Alvina)", ifAny: ["MAJ_OPNSOA", "LOC_DRGAR3"], recomm: "Lv 35-50" },
    "LOC_DRGAR3": { id: "LOC_DRGAR3", zone: ZONE.DRGARD, type: "loc", title: "Darkroot Garden (back)", ifAny: ["LOC_DRGAR2", "KIL_HYDRA1"], recomm: "Lv 35-50" },
    "KIL_GGWSIF": { id: "KIL_GGWSIF", zone: ZONE.DRGARD, type: "kil", title: "Great Gray Wolf Sif", ifAny: ["LOC_DRGAR3"], recomm: "Lv 35-50" },
    "GET_COVART": { id: "GET_COVART", zone: ZONE.DRGARD, type: "get", title: "Covenant of Artorias (ring)", ifAny: ["KIL_GGWSIF"], autoDoneIf: "KIL_GGWSIF", recomm: "Lv 35-50" },

    "LOC_DRBAST": { id: "LOC_DRBAST", zone: ZONE.DRBASN, type: "loc", title: "Darkroot Basin: long skinny path", ifAny: ["LOC_DRGAR1", "LOC_DRBASL", "LOC_DRBASC"], recomm: "Lv ??-??" },
    "LOC_DRBASC": { id: "LOC_DRBASC", zone: ZONE.DRBASN, type: "loc", title: "Darkroot Basin: bonfire in cave", ifAny: ["LOC_DRBAST", "LOC_VDRAKE"], recomm: "Lv ??-??" },
    "LOC_DRBASL": { id: "LOC_DRBASL", zone: ZONE.DRBASN, type: "loc", title: "Darkroot Basin: lake area with hydra and golems", ifAny: ["MAJ_OPNWTB", "LOC_DRBAST", "KIL_HYDRA1"], recomm: "Lv ??-??" },
    "KIL_HYDRA1": { id: "KIL_HYDRA1", zone: ZONE.DRBASN, type: "kil", title: "Hydra", ifAny: ["LOC_DRBASL", "LOC_DRBASB"], recomm: "Lv ??-??" },
    "LOC_DRBASB": { id: "LOC_DRBASB", zone: ZONE.DRBASN, type: "loc", title: "Ladder behind Hydra", ifAny: ["KIL_HYDRA1", "LOC_DRGAR3"], recomm: "Lv ??-??" },
    // TODO: DLC Requirements and DLC Content
    "MAJ_DLC!!!": { id: "MAJ_DLC!!!", zone: ZONE.DRBASN, type: "maj", title: "DLC (if you do other requirements)", ifAny: ["KIL_HYDRA1"], recomm: "Lv ??-??" },

    "KIL_IRNGOL": { id: "KIL_IRNGOL", zone: ZONE.SENFOR, type: "kil", title: "Iron Golem", ifAny: ["LOC_SENFOR"], recomm: "Lv 35-45" },
    "LOC_ANRLND": { id: "LOC_ANRLND", zone: ZONE.SENFOR, type: "maj", title: "Travel to Anor Londo", ifAny: ["KIL_IRNGOL"], recomm: "Lv 45-60" },

    "KIL_ORNSMO": { id: "KIL_ORNSMO", zone: ZONE.ANRLND, type: "kil", title: "Ornstein & Smough", ifAny: ["LOC_ANRLND"], recomm: "Lv 50-60" },
    "MAJ_GETVES": { id: "MAJ_GETVES", zone: ZONE.ANRLND, type: "maj", title: "Get the Lordvessel", ifAny: ["KIL_ORNSMO"], recomm: "Lv 50-60" },

    "LOC_FIRALT": { id: "LOC_FIRALT", zone: ZONE.FIRALT, type: "loc", title: "Firelink Altar", ifAny: ["MAJ_JFRAMP", "MAJ_JKAATH"], recomm: "Lv 50-60" },
    "MAJ_PUTVES": { id: "MAJ_PUTVES", zone: ZONE.FIRALT, type: "maj", title: "Place the Lordvessel", ifAny: ["LOC_FIRALT"], recomm: "Lv 50-60" },

    "KIL_PINWHL": { id: "KIL_PINWHL", zone: ZONE.CATACO, type: "kil", title: "Pinwheel", ifAny: ["LOC_CATACO"], recomm: "Lv 30-50" },
    "LOC_TMBGNT": { id: "LOC_TMBGNT", zone: ZONE.CATACO, type: "loc", title: "(Orange Fog Gate if locked) Tomb of the Giants", ifAll: ["KIL_PINWHL", "MAJ_PUTVES"], recomm: "Lv 55-75" },

    "KIL_GLNITO": { id: "KIL_GLNITO", zone: ZONE.TMBGNT, type: "kil", title: "Gravelord Nito", ifAny: ["LOC_TMBGNT"], recomm: "Lv 55-75" },
    "GET_LSOUL1": { id: "GET_LSOUL1", zone: ZONE.TMBGNT, type: "get", title: "Lord Soul (Nito)", ifAny: ["KIL_GLNITO"], autoDoneIf: "KIL_GLNITO", recomm: "Lv 55-75" },

    "LOC_DUKARC": { id: "LOC_DUKARC", zone: ZONE.DUKARC, type: "loc", title: "(Orange Fog Gate if locked) Duke's Archives", ifAll: ["LOC_ANRLND", "MAJ_PUTVES"], recomm: "Lv 50-70" },
    "MAJ_SEATH1": { id: "MAJ_SEATH1", zone: ZONE.DUKARC, type: "maj", title: "Seath Encounter", ifAny: ["LOC_DUKARC"], recomm: "Lv 50-70" },
    "LOC_DUKAR2": { id: "LOC_DUKAR2", zone: ZONE.DUKARC, type: "loc", title: "Duke's Archives Pt. 2", ifAny: ["MAJ_SEATH1"], recomm: "Lv 50-70" },
    "LOC_CRYCAV": { id: "LOC_CRYCAV", zone: ZONE.CRYCAV, type: "loc", title: "Crystal Caves", ifAny: ["LOC_DUKAR2"], recomm: "Lv 55-75" },
    "KIL_SEATH2": { id: "KIL_SEATH2", zone: ZONE.CRYCAV, type: "kil", title: "Seath", ifAny: ["LOC_CRYCAV"], recomm: "Lv 55-75" },
    "GET_LSSHD2": { id: "GET_LSSHD2", zone: ZONE.CRYCAV, type: "get", title: "Lord Soul Shard (Seath)", ifAny: ["KIL_SEATH2"], autoDoneIf: "KIL_SEATH2", recomm: "Lv 55-75" },

    "GET_H2OKEY": { id: "GET_H2OKEY", zone: ZONE.NLRUIN, type: "get", title: "Key to the Seal", ifAny: ["LOC_NLRUIN"], recomm: "Lv 50-70" },
    "MAJ_LOWH2O": { id: "MAJ_LOWH2O", zone: ZONE.NLRUIN, type: "maj", title: "Lower the Water", ifAny: ["GET_H2OKEY"], recomm: "Lv 50-70" },
    "LOC_ABYSS1": { id: "LOC_ABYSS1", zone: ZONE.ABYSS1, type: "loc", title: "The Abyss", ifAll: ["MAJ_LOWH2O", "GET_COVART"], recomm: "Lv 50-70" },
    "KIL_FOURKG": { id: "KIL_FOURKG", zone: ZONE.ABYSS1, type: "kil", title: "Four Kings", ifAny: ["LOC_ABYSS1"], recomm: "Lv 50-70" },
    "GET_LSSHD1": { id: "GET_LSSHD1", zone: ZONE.ABYSS1, type: "get", title: "Lord Soul Shard (Four Kings)", ifAny: ["KIL_FOURKG"], autoDoneIf: "KIL_FOURKG", recomm: "Lv 50-70" },
    "MAJ_JKAATH": { id: "MAJ_JKAATH", zone: ZONE.ABYSS1, type: "maj", title: "Talk to Kaathe", ifAll: ["KIL_FOURKG", "MAJ_GETVES"], recomm: "Lv 50-70" },

    "LOC_DMRUIN": { id: "LOC_DMRUIN", zone: ZONE.DMRUIN, type: "loc", title: "Demon Ruins", ifAny: ["KIL_QUELAA"], recomm: "Lv 60-75" },
    "KIL_DSCHRG": { id: "KIL_DSCHRG", zone: ZONE.DMRUIN, type: "kil", title: "Ceaseless Discharge", ifAny: ["LOC_DMRUIN"], recomm: "Lv 60-75" },
    "KIL_FIRESG": { id: "KIL_FIRESG", zone: ZONE.DMRUIN, type: "kil", title: "(Orange Fog Gate if locked) Demon Firesage", ifAll: ["KIL_DSCHRG", "MAJ_PUTVES"], recomm: "Lv 65-80" },
    "KIL_CENTIP": { id: "KIL_CENTIP", zone: ZONE.DMRUIN, type: "kil", title: "Centipede Demon", ifAny: ["KIL_FIRESG"], recomm: "Lv 65-80" },
    "LOC_IZALIT": { id: "LOC_IZALIT", zone: ZONE.IZALIT, type: "loc", title: "Lost Izalith", ifAny: ["KIL_CENTIP"], recomm: "Lv 65-80" },
    "KIL_BCHAOS": { id: "KIL_BCHAOS", zone: ZONE.IZALIT, type: "kil", title: "Bed of Chaos", ifAny: ["LOC_IZALIT"], recomm: "Lv 65-80" },
    "GET_LSOUL2": { id: "GET_LSOUL2", zone: ZONE.IZALIT, type: "get", title: "Lord Soul (Bed of Chaos)", ifAny: ["KIL_BCHAOS"], autoDoneIf: "KIL_BCHAOS", recomm: "Lv 65-80" },

    "MAJ_FILVES": { id: "MAJ_FILVES", zone: ZONE.KILNFF, type: "maj", title: "Fill the Lordvessel completely", ifAll: ["GET_LSSHD1", "GET_LSSHD2", "GET_LSOUL1", "GET_LSOUL2"], recomm: "Lv 70-99" },
    "LOC_KILNFF": { id: "LOC_KILNFF", zone: ZONE.KILNFF, type: "loc", title: "Descend into land of ashes and Black Knights", ifAll: ["MAJ_FILVES"], recomm: "Lv 70-99" },
    "KIL_GWYNLC": { id: "KIL_GWYNLC", zone: ZONE.KILNFF, type: "kil", title: "Gwyn, Lord of Cinder (do DLC first!)", ifAny: ["LOC_KILNFF"], recomm: "Lv 70-99" },
    "MAJ_AGEFIR": { id: "MAJ_AGEFIR", zone: ZONE.KILNFF, type: "maj", title: "Light bonfire", ifAny: ["KIL_GWYNLC"], recomm: "Lv 70-99" },
    "MAJ_AGEDRK": { id: "MAJ_AGEDRK", zone: ZONE.KILNFF, type: "maj", title: "Leave bonfire", ifAny: ["KIL_GWYNLC"], recomm: "Lv 70-99" },
    "MAJ_FINISH": { id: "MAJ_FINISH", zone: ZONE.KILNFF, type: "maj", title: "AUTO Watch the ending, enter New Game+, reset keys", ifAny: ["MAJ_AGEFIR", "MAJ_AGEDRK"], recomm: "Lv 70-99" }

};
