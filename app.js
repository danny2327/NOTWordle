const wordList = 
[
"AUGHT",
"FUCKY",
"FUCKS",
"PICKY",
"WAGED",
"WAZED",
"GAZED",
"GAMED",
"JADED",
"WADED",
"WAVED",
"CHINK",
"SPINY",
"SLING",
"PALMS",
"HACKS",
"POLKA",
"RAKES",
"RAPES",
"RAVES",
"RAGES",
"HIVES",
"TAPED",
"HIDES",
"MARES",
"WARES",
"HARES",
"WANES",
"LEGIT",
"GROPE",
"LIARS",
"WANED",
"SHUNT",
"SQUAT",
"HONES",
"YOYOS",
"FROGS",
"PRODS",
"REUSE",
"STERN",
"PLEAS",
"SHOUT",
"PLEAT",
"SPOIL",
"PUTTS",
"PLUCK",
"PLUNK",
"HUNTS",
"SPANK",
"GRAVY",
"HAIRY",
"FREED",
"MUSTY",
"MINTS",
"RUSTY",
"LUSTY",
"MINTY",
"LEANS",
"MISTY",
"HOCKS",
"JOCKS",
"MOCHA",
"POPES",
"FROZE",
"OUGHT",
"MARTS",
"MARSH",
"SNUCK",
"SNIPS",
"SNIPE",
"SLICK",
"SPUNK",
"SURFS",
"SHUNS",
"STRUM",
"MUNCH",
"SLUGS",
"SQUID",
"THERE",
"THINE",
"WHERE",
"WHICH",
"FLUSH",
"PLUSH",
"SPLAT",
"SPILL",
"USHER",
"SWISH",
"WHOSE",
"YOURS",
"ADMIT",
"ADOPT",
"AGREE",
"ALLOW",
"ALTER",
"APPLY",
"ARGUE",
"ARISE",
"AVOID",
"BEGIN",
"BLAME",
"BREAK",
"BRING",
"BUILD",
"BURST",
"CARRY",
"CATCH",
"CAUSE",
"CHECK",
"CLAIM",
"CLEAN",
"CLEAR",
"CLIMB",
"CLOSE",
"COUNT",
"COVER",
"CROSS",
"DANCE",
"DOUBT",
"DRINK",
"DRIVE",
"ENJOY",
"ENTER",
"EXIST",
"FIGHT",
"FOCUS",
"FORCE",
"GUESS",
"IMPLY",
"ISSUE",
"JUDGE",
"LAUGH",
"LEARN",
"LEAVE",
"LIMIT",
"MARRY",
"MATCH",
"OCCUR",
"OFFER",
"ORDER",
"PHONE",
"PLACE",
"POINT",
"PRESS",
"PROVE",
"RAISE",
"REACH",
"REFER",
"RELAX",
"SERVE",
"SHALL",
"SHARE",
"SHIFT",
"SHOOT",
"SLEEP",
"SOLVE",
"SOUND",
"SPEAK",
"SPEND",
"SPLIT",
"STAND",
"START",
"STARE",
"STATE",
"STICK",
"STUDY",
"TEACH",
"THANK",
"THINK",
"THROW",
"TOUCH",
"TRAIN",
"TREAT",
"TRUST",
"VISIT",
"VOICE",
"WASTE",
"WATCH",
"WORRY",
"WOULD",
"WRITE",
"ABOVE",
"ACUTE",
"ALIVE",
"ALONE",
"ANGRY",
"AWARE",
"AWFUL",
"BASIC",
"BLACK",
"BLIND",
"BRAVE",
"BRIEF",
"BROAD",
"BROWN",
"CHEAP",
"CHIEF",
"CIVIL",
"CRAZY",
"DAILY",
"DIRTY",
"EARLY",
"EMPTY",
"EQUAL",
"EXACT",
"EXTRA",
"FAINT",
"FALSE",
"FIFTH",
"FINAL",
"FIRST",
"FRESH",
"FRONT",
"FUNNY",
"GIANT",
"GRAND",
"GREAT",
"GREEN",
"GROSS",
"HAPPY",
"HARSH",
"HEAVY",
"HUMAN",
"IDEAL",
"INNER",
"JOINT",
"LARGE",
"LEGAL",
"LEVEL",
"LIGHT",
"LOCAL",
"LOOSE",
"LUCKY",
"MAGIC",
"MAJOR",
"MINOR",
"MORAL",
"NAKED",
"NASTY",
"NAVAL",
"OTHER",
"OUTER",
"PLAIN",
"PRIME",
"PRIOR",
"PROUD",
"QUICK",
"QUIET",
"RAPID",
"READY",
"RIGHT",
"ROMAN",
"ROUGH",
"ROUND",
"ROYAL",
"RURAL",
"SHARP",
"SHEER",
"SHORT",
"SILLY",
"SIXTH",
"SMALL",
"SMART",
"SOLID",
"SORRY",
"SPARE",
"STEEP",
"STILL",
"SUPER",
"SWEET",
"THICK",
"THIRD",
"TIGHT",
"TOTAL",
"TOUGH",
"UPPER",
"UPSET",
"URBAN",
"USUAL",
"VAGUE",
"VALID",
"VITAL",
"WHITE",
"WHOLE",
"WRONG",
"YOUNG",
"AFTER",
"SINCE",
"POURS",
"FLUME",
"SLASH",
"SLAPS",
"TONED",
"TONER",
"HEATS",
"TEATS",
"HEALS",
"LADLE",
"MELDS",
"MELTS",
"WINDY",
"TOILS",
"TOYED",
"GLARE",
"UNTIL",
"WHILE",
"NULLS",
"GULLS",
"PLOYS",
"PLAID",
"VOUCH",
"MULLS",
"RABID",
"PINES",
"MAXED",
"AFOUL",
"AGAIN",
"PINKY",
"ROAST",
"AGAPE",
"HEIST",
"STAIR",
"NECKS",
"MENDS",
"AGONE",
"INKED",
"HIRES",
"LOINS",
"STALE",
"AHEAD",
"AHULL",
"ALIFE",
"ALIKE",
"ALINE",
"ALOFT",
"ALONG",
"ALOOF",
"ALOUD",
"AMISS",
"AMPLY",
"AMUCK",
"APACE",
"APART",
"APTLY",
"AREAR",
"ASIDE",
"ASKEW",
"BADLY",
"BALLY",
"BELOW",
"CANNY",
"COYLY",
"DIMLY",
"DITTO",
"DRILY",
"DRYLY",
"DULLY",
"FATLY",
"FEYLY",
"FITLY",
"FORTE",
"FORTH",
"FULLY",
"GAILY",
"GAYLY",
"GODLY",
"HAPLY",
"HELLA",
"HENCE",
"HOTLY",
"ICILY",
"INFRA",
"INTL.",
"JILDI",
"JOLLY",
"LAXLY",
"LENTO",
"LOWLY",
"MADLY",
"MAYBE",
"NEVER",
"NEWLY",
"NOBLY",
"ODDLY",
"OFTEN",
"PARTY",
"PIANO",
"PLONK",
"PLUMB",
"QUEER",
"QUITE",
"RAMEN",
"REDLY",
"SADLY",
"SHYLY",
"SLEEK",
"SLYLY",
"STARK",
"STONE",
"STOUR",
"TALLY",
"TANTO",
"TODAY",
"TRULY",
"TWICE",
"UNDER",
"UTTER",
"VERRY",
"WANLY",
"WETLY",
"WRYLY",
"ABOUT",
"AMONG",
"CIRCA",
"FURTH",
"MINUS",
"NEATH",
"SPITE",
"ABUSE",
"ADULT",
"AGENT",
"ANGER",
"PURGE",
"APPLE",
"AWARD",
"BASIS",
"BEACH",
"BIRTH",
"BLOCK",
"LUMPS",
"BLOOD",
"RAMPS",
"VESTS",
"BOARD",
"BRAIN",
"BREAD",
"BUYER",
"CHAIN",
"CHAIR",
"CHEST",
"CHILD",
"CLASS",
"CLOCK",
"COACH",
"COAST",
"COURT",
"CREAM",
"CRIME",
"CROWD",
"CROWN",
"CYCLE",
"DEATH",
"DEPTH",
"DRAFT",
"DRAMA",
"DREAM",
"DRESS",
"EARTH",
"ENEMY",
"ENTRY",
"ERROR",
"EVENT",
"FAITH",
"FAULT",
"FIELD",
"FLOOR",
"FRAME",
"FRUIT",
"GLASS",
"GLOBE",
"GLOVE",
"GRANT",
"GRASS",
"GROUP",
"GUIDE",
"HEART",
"HORSE",
"HOTEL",
"HOUSE",
"IMAGE",
"INDEX",
"INPUT",
"KNIFE",
"LAYER",
"LUNCH",
"MARCH",
"METAL",
"MODEL",
"MONEY",
"MONTH",
"MOTOR",
"MOUTH",
"MUSIC",
"NIGHT",
"NOISE",
"NORTH",
"NOVEL",
"NURSE",
"OWNER",
"PANEL",
"PAPER",
"PEACE",
"PHASE",
"PIECE",
"PILOT",
"PITCH",
"PLANE",
"PLANK",
"PLANT",
"PLATE",
"POUND",
"POWER",
"PRICE",
"PRIDE",
"PRIZE",
"PROOF",
"QUEEN",
"RADIO",
"RANGE",
"RATIO",
"REPLY",
"RIVER",
"ROUTE",
"RUGBY",
"SCALE",
"SCENE",
"SCOPE",
"SCORE",
"SENSE",
"SHAPE",
"SHEEP",
"SHEET",
"SHIRT",
"SHOCK",
"SIGHT",
"SKILL",
"SMILE",
"SMITH",
"SMOKE",
"SOUTH",
"SPACE",
"SPEED",
"SPORT",
"SQUAD",
"STAFF",
"STAGE",
"STEAM",
"STEEL",
"STOCK",
"STORE",
"STUFF",
"STYLE",
"SUGAR",
"TABLE",
"TASTE",
"TERRY",
"THEME",
"THING",
"TITLE",
"TOWER",
"TRACK",
"TRADE",
"TREND",
"TRIAL",
"TRUTH",
"UNCLE",
"UNION",
"UNITY",
"VALUE",
"VIDEO",
"WATER",
"WOMAN",
"WORLD",
"YOUTH",
"ABACK",
"ABASE",
"ABATE",
"ABAYA",
"ABBEY",
"ABBOT",
"ABETS",
"ABHOR",
"ABIDE",
"ABODE",
"ABORT",
"ABUTS",
"ABYSS",
"ACHED",
"ACHES",
"ACIDS",
"ACING",
"ACKEE",
"ACORN",
"ACRES",
"ACRID",
"ACTED",
"ACTIN",
"ACTOR",
"ADAGE",
"ADAPT",
"ADDED",
"ADDER",
"ADDLE",
"ADEPT",
"ADIEU",
"ADIOS",
"ADITS",
"ADMAN",
"ADMIN",
"ADOBE",
"ADOBO",
"ADORE",
"ADORN",
"ADZES",
"AEGIS",
"AEONS",
"AERIE",
"AFFIX",
"AFIRE",
"AFOOT",
"AFORE",
"AGATE",
"AGAVE",
"AGGRO",
"AGILE",
"AGING",
"AGLOW",
"AGONY",
"AGORA",
"AHOLD",
"AIDED",
"AIDER",
"AIDES",
"AILED",
"AIMED",
"AIMER",
"AIOLI",
"AIRED",
"AISLE",
"ALARM",
"ALBUM",
"ALDER",
"ALEPH",
"ALERT",
"ALGAE",
"ALGAL",
"ALIAS",
"ALIBI",
"ALIEN",
"ALIGN",
"ALKYD",
"ALKYL",
"ALLAY",
"ALLEY",
"ALLOT",
"ALLOY",
"ALLYL",
"ALOES",
"ALOHA",
"ALPHA",
"ALTAR",
"ALTOS",
"ALUMS",
"AMASS",
"AMAZE",
"AMBER",
"AMBIT",
"AMBLE",
"AMBOS",
"AMEND",
"AMIDE",
"AMINE",
"AMINO",
"AMITY",
"AMNIO",
"AMOUR",
"AMPED",
"AMPLE",
"AMUSE",
"ANCHO",
"ANGEL",
"ANGLE",
"ANGST",
"ANIMA",
"ANIME",
"ANION",
"ANISE",
"ANKLE",
"ANNAS",
"ANNEX",
"ANNOY",
"ANNUL",
"ANODE",
"ANOLE",
"ANTIC",
"ANTIS",
"ANTSY",
"ANVIL",
"AORTA",
"APHID",
"APNEA",
"APRON",
"APSES",
"APTER",
"AQUAS",
"ARBOR",
"ARDOR",
"AREAL",
"AREAS",
"ARECA",
"ARENA",
"ARGON",
"ARGOT",
"ARGUS",
"ARIAS",
"ARILS",
"ARMED",
"ARMOR",
"AROMA",
"AROSE",
"ARRAY",
"ARROW",
"ARSES",
"ARSON",
"ARTSY",
"ASANA",
"ASCOT",
"ASHEN",
"ASHES",
"ASKED",
"ASKER",
"ASPEN",
"ASPIC",
"ASSAY",
"ASSES",
"ASSET",
"ASTER",
"ASTIR",
"ASURA",
"ATLAS",
"ATMAN",
"ATOLL",
"ATOMS",
"ATONE",
"ATOPY",
"ATTIC",
"AUDIO",
"AUDIT",
"AUGER",
"AUGUR",
"AUNTS",
"AUNTY",
"AURAL",
"AURAS",
"AUTOS",
"AUXIN",
"AVAIL",
"AVERS",
"AVERT",
"AVIAN",
"AVOWS",
"AWAIT",
"AWAKE",
"AWASH",
"AWOKE",
"AXELS",
"AXIAL",
"AXILS",
"AXING",
"AXIOM",
"AXION",
"AXLES",
"AXONS",
"AZIDE",
"AZOLE",
"AZURE",
"BABEL",
"BABES",
"BABKA",
"BACKS",
"BACON",
"BADDY",
"BADGE",
"BAGEL",
"BAGGY",
"BAILS",
"BAIRN",
"BAITS",
"BAIZE",
"BAKED",
"BAKER",
"BAKES",
"BALDY",
"BALED",
"BALER",
"BALES",
"BALKS",
"BALKY",
"BALLS",
"BALMS",
"BALMY",
"BALSA",
"BANAL",
"BANDS",
"BANDY",
"BANES",
"BANGS",
"BANJO",
"BANKS",
"BARBS",
"BARDS",
"BARED",
"BARER",
"BARES",
"BARGE",
"BARKS",
"BARMY",
"BARNS",
"BARON",
"BARRE",
"BASAL",
"BASED",
"BASER",
"BASES",
"BASIL",
"BASIN",
"BASKS",
"BASSO",
"BASSY",
"BASTE",
"BATCH",
"BATED",
"BATHE",
"BATHS",
"BATIK",
"BATON",
"BATTS",
"BATTY",
"BAWDY",
"BAWLS",
"BAYED",
"BAYOU",
"BEADS",
"BEADY",
"BEAKS",
"BEAMS",
"BEAMY",
"BEANS",
"BEARD",
"BEARS",
"BEAST",
"BEATS",
"BEAUS",
"BEAUT",
"BEAUX",
"BEBOP",
"BECKS",
"BEECH",
"BEEFS",
"BEEFY",
"BEEPS",
"BEERS",
"BEERY",
"BEETS",
"BEFIT",
"BEGAN",
"BEGET",
"BEGUN",
"BEIGE",
"BEING",
"BELAY",
"BELCH",
"BELIE",
"BELLE",
"BELLS",
"BELLY",
"BELTS",
"BENCH",
"BENDS",
"BENDY",
"BENTO",
"BENTS",
"BERET",
"BERGS",
"BERMS",
"BERRY",
"BERTH",
"BERYL",
"BESET",
"BESTS",
"BETAS",
"BETEL",
"BETTA",
"BEVEL",
"BEZEL",
"BHAJI",
"BIBLE",
"BICEP",
"BIDDY",
"BIDED",
"BIDES",
"BIDET",
"BIGHT",
"BIGOT",
"BIJOU",
"BIKED",
"BIKER",
"BIKES",
"BILES",
"BILGE",
"BILLS",
"BILLY",
"BIMBO",
"BINDI",
"BINDS",
"BINGE",
"BINGO",
"BIOME",
"BIOTA",
"BIPOD",
"BIRCH",
"BIRDS",
"BISON",
"BITCH",
"BITER",
"BITES",
"BITSY",
"BITTY",
"BLADE",
"BLAND",
"BLANK",
"BLARE",
"BLASE",
"BLAST",
"BLAZE",
"BLEAK",
"BLEAT",
"BLEBS",
"BLEED",
"BLEEP",
"BLEND",
"BLESS",
"BLIMP",
"BLING",
"BLINI",
"BLINK",
"BLIPS",
"BLISS",
"BLITZ",
"BLOAT",
"BLOBS",
"BLOCS",
"BLOGS",
"BLOKE",
"BLOND",
"BLOOM",
"BLOOP",
"BLOTS",
"BLOWN",
"BLOWS",
"BLUED",
"BLUES",
"BLUEY",
"BLUFF",
"BLUNT",
"BLURB",
"BLURS",
"BLURT",
"BLUSH",
"BOARS",
"BOAST",
"BOATS",
"BOBBY",
"BOCCE",
"BOCHE",
"BODED",
"BODES",
"BOFFO",
"BOGEY",
"BOGGY",
"BOGIE",
"BOGUS",
"BOILS",
"BOLAS",
"BOLES",
"BOLLS",
"BOLTS",
"BOLUS",
"BOMBE",
"BOMBS",
"BONDS",
"BONED",
"BONER",
"BONES",
"BONEY",
"BONGO",
"BONGS",
"BONKS",
"BONNY",
"BONUS",
"BOOBS",
"BOOBY",
"BOOED",
"BOOKS",
"BOOMS",
"BOOMY",
"BOONS",
"BOORS",
"BOOST",
"BOOTH",
"BOOTS",
"BOOTY",
"BOOZE",
"BOOZY",
"BOPPY",
"BORAX",
"BORED",
"BORER",
"BORES",
"BORIC",
"BORNE",
"BORON",
"BOSOM",
"BOSON",
"BOSSY",
"BOSUN",
"BOTCH",
"BOUGH",
"BOULE",
"BOUND",
"BOUTS",
"BOWED",
"BOWEL",
"BOWER",
"BOWLS",
"BOXED",
"BOXER",
"BOXES",
"BOYAR",
"BOYOS",
"BOZOS",
"BRACE",
"BRACT",
"BRADS",
"BRAGS",
"BRAID",
"BRAKE",
"BRAND",
"BRANS",
"BRASH",
"BRASS",
"BRATS",
"BRAVO",
"BRAWL",
"BRAWN",
"BRAYS",
"BRAZE",
"BREAM",
"BREED",
"BREWS",
"BRIAR",
"BRIBE",
"BRICK",
"BRIDE",
"BRIER",
"BRIGS",
"BRIMS",
"BRINE",
"BRINK",
"BRINY",
"BRISK",
"BRITS",
"BROCH",
"BROIL",
"BROKE",
"BROME",
"BRONC",
"BROOD",
"BROOK",
"BROOM",
"BROTH",
"BROWS",
"BRUIN",
"BRUIT",
"BRUNT",
"BRUSH",
"BRUTE",
"BUBBA",
"BUCKS",
"BUDDY",
"BUDGE",
"BUFFS",
"BUGGY",
"BUGLE",
"BUILT",
"BULBS",
"BULGE",
"BULKS",
"BULKY",
"BULLA",
"BULLS",
"BULLY",
"BUMPS",
"BUMPY",
"BUNCH",
"BUNDS",
"BUNDT",
"BUNKS",
"BUNNY",
"BUNTS",
"BUOYS",
"BURBS",
"BURGS",
"BURKA",
"BURLY",
"BURNS",
"BURNT",
"BURPS",
"BURQA",
"BURRO",
"BURRS",
"BURSA",
"BUSED",
"BUSES",
"BUSHY",
"BUSTS",
"BUSTY",
"BUTCH",
"BUTTE",
"BUTTS",
"BUXOM",
"BUZZY",
"BYLAW",
"BYRES",
"BYTES",
"BYWAY",
"CABAL",
"CABBY",
"CABER",
"CABIN",
"CABLE",
"CACAO",
"CACHE",
"CACTI",
"CADDY",
"CADET",
"CADRE",
"CAFES",
"CAGED",
"CAGES",
"CAGEY",
"CAIRN",
"CAKED",
"CAKES",
"CAKEY",
"CALFS",
"CALIF",
"CALLA",
"CALLS",
"CALMS",
"CALVE",
"CALYX",
"CAMEL",
"CAMEO",
"CAMPO",
"CAMPS",
"CAMPY",
"CANAL",
"CANDY",
"CANED",
"CANES",
"CANID",
"CANNA",
"CANOE",
"CANON",
"CANTO",
"CAPED",
"CAPER",
"CAPES",
"CAPON",
"CAPOS",
"CAPUT",
"CARAT",
"CARBO",
"CARBS",
"CARDS",
"CARED",
"CARER",
"CARES",
"CARGO",
"CAROB",
"CAROL",
"CAROM",
"CARPS",
"CARTE",
"CARTS",
"CARVE",
"CASED",
"CASES",
"CASKS",
"CASTE",
"CASTS",
"CATER",
"CATTY",
"CAULK",
"CAVED",
"CAVER",
"CAVES",
"CAVIL",
"CEASE",
"CECAL",
"CECUM",
"CEDAR",
"CEDED",
"CEDES",
"CEILI",
"CELEB",
"CELLO",
"CELLS",
"CELTS",
"CENTS",
"CHADS",
"CHAFE",
"CHAFF",
"CHALK",
"CHAMP",
"CHANA",
"CHANT",
"CHAOS",
"CHAPS",
"CHARD",
"CHARM",
"CHARS",
"CHART",
"CHASE",
"CHASM",
"CHATS",
"CHEAT",
"CHEEK",
"CHEEP",
"CHEER",
"CHEFS",
"CHEMO",
"CHERT",
"CHESS",
"CHEWS",
"CHEWY",
"CHICA",
"CHICK",
"CHICO",
"CHIDE",
"CHILE",
"CHILI",
"CHILL",
"CHIME",
"CHIMP",
"CHINA",
"CHINE",
"CHING",
"CHINO",
"CHINS",
"CHIPS",
"CHIRP",
"CHITS",
"CHIVE",
"CHOCK",
"CHOIR",
"CHOKE",
"CHOMP",
"CHOPS",
"CHORD",
"CHORE",
"CHOSE",
"CHOWS",
"CHUBS",
"CHUCK",
"CHUFF",
"CHUGS",
"CHUMP",
"CHUMS",
"CHUNK",
"CHURN",
"CHUTE",
"CIDER",
"CIGAR",
"CINCH",
"CISCO",
"CITED",
"CITES",
"CIVET",
"CIVIC",
"CIVVY",
"CLACK",
"CLADE",
"CLAMP",
"CLAMS",
"CLANG",
"CLANK",
"CLANS",
"CLAPS",
"CLASH",
"CLASP",
"CLAVE",
"CLAWS",
"CLAYS",
"CLEAT",
"CLEFS",
"CLEFT",
"CLERK",
"CLICK",
"CLIFF",
"CLIME",
"CLINE",
"CLING",
"CLINK",
"CLIPS",
"CLOAK",
"CLODS",
"CLOGS",
"CLOMP",
"CLONE",
"CLOTH",
"CLOTS",
"CLOUD",
"CLOUT",
"CLOVE",
"CLOWN",
"CLUBS",
"CLUCK",
"CLUED",
"CLUES",
"CLUMP",
"CLUNG",
"CLUNK",
"COALS",
"COATI",
"COATS",
"COBIA",
"COBRA",
"COCCI",
"COCKS",
"COCKY",
"COCOA",
"CODAS",
"CODEC",
"CODED",
"CODER",
"CODES",
"CODEX",
"CODON",
"COEDS",
"COHOS",
"COIFS",
"COILS",
"COINS",
"COKES",
"COLAS",
"COLDS",
"COLES",
"COLIC",
"COLIN",
"COLON",
"COLOR",
"COLTS",
"COMAS",
"COMBO",
"COMBS",
"COMER",
"COMES",
"COMET",
"COMFY",
"COMIC",
"COMMA",
"COMMO",
"COMPO",
"COMPS",
"COMTE",
"CONCH",
"CONDO",
"CONED",
"CONES",
"CONGA",
"CONGO",
"CONIC",
"CONKS",
"COOED",
"COOKS",
"COOLS",
"COOPS",
"COOPT",
"COPED",
"COPES",
"COPRA",
"COPSE",
"CORAL",
"CORDS",
"CORED",
"CORER",
"CORES",
"CORGI",
"CORKS",
"CORKY",
"CORMS",
"CORNS",
"CORNU",
"CORNY",
"CORPS",
"COSTS",
"COTTA",
"COUCH",
"COUGH",
"COULD",
"COUPE",
"COUPS",
"COVEN",
"COVES",
"COVET",
"COVEY",
"COWED",
"COWER",
"COWLS",
"CRABS",
"CRACK",
"CRAFT",
"CRAGS",
"CRAMP",
"CRAMS",
"CRANE",
"CRANK",
"CRAPE",
"CRAPS",
"CRASH",
"CRASS",
"CRATE",
"CRAVE",
"CRAWL",
"CRAWS",
"CRAZE",
"CREAK",
"CREDO",
"CREED",
"CREEK",
"CREEL",
"CREEP",
"CREME",
"CREPE",
"CREPT",
"CRESS",
"CREST",
"CREWS",
"CRIBS",
"CRICK",
"CRIED",
"CRIER",
"CRIES",
"CRIMP",
"CRISP",
"CRITS",
"CROAK",
"CROCK",
"CROCS",
"CROFT",
"CRONE",
"CRONY",
"CROOK",
"CROON",
"CROPS",
"CROUP",
"CROWS",
"CRUDE",
"CRUEL",
"CRUET",
"CRUMB",
"CRUSE",
"CRUSH",
"CRUST",
"CRYPT",
"CUBBY",
"CUBED",
"CUBES",
"CUBIC",
"CUBIT",
"CUDDY",
"CUFFS",
"CULLS",
"CULPA",
"CULTS",
"CUMIN",
"CUPID",
"CUPPA",
"CURBS",
"CURDS",
"CURED",
"CURES",
"CURIA",
"CURIO",
"CURLS",
"CURLY",
"CURRY",
"CURSE",
"CURVE",
"CURVY",
"CUSHY",
"CUSPS",
"CUTER",
"CUTIE",
"CUTIS",
"CUTUP",
"CYCAD",
"CYCLO",
"CYNIC",
"CYSTS",
"CZARS",
"DACHA",
"DADDY",
"DADOS",
"DAFFY",
"DAIRY",
"DAISY",
"DALES",
"DAMES",
"DAMNS",
"DAMPS",
"DANDY",
"DARED",
"DARES",
"DARKS",
"DARNS",
"DARTS",
"DASHI",
"DATED",
"DATER",
"DATES",
"DATUM",
"DAUBS",
"DAUNT",
"DAVIT",
"DAWNS",
"DAZED",
"DEALS",
"DEALT",
"DEANS",
"DEARS",
"DEARY",
"DEBIT",
"DEBTS",
"DEBUG",
"DEBUT",
"DECAF",
"DECAL",
"DECAY",
"DECKS",
"DECOR",
"DECOY",
"DECRY",
"DEEDS",
"DEEMS",
"DEEPS",
"DEERS",
"DEFER",
"DEIFY",
"DEIGN",
"DEISM",
"DEIST",
"DEITY",
"DEKES",
"DELAY",
"DELFT",
"DELIS",
"DELLS",
"DELTA",
"DELVE",
"DEMON",
"DEMOS",
"DEMUR",
"DENIM",
"DENSE",
"DENTS",
"DEPOT",
"DERBY",
"DESKS",
"DETER",
"DETOX",
"DEUCE",
"DEVIL",
"DEWAR",
"DHIKR",
"DHOWS",
"DIALS",
"DIARY",
"DICED",
"DICES",
"DICEY",
"DICKY",
"DICTA",
"DIETS",
"DIGIT",
"DIKED",
"DIKES",
"DILLS",
"DILLY",
"DIMER",
"DIMES",
"DINAR",
"DINED",
"DINER",
"DINES",
"DINGO",
"DINGS",
"DINGY",
"DINKS",
"DINKY",
"DINOS",
"DIODE",
"DIPPY",
"DIRER",
"DIRGE",
"DISCO",
"DISCS",
"DISHY",
"DISKS",
"DITCH",
"DITSY",
"DITTY",
"DITZY",
"DIVAN",
"DIVAS",
"DIVED",
"DIVER",
"DIVES",
"DIVOT",
"DIVVY",
"DIZZY",
"DOCKS",
"DODGE",
"DODGY",
"DODOS",
"DOERS",
"DOFFS",
"DOGES",
"DOGGY",
"DOGMA",
"DOING",
"DOLED",
"DOLES",
"DOLLS",
"DOLLY",
"DOLOR",
"DOLTS",
"DOMED",
"DOMES",
"DONEE",
"DONGS",
"DONNA",
"DONOR",
"DONUT",
"DOOMS",
"DOOMY",
"DOORS",
"DOOZY",
"DOPED",
"DOPES",
"DOPEY",
"DORKS",
"DORKY",
"DORMS",
"DOSAS",
"DOSED",
"DOSES",
"DOTED",
"DOTES",
"DOTTY",
"DOUGH",
"DOULA",
"DOUSE",
"DOVES",
"DOWDY",
"DOWEL",
"DOWER",
"DOWNS",
"DOWNY",
"DOWRY",
"DOWSE",
"DOYEN",
"DOZED",
"DOZEN",
"DOZER",
"DOZES",
"DRABS",
"DRAGS",
"DRAIN",
"DRAKE",
"DRAMS",
"DRANK",
"DRAPE",
"DRAWL",
"DRAWN",
"DRAWS",
"DRAYS",
"DREAD",
"DRECK",
"DREGS",
"DRIBS",
"DRIED",
"DRIER",
"DRIES",
"DRIFT",
"DRILL",
"DRIPS",
"DROID",
"DROLL",
"DRONE",
"DROOL",
"DROOP",
"DROPS",
"DROSS",
"DROVE",
"DROWN",
"DRUGS",
"DRUID",
"DRUMS",
"DRUNK",
"DRUPE",
"DRYAD",
"DRYER",
"DUALS",
"DUCAL",
"DUCAT",
"DUCHY",
"DUCKS",
"DUCKY",
"DUCTS",
"DUDES",
"DUELS",
"DUETS",
"DUFFS",
"DUKES",
"DULLS",
"DULSE",
"DUMBO",
"DUMMY",
"DUMPS",
"DUMPY",
"DUNCE",
"DUNES",
"DUNKS",
"DUOMO",
"DUPED",
"DUPES",
"DURAL",
"DURUM",
"DUSKS",
"DUSKY",
"DUSTS",
"DUSTY",
"DUTCH",
"DUVET",
"DWARF",
"DWEEB",
"DWELL",
"DWELT",
"DYADS",
"DYERS",
"DYING",
"DYKES",
"EAGER",
"EAGLE",
"EARED",
"EARLS",
"EARNS",
"EASED",
"EASEL",
"EASER",
"EASES",
"EATEN",
"EATER",
"EAVES",
"EBBED",
"EBONY",
"EBOOK",
"ECHOS",
"ECLAT",
"EDEMA",
"EDGED",
"EDGER",
"EDGES",
"EDICT",
"EDIFY",
"EDITS",
"EEJIT",
"EERIE",
"EGGED",
"EGRET",
"EIDER",
"EIDOS",
"EIGHT",
"EJECT",
"EJIDO",
"ELAND",
"ELBOW",
"ELDER",
"ELECT",
"ELEGY",
"ELIDE",
"ELITE",
"ELOPE",
"ELUDE",
"ELUTE",
"ELVEN",
"ELVES",
"EMAIL",
"EMBED",
"EMBER",
"EMCEE",
"EMERY",
"EMIRS",
"EMITS",
"EMOTE",
"ENACT",
"ENDED",
"ENDOW",
"ENEMA",
"ENNUI",
"ENOKI",
"ENROL",
"ENSUE",
"ENVOY",
"EOSIN",
"EPICS",
"EPOCH",
"EPOXY",
"EQUIP",
"ERASE",
"ERECT",
"ERGOT",
"ERODE",
"ERRED",
"ERUPT",
"ESSAY",
"ETHER",
"ETHIC",
"ETHOS",
"ETHYL",
"ETUDE",
"EUROS",
"EVADE",
"EVENS",
"EVERY",
"EVICT",
"EVILS",
"EVOKE",
"EWERS",
"EXALT",
"EXAMS",
"EXCEL",
"EXECS",
"EXERT",
"EXILE",
"EXITS",
"EXPAT",
"EXPEL",
"EXPOS",
"EXTOL",
"EXUDE",
"EXULT",
"EXURB",
"EYING",
"FABLE",
"FACED",
"FACER",
"LUNGE",
"FACES",
"FACET",
"FACIA",
"FACTS",
"FADED",
"FADER",
"FADES",
"FAERY",
"FAILS",
"FAIRS",
"FAIRY",
"FAKED",
"FAKER",
"FAKES",
"FAKIE",
"FAKIR",
"FALLS",
"FAMED",
"FANCY",
"FANGS",
"FANNY",
"FARCE",
"FARED",
"FARES",
"FARMS",
"FARTS",
"FASTS",
"FATAL",
"FATED",
"FATES",
"FATSO",
"FATTY",
"FATWA",
"FAUNA",
"FAUNS",
"FAVAS",
"FAVES",
"FAVOR",
"FAWNS",
"FAXED",
"FAXES",
"FAZED",
"FAZES",
"FEARS",
"FEAST",
"FEATS",
"FECAL",
"FECES",
"FEEDS",
"FEELS",
"FEIGN",
"FEINT",
"FELLA",
"FELLS",
"FELON",
"FELTS",
"FEMME",
"FEMUR",
"FENCE",
"FENDS",
"FERAL",
"FERIA",
"FERNS",
"FERNY",
"FERRY",
"FESTS",
"FETAL",
"FETCH",
"FETED",
"FETES",
"FETID",
"FETUS",
"FEUDS",
"FEVER",
"FEWER",
"FIATS",
"FIBER",
"FIBRE",
"FICHE",
"FICUS",
"FIEFS",
"FIEND",
"FIERY",
"FIFES",
"FIFTY",
"FILCH",
"FILED",
"FILER",
"FILES",
"FILET",
"FILLS",
"FILLY",
"FILMS",
"FILMY",
"FILTH",
"FINCA",
"FINCH",
"FINDS",
"FINED",
"FINER",
"FINES",
"FINIS",
"FINKS",
"FIORD",
"FIRED",
"FIRES",
"FIRMS",
"FISHY",
"FISTS",
"FIVER",
"FIVES",
"FIXED",
"FIXER",
"FIXES",
"FIZZY",
"FJORD",
"FLACK",
"FLAGS",
"FLAIL",
"FLAIR",
"FLAKE",
"FLAKY",
"FLAME",
"FLANK",
"FLANS",
"FLAPS",
"FLARE",
"FLASH",
"FLASK",
"FLATS",
"FLAWS",
"FLAYS",
"FLEAS",
"FLECK",
"FLEES",
"FLEET",
"FLESH",
"FLICK",
"FLIER",
"FLIES",
"FLING",
"FLOAT",
"FLOOD",
"FLOUR",
"FLOWN",
"FLOWS",
"FLUID",
"FLYER",
"FOCAL",
"FOLKS",
"FONTS",
"FOODS",
"FORMS",
"FORTY",
"FORUM",
"FOUND",
"FRAUD",
"FRIED",
"FRIES",
"FROST",
"FUELS",
"FUNDS",
"GAINS",
"GAMES",
"GAMMA",
"GASES",
"GATES",
"GAUGE",
"GEARS",
"GENES",
"GENRE",
"GHOST",
"GIFTS",
"GIRLS",
"GIVEN",
"GIVES",
"GLAND",
"GLORY",
"GLOSS",
"GLUED",
"GOALS",
"GOATS",
"GOING",
"GOODS",
"GRACE",
"GRADE",
"GRAIN",
"GRAMS",
"GRAPE",
"GRAPH",
"GRASP",
"GRAVE",
"GREEK",
"GREET",
"GRIEF",
"GRILL",
"GRIND",
"GRIPS",
"GROVE",
"GROWN",
"GROWS",
"GUARD",
"GUEST",
"GUILD",
"GUILT",
"HABIT",
"HAIRS",
"HALLS",
"HANDS",
"HANDY",
"HANGS",
"HATED",
"HATES",
"HAVEN",
"HAWKS",
"HEADS",
"HEARD",
"HEDGE",
"HEELS",
"HELLO",
"HELPS",
"HERBS",
"HIGHS",
"HILLS",
"HINTS",
"HIRED",
"HOBBY",
"HOLDS",
"HOLES",
"HOLLY",
"HOMES",
"HONEY",
"HONOR",
"HOOKS",
"HOPED",
"HOPES",
"HORNS",
"HOSTS",
"HOURS",
"HOVER",
"HUMOR",
"HURTS",
"ICONS",
"IDEAS",
"IDIOT",
"INBOX",
"INCUR",
"INDIE",
"INTRO",
"ITEMS",
"JEANS",
"JELLY",
"JEWEL",
"JOINS",
"JOKES",
"JUICE",
"JUICY",
"JUMPS",
"KEEPS",
"KICKS",
"KILLS",
"KINDA",
"KINDS",
"KINGS",
"KNEES",
"KNOCK",
"KNOTS",
"KNOWN",
"KNOWS",
"LABEL",
"LABOR",
"LACKS",
"LAKES",
"LAMPS",
"LANDS",
"LANES",
"LASER",
"LASTS",
"LATER",
"LEADS",
"LEAKS",
"LEASE",
"LEAST",
"LEMON",
"LEVER",
"LIKED",
"LIKES",
"LIMBS",
"LINED",
"LINEN",
"LINER",
"LINES",
"LINKS",
"LIONS",
"LISTS",
"LIVED",
"LIVER",
"LIVES",
"LOADS",
"LOANS",
"LOBBY",
"LOCKS",
"LODGE",
"LOGIC",
"LOGOS",
"LOOKS",
"LOOPS",
"LORDS",
"LOSES",
"LOVED",
"LOVER",
"LOVES",
"LOWER",
"LOYAL",
"LUNAR",
"LUNGS",
"LYING",
"MACRO",
"MAKER",
"MAKES",
"MALES",
"MAPLE",
"MARKS",
"MASKS",
"MATES",
"MATHS",
"MATTE",
"MAYOR",
"MEALS",
"MEANS",
"MEANT",
"MEATS",
"MEDAL",
"MEDIA",
"MEETS",
"MELEE",
"MENUS",
"MERCY",
"MERGE",
"MERIT",
"MERRY",
"MESSY",
"METER",
"METRO",
"MICRO",
"MIDST",
"MIGHT",
"MILES",
"MINDS",
"MINES",
"MIXED",
"MIXER",
"MIXES",
"MODEM",
"MODES",
"MOIST",
"MOUNT",
"MOUSE",
"MOVED",
"MOVES",
"MOVIE",
"MYTHS",
"NAILS",
"NAMED",
"NAMES",
"NASAL",
"NEEDS",
"NERVE",
"NEWER",
"NEXUS",
"NICER",
"NICHE",
"NINJA",
"NINTH",
"NOBLE",
"NODES",
"NOISY",
"NORMS",
"NOTCH",
"NOTED",
"NOTES",
"NYLON",
"OASIS",
"OCEAN",
"OLDER",
"OLIVE",
"OMEGA",
"ONION",
"ONSET",
"OPENS",
"OPERA",
"OPTED",
"OPTIC",
"ORBIT",
"ORGAN",
"OUNCE",
"OWNED",
"OXIDE",
"PACKS",
"PAGES",
"PAINS",
"PAINT",
"PAIRS",
"PANIC",
"PANTS",
"PARKS",
"PARTS",
"PASTA",
"PASTE",
"PATCH",
"PATHS",
"PATIO",
"PAUSE",
"PEACH",
"PEAKS",
"PEARL",
"PEDAL",
"PEERS",
"PENIS",
"PENNY",
"PERKS",
"PESTS",
"PETTY",
"PHOTO",
"PICKS",
"PILES",
"PILLS",
"PINCH",
"PIPES",
"PIXEL",
"PIZZA",
"PLANS",
"PLAYS",
"PLAZA",
"PLOTS",
"PLUGS",
"POEMS",
"POKER",
"POLAR",
"POLES",
"POLLS",
"POOLS",
"PORCH",
"PORES",
"PORTS",
"POSED",
"POSES",
"POSTS",
"POUCH",
"PRINT",
"PROBE",
"PROMO",
"PRONE",
"PROPS",
"PROXY",
"PSALM",
"PULLS",
"PULSE",
"PUMPS",
"PUNCH",
"PUPIL",
"PUPPY",
"PURSE",
"QUERY",
"QUEST",
"QUEUE",
"QUILT",
"QUOTE",
"RACES",
"RACKS",
"RADAR",
"RAILS",
"RAINY",
"RALLY",
"RANCH",
"RANKS",
"RATED",
"RATES",
"RAZOR",
"REACT",
"READS",
"REALM",
"REBEL",
"REIGN",
"RELAY",
"RENAL",
"RENEW",
"RESET",
"RESIN",
"RETRO",
"RIDER",
"RIDES",
"RIDGE",
"RIFLE",
"RIGID",
"RINGS",
"RINSE",
"RISEN",
"RISES",
"RISKS",
"RISKY",
"RIVAL",
"ROADS",
"ROBOT",
"ROCKS",
"ROCKY",
"ROGUE",
"ROLES",
"ROLLS",
"ROOMS",
"ROOTS",
"ROPES",
"ROSES",
"RUINS",
"RULED",
"RULER",
"RULES",
"SAFER",
"SALAD",
"SALES",
"SALON",
"SANDY",
"SATIN",
"SAUCE",
"SAVED",
"SAVES",
"SCALP",
"SCANS",
"SCARE",
"SCARF",
"SCARY",
"SCENT",
"SCOOP",
"SCOUT",
"SCRAP",
"SCREW",
"SEALS",
"SEAMS",
"SEATS",
"SEEDS",
"SEEKS",
"SEEMS",
"SELLS",
"SENDS",
"SERUM",
"SETUP",
"SEVEN",
"SEWER",
"SHADE",
"SHAFT",
"SHAKE",
"SHAME",
"SHARK",
"SHELF",
"SHELL",
"SHINE",
"SHINY",
"SHIPS",
"SHOES",
"SHOOK",
"SHOPS",
"SHORE",
"SHOTS",
"SHOWN",
"SHOWS",
"SIDES",
"SIEGE",
"SIGMA",
"SIGNS",
"SITES",
"SIZED",
"SIZES",
"SKIES",
"SKINS",
"SKIRT",
"SKULL",
"SLATE",
"SLAVE",
"SLEPT",
"SLICE",
"SLIDE",
"SLOPE",
"SLOTS",
"SMELL",
"SNACK",
"SNAKE",
"SNEAK",
"SOCKS",
"SOILS",
"SOLAR",
"SONGS",
"SONIC",
"SORTS",
"SOULS",
"SPARK",
"SPECS",
"SPELL",
"SPENT",
"SPERM",
"SPICE",
"SPICY",
"SPIKE",
"SPINE",
"SPOKE",
"SPOON",
"SPOTS",
"SPRAY",
"SPURS",
"STACK",
"STAIN",
"STAKE",
"STAMP",
"STARS",
"STATS",
"STAYS",
"STEAK",
"STEAL",
"STEER",
"STEMS",
"STEPS",
"STIFF",
"STOLE",
"STOOD",
"STOOL",
"STOPS",
"STORM",
"STORY",
"STOVE",
"STRAP",
"STRAW",
"STRIP",
"STUCK",
"SUCKS",
"SUITE",
"SUITS",
"SUNNY",
"SURGE",
"SUSHI",
"SWEAR",
"SWEAT",
"SWEPT",
"SWIFT",
"SWING",
"SWISS",
"SWORD",
"SYRUP",
"TAKEN",
"TAKES",
"TALES",
"TALKS",
"TANKS",
"TAPES",
"TASKS",
"TASTY",
"TAXES",
"TEAMS",
"TEARS",
"TEENS",
"TEETH",
"TELLS",
"TEMPO",
"TENDS",
"TENTH",
"TENTS",
"TERMS",
"TESTS",
"TEXTS",
"THEFT",
"THEIR",
"THESE",
"THIEF",
"THIGH",
"THOSE",
"THREE",
"THREW",
"THUMB",
"TIGER",
"TILES",
"TIMER",
"TIMES",
"TIRED",
"TIRES",
"TOAST",
"TOKEN",
"TONES",
"TOOLS",
"TOOTH",
"TOPIC",
"TORCH",
"TOURS",
"TOWEL",
"TOWNS",
"TOXIC",
"TRACE",
"TRACT",
"TRAIL",
"TRAIT",
"TRANS",
"TRAPS",
"TRASH",
"TREES",
"TRIBE",
"TRICK",
"TRIED",
"TRIES",
"TRIPS",
"TROUT",
"TRUCK",
"TRUMP",
"TRUNK",
"TUBES",
"TUMOR",
"TUNED",
"TUNES",
"TURBO",
"TURNS",
"TUTOR",
"TWEET",
"TWINS",
"TWIST",
"TYPES",
"TYRES",
"ULTRA",
"UNITE",
"UNITS",
"URGED",
"URINE",
"USAGE",
"USERS",
"USING",
"VALVE",
"VAPOR",
"VAULT",
"VEGAN",
"VEINS",
"VENTS",
"VENUE",
"VERSE",
"VIEWS",
"VILLA",
"VINYL",
"VIRAL",
"VIRUS",
"VISAS",
"VIVID",
"VOCAL",
"VODKA",
"VOLTS",
"VOTED",
"VOTER",
"VOTES",
"WAGES",
"WAGON",
"WAIST",
"WALKS",
"WALLS",
"WANTS",
"WARNS",
"WATTS",
"WAVES",
"WEARS",
"WEEDS",
"WEEKS",
"WEIGH",
"WEIRD",
"WELLS",
"WELSH",
"WHALE",
"WHEAT",
"WHEEL",
"WIDER",
"WIDOW",
"WIDTH",
"WINDS",
"WINES",
"WINGS",
"WIPED",
"WIRED",
"WIRES",
"WITCH",
"WIVES",
"WOMEN",
"WOODS",
"WORDS",
"WORKS",
"WORMS",
"WORSE",
"WORST",
"WORTH",
"WOUND",
"WRATH",
"WRIST",
"WROTE",
"HARPS",
"SOWED",
"SKIED",
"SIDED",
"POOPS",
"POOPY",
"YACHT",
"YARDS",
"YEARS",
"YEAST",
"YIELD",
"YUMMY",
"ZEBRA",
"ZONES"
]
const wordsDOM = document.getElementById("words");
const wordsArray = document.getElementsByClassName('word'); 
const kb = document.getElementById('keyboard');

const dictURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const dictAPI_REQUEST_HEADERS = {
  'Content-Type': 'application/json'
};

const settings = {
  wordiness: true,
  strict: false
}

let revealedLetters = [];

let gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
let wonModal = new bootstrap.Modal(document.getElementById('wonModal'));

let WORD;
getNewWord();

const words = 6;
const letters = 5;

let isGameOver = false;

let currentWord = 0;
let currentChar;

function getNewWord() {
  WORD = wordList[Math.round(Math.random()*wordList.length)]
  console.log('LIKASJHTOLAFKLGFD'+WORD+'HASDFFSDEFSIR')
}

function drawWords() {
  for (let i = 0; i < words; i++) {
    let word = document.createElement("div"); 
    word.className = "word"
    for (let k = 0; k < letters; k++) {
      let letter = document.createElement("span");
      letter.className = "letterbox";
      word.appendChild(letter);
      wordsDOM.appendChild(word);
    }
    wordsDOM.appendChild(document.createElement('p'))
  }
}

function createEventListeners() {
  kb.addEventListener('click', (e) => {
    
    if(e.target.id === 'back') { 
      deleteLastLetter();
    }
    else if(e.target.id === 'enter') { 
      pressEnter();
    } else {
      // e.target.id
      if(!e.target.id.startsWith('row') && e.target.id !== 'keyboard') {
        enterLetter(e.target.id);
      }
    }
  })

  document.addEventListener('keyup', (e) => {
    if (e.keyCode > 64 && e.keyCode < 91) {
      enterLetter(e.key.toUpperCase())
    } else if (e.key === "Enter") {
      pressEnter()
    } else if (e.key === "Backspace") {
      deleteLastLetter()
    }
  })

  document.getElementById('btnNew').addEventListener('click', () => {
      newGame();
  });    

  document.getElementById('losePlayAgain').addEventListener('click', () => {
    gameOverModal.hide()
    newGame();
  });    

  document.getElementById('winPlayAgain').addEventListener('click', () => {
    wonModal.hide()  
    newGame();
  });    


  // SETTINGS //
  document.getElementById('darkModeDiv').addEventListener('click', () => {
    document.getElementById('dark').style.display = 'inline'
  })
  
  document.getElementById('strict').addEventListener('change', (e) => {
    e.target.checked ? settings.strict = true : settings.strict = false;
  })

  document.getElementById('wordiness').addEventListener('change', (e) => {
    e.target.checked ? settings.wordiness = true : settings.wordiness = false;
  })

  SettingsModal.addEventListener('hide.bs.modal', () => {
    wordsDOM.focus();
  })
}

function showMessage(message) {
  let msgField = document.getElementById('msg');
  msgField.textContent = message;
  setTimeout(() => {
    msgField.textContent = '';
  }, 3000)
}

function resetGame() {
  //reset words
  for (let i = 0; i < wordsArray.length; i++) {
    let currentLetters = wordsArray[i].getElementsByClassName('letterbox')
    for (let k = 0; k < currentLetters.length; k++) {
      currentLetters[k].textContent = '';
      currentLetters[k].classList.remove('wrongplace');
      currentLetters[k].classList.remove('rightplace');
    }
  }

  // reset kb
  document.querySelectorAll('.letter').forEach(e => {
    e.classList.remove('wrongplace');
    e.classList.remove('rightplace');
    e.classList.remove('guessed');
  })

  //reset guess position
  currentWord = 0;
  setChar(0);

  //reset revealed letters
  revealedLetters = [];
}

function newGame() {
  resetSelectedLetter();
  resetGame();
  isGameOver = false;
  getNewWord();
}

function enterLetter(letter) {
  if (!isGameOver) {  
    let chars = wordsArray[currentWord].getElementsByClassName('letterbox')
    chars[currentChar].textContent = letter;
    if(currentChar < letters-1) {
      setChar(currentChar+1)
    }
  }
}

function deleteLastLetter() {
  if (!isGameOver) {  
    const chars = wordsArray[currentWord].getElementsByClassName('letterbox');
    if(chars[currentChar].textContent === ''  && currentChar > 0) {
      setChar(currentChar-1)
    }
    chars[currentChar].textContent = '';
  }
}

function setChar(char) {
  currentChar = char;
  resetSelectedLetter()
  wordsArray[currentWord].getElementsByClassName('letterbox')[currentChar].classList.add('selectedLetter');
}

function setWord() {
  currentWord++
  setChar(0);
}

function resetSelectedLetter() {
    for (let i = 0; i <= currentWord; i++) {
      let currentLetters = wordsArray[i].getElementsByClassName('letterbox')
      for (let k = 0; k < currentLetters.length; k++) {
        currentLetters[k].classList.remove('selectedLetter');
      }
  }
}

function pressEnter() {
  if (!isGameOver) {  
    let wordFull = true;    
    for (let l = 0; l < letters; l++) {
      if(wordsArray[currentWord].children[l].textContent ==='') {      
        wordFull=false;
      }     
    }
    if(wordFull && ((settings.wordiness && isWord()) || !settings.wordiness)) {
      submitWord();
    } else {
      if(!wordFull) {
        showMessage('Word is Incomplete');
      } else if (!isWord()){
        showMessage('Word not in List');

      }
    }
  } else { 
    wonModal.hide();
    gameOverModal.hide();
    newGame(); 
  }
}

function isWord() {
  let guess = readWord()
  if (wordList.includes(guess)) {
    return true;
  }
  return false;
}

function checkForStrict(guess) {
  for (let s = 0; s < revealedLetters.length; s++) {
    const letter = revealedLetters[s];
    if(!guess.includes(letter)) {
      return false;
    } 
  } 
  return true;
}

function submitWord() {
  let guess = readWord()

  let isStrict = false;
  if(settings.strict) {
    isStrict = checkForStrict(guess);
  }

  let guessWord;
  if(!settings.strict || isStrict && settings.strict) guessWord = true; 
  else guessWord = false;
  
  if (guessWord) {
    //actually doing it
    let correct = showLetters(guess);
    if(correct === letters) { 
      win()
    } else {
      currentWord === words-1 ? gameOver() : nextWord();
    }
  } else { 
    showMessage("Must Include All Revealed Letters")
  }
}

function gameOver() {
  isGameOver = true;
  let wordModalLocation = document.getElementById('theWordModal')
  console.log('wordModalLocation',wordModalLocation);
  wordModalLocation.innerHTML = '';
  //show definition
  var defineLink = document.createElement('a')
  defineLink.href = `https://www.google.com/search?q=define+${WORD}`
  defineLink.target = '_BLANK';
  // console.log(document.createTextNode(WORD));
  // defineLink.textContent = document.createTextNode(WORD)
  defineLink.appendChild(document.createTextNode(WORD))
  document.getElementById('theWordModal').appendChild(defineLink)
  gameOverModal.show()
}

function win() {
  isGameOver = true;
  document.getElementById('guessesModal').textContent = currentWord+1;
  wonModal.show()
}

function nextWord() {
  setWord()
}

function readWord() {
  let guess = ''
  let word = wordsArray[currentWord];
  let chars = word.getElementsByClassName('letterbox')
  for (let c = 0; c < chars.length; c++) {
    const char = chars[c];
    guess += char.textContent;    
  }  
  return guess;
}


function showLetters(guess) {
  let chars = wordsArray[currentWord].getElementsByClassName('letterbox')
  let correct = 0;
  for (let i = 0; i < letters; i++) {
    let key = document.getElementById(guess[i])
    if(WORD[i] === guess[i]) {
      correct++;
      chars[i].classList.add('rightplace')
      key.classList.add('rightplace')
      revealedLetters.push(guess[i])
    } else if (WORD.indexOf(guess[i]) > -1) {
      chars[i].classList.add('wrongplace')
      key.classList.add('wrongplace')
      revealedLetters.push(guess[i])
    } else {
      key.classList.add('guessed')
    }
  }
  return correct
}


function setup() {
  drawWords();
  createEventListeners();
  setChar(0);
  // testDict();
} 

// function testDict() {
//   let guess = 'SSDFG';
//   axios.get(dictURL+guess, { headers: dictAPI_REQUEST_HEADERS })
//     // Handle a successful response from the server
//     .then(response => {
//             // Getting a data object from response that contains the necessary data from the server
//             const data = response.data;
//             console.log('data', data);

//     })
//     // Catch and print errors if any
//     .catch(error => console.error('Error getting word', error));
// }


setup();

