import { Node, Zone } from './node';

export const ZONES: Zone[] = [
    { id: "ASYLUM", color: "#c0a0a0", title: "Undead Asylum" },
    { id: "FIRELI", color: "#c0ffc0", title: "Firelink Shrine" },
    { id: "UDBURG", color: "#c0c0c0", title: "Undead Burg" },
    { id: "PARISH", color: "#c0c0a0", title: "Undead Parish" },
    { id: "VDRAKE", color: "#a0ffc0", title: "Valley of Drakes" },
    { id: "DEPTHS", color: "#a0a0a0", title: "The Depths" },
    { id: "BLIGHT", color: "#ffffa0", title: "Blighttown" },
    { id: "QUEDOM", color: "#ffa0a0", title: "Quelaag's Domain" },
    { id: "SENFOR", color: "#ff8080", title: "Sen's Fortress" },
    { id: "ANRLND", color: "#ffffa0", title: "Anor Londo" },
    { id: "FIRALT", color: "#ffa0a0", title: "Firelink Altar" },
    { id: "CATACO", color: "#ff8080", title: "The Catacombs" },
    { id: "TMBGNT", color: "#c04040", title: "Tomb of the Giants" },
    { id: "DRGARD", color: "#a0ffa0", title: "Darkroot Garden" },
    { id: "DRBASN", color: "#a0ffc0", title: "Darkroot Basin" },
    { id: "DUKARC", color: "#a0c0ff", title: "Duke's Archives" },
    { id: "CRYCAV", color: "#c0ffff", title: "Crystal Cave" },
    { id: "NLRUIN", color: "#a0ffff", title: "New Londo Ruins" },
    { id: "ABYSS1", color: "#404040", title: "The Abyss" },
    { id: "DMRUIN", color: "#ffc080", title: "Demon Ruins" },
    { id: "IZALIT", color: "#ffa040", title: "Lost Izalith" },
    { id: "SANCTG", color: "#606060", title: "DLC (Sanctuary Garden+)" },
    { id: "KILNFF", color: "#606060", title: "Kiln of the First Flame" }
];

export const NODES: Node[] = [

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

    { id: "MAJ_NGAME0", zoneId: "ASYLUM", type: "maj", title: "Start New Game", ifAny: [], recomm: "Lv 1-10", image: "assets/images/places/northern-undead-asylum.jpg",
      done: true // auto-done from the very beginning
    },

    { id: "MAJ_NGWIMK", zoneId: "ASYLUM", type: "maj", title: "Start Game with Master Key", ifAny: ["MAJ_NGAME0"], unlessAny: ["MAJ_NGWOMK"] },
    { id: "MAJ_NGWOMK", zoneId: "ASYLUM", type: "maj", title: "Start Game without Master Key", ifAny: ["MAJ_NGAME0"], unlessAny: ["MAJ_NGWIMK"] },
    { id: "MAJ_GETMKY", zoneId: "ASYLUM", type: "maj", title: "Get the Master Key", ifAny: ["MAJ_NGWIMK"], autoDoneIf: "MAJ_NGWIMK" },

    { id: "KIL_ASYDEM", zoneId: "ASYLUM", type: "kil", title: "Asylum Demon", ifAny: ["MAJ_NGWIMK", "MAJ_NGWOMK"], recomm: "Lv 1-10", image: "assets/images/enemies/asylum-demon.jpg" },
    { id: "LOC_FIRELI", zoneId: "ASYLUM", type: "loc", title: "Firelink Shrine", ifAny: ["KIL_ASYDEM"], recomm: "Lv 1-10", image: "assets/images/places/firelink-shrine.jpg" },

    { id: "LOC_UBURG1", zoneId: "FIRELI", type: "loc", title: "Undead Burg (up skinny hill)", ifAny: ["LOC_FIRELI"], recomm: "Lv 1-10" },
    { id: "LOC_CATACO", zoneId: "FIRELI", type: "loc", title: "Catacombs (past skeletons)", ifAny: ["LOC_FIRELI"], recomm: "Lv 30-50" },
    { id: "LOC_NLRUIF", zoneId: "FIRELI", type: "loc", title: "New Londo Ruins (down elevator)", ifAny: ["LOC_FIRELI"], autoDoneIf: "LOC_NLRUIN", recomm: "Lv 50-70" },
    { id: "LOC_ELEVAT", zoneId: "FIRELI", type: "maj", title: "Find a way to fix elevator (near Petrus)", ifAny: ["LOC_FIRELI"], lockedUnlessAny: ["MAJ_FIXELE"], autoDoneIf: "MAJ_FIXELE", recomm: "Lv 1-10" },
    { id: "MAJ_BUYMKY", zoneId: "FIRELI", type: "maj", title: "Buy Master Key from Domhnall for 5,000 souls", ifAll: ["MAJ_BELL01", "MAJ_BELL02"], unlessAny: ["MAJ_NGWIMK"] },
    // If you talk to Frampt BEFORE getting the Lordvessel, he says:
    //   "...To this end, you must visit Anor Londo, and acquire the Lordvessel."
    { id: "MAJ_JFRAMP", zoneId: "FIRELI", type: "maj", title: "Talk to Frampt after getting the Lordvessel", ifAll: ["MAJ_BELL01", "MAJ_BELL02"], lockedUnlessAny: ["MAJ_GETVES"], recomm: "Lv 50-70" },

    { id: "LOC_FIRALT", zoneId: "FIRALT", type: "loc", title: "Firelink Altar", ifAny: ["MAJ_JFRAMP", "MAJ_JKAATH"], recomm: "Lv 50-60" },
    { id: "MAJ_PUTVES", zoneId: "FIRALT", type: "maj", title: "Place the Lordvessel", ifAny: ["LOC_FIRALT"], recomm: "Lv 50-60" },

    { id: "KIL_TAURUS", zoneId: "UDBURG", type: "kil", title: "Taurus Demon", ifAny: ["LOC_UBURG1"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },
    { id: "LOC_UBURG2", zoneId: "UDBURG", type: "maj", title: "Find bridge with red dragon", ifAny: ["KIL_TAURUS"], recomm: "Lv 1-10" },
    { id: "LOC_LBURG1", zoneId: "UDBURG", type: "maj", title: "Unlock door by dragon bridge and go down", ifAny: ["LOC_UBURG2"], lockedUnlessAny: ["MAJ_BASKEY"], recomm: "Lv 20-30" },
    { id: "LOC_PARISH", zoneId: "UDBURG", type: "loc", title: "Undead Parish", ifAny: ["LOC_UBURG2"], recomm: "Lv 10-20" },
    { id: "KIL_CAPDEM", zoneId: "UDBURG", type: "kil", title: "Capra Demon", ifAny: ["LOC_LBURG1"], recomm: "Lv 20-30" },
    { id: "GET_DEPKEY", zoneId: "UDBURG", type: "get", title: "Key to the Depths", ifAny: ["KIL_CAPDEM"], autoDoneIf: "KIL_CAPDEM", recomm: "Lv 20-30" },
    { id: "LOC_DEPTHS", zoneId: "UDBURG", type: "maj", title: "Unlock door to The Depths", ifAny: ["LOC_LBURG1"], lockedUnlessAny: ["GET_DEPKEY"], recomm: "Lv 20-30" },
    { id: "LOC_WTBDOR", zoneId: "UDBURG", type: "loc", title: "Door at bottom of Burg tower", ifAny: ["LOC_UBURG1", "LOC_DRBASL"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },
    { id: "MAJ_OPNWTB", zoneId: "UDBURG", type: "maj", title: "Unlock door at bottom of Burg tower (Havel area)", ifAny: ["LOC_WTBDOR"], lockedUnlessAny: ["GET_WTBKEY", "MAJ_GETMKY"], recomm: "Lv 1-10", image: "assets/images/enemies/taurus-demon.jpg" },

    { id: "MAJ_FIXELE", zoneId: "PARISH", type: "maj", title: "Find elevator and take it down", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    { id: "KIL_BELGAR", zoneId: "PARISH", type: "kil", title: "Bell Gargoyles", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    { id: "MAJ_BELL01", zoneId: "PARISH", type: "maj", title: "Ring the First Bell", ifAny: ["KIL_BELGAR"], recomm: "Lv 10-20" },
    { id: "MAJ_BASKEY", zoneId: "PARISH", type: "maj", title: "Find Basement Key", ifAny: ["LOC_PARISH"], recomm: "Lv 10-20" },
    { id: "LOC_SENFOR", zoneId: "PARISH", type: "maj", title: "Enter Sen's Fortress (gate closed if locked)", ifAll: ["LOC_PARISH", "MAJ_BELL01", "MAJ_BELL02"], recomm: "Lv 35-45" },
    { id: "LOC_DRGAR1", zoneId: "PARISH", type: "loc", title: "Darkroot Garden (outside Parish)", ifAny: ["LOC_PARISH"], recomm: "Lv 35-50" },
    { id: "MAJ_BUYCOA", zoneId: "PARISH", type: "maj", title: "Buy Crest of Artorias from Andre for 20,000 souls", ifAll: ["LOC_PARISH"], recomm: "Lv 35-50" },

    { id: "KIL_GAPDRG", zoneId: "DEPTHS", type: "kil", title: "Gaping Dragon", ifAny: ["LOC_DEPTHS"], recomm: "Lv 20-30" },
    { id: "GET_BLIKEY", zoneId: "DEPTHS", type: "get", title: "Blighttown Key", ifAny: ["KIL_GAPDRG"], autoDoneIf: "KIL_GAPDRG", recomm: "Lv 20-30" },
    { id: "MAJ_BLIDOR", zoneId: "DEPTHS", type: "maj", title: "Unlock door to Blighttown", ifAny: ["LOC_DEPTHS"], lockedUnlessAny: ["GET_BLIKEY"], recomm: "Lv 30-40" },

    { id: "LOC_BLIGHU", zoneId: "BLIGHT", type: "loc", title: "Blighttown upper level", ifAny: ["MAJ_BLIDOR", "LOC_BLIGHL"], recomm: "Lv 30-40" },
    { id: "LOC_BLIGHL", zoneId: "BLIGHT", type: "loc", title: "Blighttown bottom level (swamp)", ifAny: ["LOC_BLIGHU", "LOC_BLIGHB"], recomm: "Lv 30-40" },
    { id: "LOC_BLIGHB", zoneId: "BLIGHT", type: "loc", title: "Blighttown back (wheel elevator)", ifAny: ["LOC_BLIGHL", "LOC_VDRAKE"], recomm: "Lv 30-40" },
    { id: "GET_NLRKEY", zoneId: "BLIGHT", type: "get", title: "Key to New Londo Ruins", ifAny: ["LOC_BLIGHB"], recomm: "Lv ??-??" },
    { id: "LOC_QUEDOM", zoneId: "BLIGHT", type: "loc", title: "Quelaag's Domain", ifAny: ["LOC_BLIGHL"], recomm: "Lv 35-45" },

    { id: "KIL_QUELAA", zoneId: "QUEDOM", type: "kil", title: "Chaos Witch Quelaag", ifAny: ["LOC_QUEDOM"], recomm: "Lv 35-45" },
    { id: "MAJ_BELL02", zoneId: "QUEDOM", type: "maj", title: "Ring the Second Bell", ifAny: ["KIL_QUELAA"], recomm: "Lv 35-45" },

    { id: "KIL_MLBFLY", zoneId: "DRGARD", type: "kil", title: "Moonlight Butterfly", ifAny: ["LOC_DRGAR1"], recomm: "Lv ??-??" },
    { id: "GET_WTBKEY", zoneId: "DRGARD", type: "get", title: "Watchtower Basement Key", ifAny: ["KIL_MLBFLY"], recomm: "Lv ??-??" },
    { id: "MAJ_OPNSOA", zoneId: "DRGARD", type: "maj", title: "Unlock Seal of Artorias", ifAny: ["LOC_DRGAR1"], lockedUnlessAny: ["MAJ_BUYCOA"], recomm: "Lv 35-50" },
    { id: "LOC_DRGAR2", zoneId: "DRGARD", type: "loc", title: "Darkroot Garden (middle) (between Seal and Alvina)", ifAny: ["MAJ_OPNSOA", "LOC_DRGAR3"], recomm: "Lv 35-50" },
    { id: "LOC_DRGAR3", zoneId: "DRGARD", type: "loc", title: "Darkroot Garden (back)", ifAny: ["LOC_DRGAR2", "LOC_DRBASB"], recomm: "Lv 35-50" },
    { id: "KIL_GGWSIF", zoneId: "DRGARD", type: "kil", title: "Great Gray Wolf Sif", ifAny: ["LOC_DRGAR3"], recomm: "Lv 35-50" },
    { id: "GET_COVART", zoneId: "DRGARD", type: "get", title: "Covenant of Artorias (ring)", ifAny: ["KIL_GGWSIF"], autoDoneIf: "KIL_GGWSIF", recomm: "Lv 35-50" },

    { id: "LOC_DRBAST", zoneId: "DRBASN", type: "loc", title: "Darkroot Basin: long skinny path", ifAny: ["LOC_DRGAR1", "LOC_DRBASL", "LOC_DRBASC"], recomm: "Lv ??-??" },
    { id: "LOC_DRBASC", zoneId: "DRBASN", type: "loc", title: "Darkroot Basin: bonfire in cave", ifAny: ["LOC_DRBAST", "LOC_VDRAKE"], autoDoneIf: "MAJ_VDDBCV", recomm: "Lv ??-??" },
    { id: "LOC_DRBASL", zoneId: "DRBASN", type: "loc", title: "Darkroot Basin: lake area with hydra and golems", ifAny: ["MAJ_OPNWTB", "LOC_DRBAST"], recomm: "Lv ??-??" },
    { id: "LOC_DRBASB", zoneId: "DRBASN", type: "loc", title: "Ladder behind Hydra", ifAny: ["LOC_DRBASL", "LOC_DRGAR3"], recomm: "Lv ??-??" },
    { id: "KIL_HYDRA1", zoneId: "DRBASN", type: "kil", title: "Hydra", ifAny: ["LOC_DRBASL"], recomm: "Lv ??-??" },
    { id: "MAJ_DLCDSK", zoneId: "DRBASN", type: "maj", title: "(DLC) Free Dusk from Golem", ifAny: ["KIL_HYDRA1"], recomm: "Lv ??-??" },
    { id: "MAJ_DLCVTX", zoneId: "DRBASN", type: "maj", title: "(DLC) Enter vortex", ifAny: ["MAJ_DLCPEN"], recomm: "Lv ??-??" },

    { id: "LOC_VDRAKE", zoneId: "VDRAKE", type: "loc", title: "Valley of Drakes", ifAny: ["MAJ_VDGT1A", "MAJ_VDGT1B", "MAJ_VDGT2B", "LOC_DRBASC", "LOC_BLIGHB"], recomm: "Lv 50-70" },
    { id: "MAJ_VDGT1B", zoneId: "VDRAKE", type: "maj", title: "Unlock skinny gate (end of skinny path)",    ifAny: ["LOC_VDRAKE"], lockedUnlessAny: ["GET_NLRKEY", "MAJ_GETMKY"], autoDoneIf: "MAJ_VDGT1A", recomm: "Lv 50-70" },
    { id: "MAJ_VDBTCV", zoneId: "VDRAKE", type: "maj", title: "Find Blighttown tunnel", ifAny: ["LOC_VDRAKE"], autoDoneIf: "LOC_BLIGHB" },
    { id: "MAJ_VDDBCV", zoneId: "VDRAKE", type: "maj", title: "Find Darkroot Basin cave with bonfire", ifAny: ["LOC_VDRAKE"], autoDoneIf: "LOC_DRBASC" },
    { id: "MAJ_VDGT2B", zoneId: "VDRAKE", type: "maj", title: "Find a way to open the large gate (by bridge and drakes)", ifAny: ["LOC_VDRAKE"], lockedUnlessAny: ["MAJ_LOWH2O"], autoDoneIf: "MAJ_LOWH2O", recomm: "Lv 50-70" },

    { id: "KIL_IRNGOL", zoneId: "SENFOR", type: "kil", title: "Iron Golem", ifAny: ["LOC_SENFOR"], recomm: "Lv 35-45" },
    { id: "LOC_ANRLND", zoneId: "SENFOR", type: "maj", title: "Examine the Ring of Light", ifAny: ["KIL_IRNGOL"], recomm: "Lv 45-60" },

    { id: "KIL_ORNSMO", zoneId: "ANRLND", type: "kil", title: "Ornstein & Smough", ifAny: ["LOC_ANRLND"], recomm: "Lv 50-60" },
    { id: "MAJ_GETVES", zoneId: "ANRLND", type: "maj", title: "Get the Lordvessel", ifAny: ["KIL_ORNSMO"], recomm: "Lv 50-60" },

    { id: "KIL_PINWHL", zoneId: "CATACO", type: "kil", title: "Pinwheel", ifAny: ["LOC_CATACO"], recomm: "Lv 30-50" },
    { id: "LOC_TMBGNT", zoneId: "CATACO", type: "loc", title: "Tomb of the Giants", ifAny: ["KIL_PINWHL"], recomm: "Lv 55-75" },

    { id: "LOC_TMBGN2", zoneId: "TMBGNT", type: "loc", title: "(Orange Fog Gate if locked) Deeper part", ifAny: ["LOC_TMBGNT"], lockedUnlessAny: ["MAJ_PUTVES"], recomm: "Lv 55-75" },
    { id: "KIL_GLNITO", zoneId: "TMBGNT", type: "kil", title: "Gravelord Nito", ifAny: ["LOC_TMBGN2"], recomm: "Lv 55-75" },
    { id: "GET_LSOUL1", zoneId: "TMBGNT", type: "get", title: "Lord Soul (Nito)", ifAny: ["KIL_GLNITO"], autoDoneIf: "KIL_GLNITO", recomm: "Lv 55-75" },

    { id: "LOC_DUKARC", zoneId: "DUKARC", type: "loc", title: "(Orange Fog Gate if locked) Duke's Archives", ifAny: ["LOC_ANRLND"], lockedUnlessAny: ["MAJ_PUTVES"], recomm: "Lv 50-70" },
    { id: "MAJ_DLCPEN", zoneId: "DUKARC", type: "maj", title: "(DLC) Get Broken Pendant from Crystal Golem", ifAll: ["LOC_DUKARC", "KIL_HYDRA1", "MAJ_DLCDSK", "MAJ_PUTVES"], recomm: "Lv 50-70" },
    { id: "MAJ_SEATH1", zoneId: "DUKARC", type: "maj", title: "Seath Encounter", ifAny: ["LOC_DUKARC"], recomm: "Lv 50-70" },
    { id: "LOC_DUKAR2", zoneId: "DUKARC", type: "loc", title: "Duke's Archives Pt. 2", ifAny: ["MAJ_SEATH1"], recomm: "Lv 50-70" },
    { id: "LOC_CRYCAV", zoneId: "CRYCAV", type: "loc", title: "Crystal Caves", ifAny: ["LOC_DUKAR2"], recomm: "Lv 55-75" },
    { id: "KIL_SEATH2", zoneId: "CRYCAV", type: "kil", title: "Seath", ifAny: ["LOC_CRYCAV"], recomm: "Lv 55-75" },
    { id: "GET_LSSHD2", zoneId: "CRYCAV", type: "get", title: "Lord Soul Shard (Seath)", ifAny: ["KIL_SEATH2"], autoDoneIf: "KIL_SEATH2", recomm: "Lv 55-75" },

    { id: "LOC_NLRUIN", zoneId: "NLRUIN", type: "loc", title: "New Londo Ruins (elevator side)", ifAny: ["LOC_NLRUIF", "MAJ_VDGT1B"], recomm: "Lv 50-70" },
    { id: "MAJ_VDGT1A", zoneId: "NLRUIN", type: "maj", title: "Unlock skinny gate (to Valley of Drakes)", ifAny: ["LOC_NLRUIN"], lockedUnlessAny: ["GET_NLRKEY", "MAJ_GETMKY"], autoDoneIf: "MAJ_VDGT1B", recomm: "Lv 50-70" },
    { id: "GET_H2OKEY", zoneId: "NLRUIN", type: "get", title: "Key to the Seal", ifAny: ["LOC_NLRUIN"], recomm: "Lv 50-70" },
    { id: "MAJ_LOWH2O", zoneId: "NLRUIN", type: "maj", title: "Lower the Water", ifAny: ["GET_H2OKEY"], recomm: "Lv 50-70" },
    { id: "MAJ_ABLIVE", zoneId: "NLRUIN", type: "maj", title: "Fall into The Abyss without dying", ifAll: ["MAJ_LOWH2O"], lockedUnlessAny: ["GET_COVART"], recomm: "Lv 50-70" },

    { id: "LOC_ABYSS1", zoneId: "ABYSS1", type: "loc", title: "The Abyss", ifAny: ["MAJ_ABLIVE"], autoDoneIf: "MAJ_ABLIVE", recomm: "Lv 50-70" },
    { id: "KIL_FOURKG", zoneId: "ABYSS1", type: "kil", title: "Four Kings", ifAny: ["LOC_ABYSS1"], recomm: "Lv 50-70" },
    { id: "GET_LSSHD1", zoneId: "ABYSS1", type: "get", title: "Lord Soul Shard (Four Kings)", ifAny: ["KIL_FOURKG"], autoDoneIf: "KIL_FOURKG", recomm: "Lv 50-70" },
    // If you kill Four Kings early, before getting the Lordvessel, you will see Kaathe but if you try to talk to him,
    // he says "Undead warrior. To speak now is premature. It begins with your retrieval of the Lordvessel."
    { id: "MAJ_JKAATH", zoneId: "ABYSS1", type: "maj", title: "Talk to Kaathe after getting the Lordvessel", ifAny: ["KIL_FOURKG"], lockedUnlessAny: ["MAJ_GETVES"], unlessAny: ["MAJ_JFRAMP"], recomm: "Lv 50-70" },

    { id: "LOC_DMRUIN", zoneId: "DMRUIN", type: "loc", title: "Demon Ruins", ifAny: ["KIL_QUELAA"], recomm: "Lv 60-75" },
    { id: "KIL_DSCHRG", zoneId: "DMRUIN", type: "kil", title: "Ceaseless Discharge", ifAny: ["LOC_DMRUIN"], recomm: "Lv 60-75" },
    { id: "KIL_FIRESG", zoneId: "DMRUIN", type: "kil", title: "(Orange Fog Gate if locked) Demon Firesage", ifAny: ["KIL_DSCHRG"], lockedUnlessAny: ["MAJ_PUTVES"], recomm: "Lv 65-80" },
    { id: "KIL_CENTIP", zoneId: "DMRUIN", type: "kil", title: "Centipede Demon", ifAny: ["KIL_FIRESG"], recomm: "Lv 65-80" },
    { id: "LOC_IZALIT", zoneId: "IZALIT", type: "loc", title: "Lost Izalith", ifAny: ["KIL_CENTIP"], recomm: "Lv 65-80" },
    { id: "KIL_BCHAOS", zoneId: "IZALIT", type: "kil", title: "Bed of Chaos", ifAny: ["LOC_IZALIT"], recomm: "Lv 65-80" },
    { id: "GET_LSOUL2", zoneId: "IZALIT", type: "get", title: "Lord Soul (Bed of Chaos)", ifAny: ["KIL_BCHAOS"], autoDoneIf: "KIL_BCHAOS", recomm: "Lv 65-80" },

    { id: "MAJ_SANCTG", zoneId: "SANCTG", type: "maj", title: "(DLC) Do DLC Content", ifAny: ["MAJ_DLCVTX"] },

    { id: "MAJ_FILVES", zoneId: "KILNFF", type: "maj", title: "Fill the Lordvessel completely", ifAll: ["GET_LSSHD1", "GET_LSSHD2", "GET_LSOUL1", "GET_LSOUL2"], recomm: "Lv 70-99" },
    { id: "LOC_KILNFF", zoneId: "KILNFF", type: "loc", title: "Descend into land of ashes and Black Knights", ifAll: ["MAJ_FILVES"], recomm: "Lv 70-99" },
    { id: "KIL_GWYNLC", zoneId: "KILNFF", type: "kil", title: "Gwyn, Lord of Cinder (do DLC first!)", ifAny: ["LOC_KILNFF"], recomm: "Lv 70-99" },
    { id: "MAJ_AGEFIR", zoneId: "KILNFF", type: "maj", title: "Light bonfire", ifAny: ["KIL_GWYNLC"], unlessAny: ["MAJ_AGEDRK"], recomm: "Lv 70-99" },
    { id: "MAJ_AGEDRK", zoneId: "KILNFF", type: "maj", title: "Leave bonfire", ifAny: ["KIL_GWYNLC"], unlessAny: ["MAJ_AGEFIR"], recomm: "Lv 70-99" },
    { id: "MAJ_FINISH", zoneId: "KILNFF", type: "maj", title: "AUTO Watch the ending, enter New Game+, reset keys", ifAny: ["MAJ_AGEFIR", "MAJ_AGEDRK"], recomm: "Lv 70-99" }

];
