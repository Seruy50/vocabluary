import React from 'react';

let Words = [
    {"id": 1, "eng": "throughout", "ukr": "усюди, скрізь, повінстю"},

    {"id": 2, "eng": "quite", "ukr": "цілком, зовсім, майже"},

    {"id": 3, "eng": "pejorative", "ukr": "лайка, зневажливий"},

    {"id": 4, "eng": "contempt", "ukr": "презирство, неповага, образа"},

    {"id": 5, "eng": "thogh", "ukr": "однак, проте, нехай"},

    {"id": 6, "eng": "appear", "ukr": "з’являтися, здаватися, виявлятися"},

    {"id": 7, "eng": "contemporary", "ukr": "сучасник, ровесник, сучасний"},

    {"id": 8, "eng": "affiliate", "ukr": "філія, помічник, усиновлювати"},

    {"id": 9, "eng": "affinity", "ukr": "близькість, симпатія, подібність"},

    {"id": 10, "eng": "attitude", "ukr": "позиція, відношення, положення"},

    {"id": 11, "eng": "perpetrate", "ukr": "здійснювати"},

{"id": 12, "eng": "primarily", "ukr": "спершу"},

{"id": 13, "eng": "inspiration", "ukr": "натхнення, стимулювання"},

{"id": 14, "eng": "seek", "ukr": "прагнути, просити?, домагатися"},

{"id": 15, "eng": "interruption", "ukr": "перерва, затримка, втручання"},

{"id": 16, "eng": "grave", "ukr": "могила"},

{"id": 17, "eng": "unfaltering", "ukr": "твердий, рішучий"},

{"id": 18, "eng": "distinguished", "ukr": "вишуканий, відомий, видатний"},

{"id": 19, "eng": "scatter", "ukr": "розсіювати, розкидати, розмішувати"},

{"id": 20, "eng": "layer", "ukr": "шар, пласт, муляр"},

{"id": 21, "eng": "permit", "ukr": "дозвіл, ліцензія, пропуск"},

{"id": 22, "eng": "preserve", "ukr": "зберігати"},

{"id": 23, "eng": "distinct", "ukr": "ясний, виразний"},

{"id": 24, "eng": "covenant", "ukr": "угода, завіт"},

{"id": 25, "eng": "wilderness", "ukr": "пустеля, цілина, пустка"},

{"id": 26, "eng": "rest", "ukr": "відпочивати"},

{"id": 27, "eng": "worship", "ukr": "шанувати, поклонятися, культ"},

{"id": 28, "eng": "undergo", "ukr": "відчувати, піддаватися"},

{"id": 29, "eng": "emphasis", "ukr": "підкреслення, наголос, різкість"},

{"id": 30, "eng": "observance", "ukr": "дотримання, святкування, обряд"},

{"id": 31, "eng": "labor", "ukr": "праця, робота"},

{"id": 32, "eng": "subsequently", "ukr": "внаслідок, пізніше, після"},

{"id": 33, "eng": "assembly", "ukr": "збори, комплект, збірка"},

{"id": 34, "eng": "scholar", "ukr": "вчений"},

{"id": 35, "eng": "fervent", "ukr": "пристрасний, гарячий"},

{"id": 36, "eng": "disdain", "ukr": "зневага, презирство"},

{"id": 37, "eng": "arenzy", "ukr": "безумство"},

{"id": 38, "eng": "animosity", "ukr": "ворожнеча, неприязнь, злоба"},

{"id": 39, "eng": "cat", "ukr": "кіт"},

{"id": 40, "eng": "enlightenment", "ukr": "просвітлення, прозріння"},

{"id": 41, "eng": "adherent", "ukr": "сучасник"},

{"id": 42, "eng": "merge", "ukr": "з’єднатись, злитись, об’єднатись"},

{"id": 43, "eng": "midst", "ukr": "середовище"},

{"id": 44, "eng": "dog", "ukr": "собака, пес"},

{"id": 45, "eng": "fasting", "ukr": "піст, голодування"},

{"id": 46, "eng": "mourning", "ukr": "траур, оплакування, смуток"},

{"id": 47, "eng": "reciting", "ukr": "читання"},

{"id": 48, "eng": "blessing", "ukr": "благословення"},

{"id": 49, "eng": "sniff", "ukr": "нюхати, вдихати"},

{"id": 50, "eng": "pretend", "ukr": "вдавати"},

{"id": 51, "eng": "preceding", "ukr": "попередній"},

{"id": 52, "eng": "plead", "ukr": "благати"},

{"id": 53, "eng": "ram", "ukr": "баран"},

{"id": 54, "eng": "arouse", "ukr": "викликати"},

{"id": 55, "eng": "profound", "ukr": "глибокий"},

{"id": 56, "eng": "preserve", "ukr": "зберегти, захистити"},

{"id": 57, "eng": "acknowledge", "ukr": "визнати, визнання, підтвердження"},

{"id": 58, "eng": "divine", "ukr": "божественний, священний"},

{"id": 59, "eng": "offen", "ukr": "звинуватити"},

{"id": 60, "eng": "repentance", "ukr": "покаяння"},

{"id": 61, "eng": "atonement", "ukr": "спокута"},

{"id": 62, "eng": "fast", "ukr": "піст"},

{"id": 63, "eng": "reooster", "ukr": "півень"},

{"id": 64, "eng": "tabernacle", "ukr": "шатер"},

{"id": 65, "eng": "commemorates", "ukr": "відзначати, знаменувати"},

{"id": 66, "eng": "dwell", "ukr": "жити, поселитись"},

{"id": 67, "eng": "hut", "ukr": "хижа, хатина"},

{"id": 68, "eng": "tormentor", "ukr": "мучитель"},

{"id": 69, "eng": "kindred", "ukr": "родич"},

{"id": 70, "eng": "abonimation", "ukr": "гидота"},

{"id": 71, "eng": "blur", "ukr": "розмитий"},

{"id": 72, "eng": "blubbing", "ukr": "ридання"},

{"id": 73, "eng": "tuneless", "ukr": "немелодично"},

{"id": 74, "eng": "ghastly", "ukr": "жахливий"},

{"id": 75, "eng": "errand", "ukr": "завдання, поручення"},

{"id": 76, "eng": "endeavor", "ukr": "зусилля, починання, діяння"},

{"id": 77, "eng": "palooka", "ukr": "громило, дурак"},

{"id": 78, "eng": "demeanor", "ukr": "манери, поведінка"},

{"id": 79, "eng": "lap", "ukr": "коліна"},

{"id": 80, "eng": "ooze", "ukr": "сочитися, витікати"},

{"id": 81, "eng": "hatred", "ukr": "ненависть, ворожнеча"},

{"id": 82, "eng": "dump", "ukr": "смітник"},

{"id": 83, "eng": "pliable", "ukr": "гнучний, податливий"},

{"id": 84, "eng": "belly", "ukr": "брюхо, живіт"},

{"id": 85, "eng": "inevitable", "ukr": "неминучий"},

{"id": 86, "eng": "suffice", "ukr": "достатньо, підійде"},

{"id": 87, "eng": "recall", "ukr": "пам’ятати, згадувати, нагадувати"},

{"id": 88, "eng": "cruse", "ukr": "кувшин"},

{"id": 89, "eng": "inwavering", "ukr": "незмінний, непохитний"},

{"id": 90, "eng": "book", "ukr": "книга"},

{"id": 91, "eng": "kindle", "ukr": "розпалити, запалити"},

{"id": 92, "eng": "ascend", "ukr": "сходження"},

{"id": 93, "eng": "impose", "ukr": "нав’язати, ввести, встановити"},

{"id": 94, "eng": "observe", "ukr": "відмічати, дотримуватись"},

{"id": 95, "eng": "plot", "ukr": "змова, сюжет"},

{"id": 96, "eng": "foil", "ukr": "зірвати, помішати, фольга"},

{"id": 97, "eng": "reveler", "ukr": "гуляка"},

{"id": 98, "eng": "triangular", "ukr": "трикутний, трьохсторонній"},

{"id": 99, "eng": "pastry", "ukr": "випічка, тісто"},

{"id": 100, "eng": "poppy", "ukr": "мак"},

{"id": 101, "eng": "leaven", "ukr": "закваска"},

{"id": 102, "eng": "solely", "ukr": "виключно, тільки"},

{"id": 103, "eng": "yeast", "ukr": "дріжджі"},

{"id": 104, "eng": "haste", "ukr": "спішити, поспіх"},

{"id": 105, "eng": "day", "ukr": "день"},

{"id": 106, "eng": "revelation", "ukr": "откровення, відкриття"},

{"id": 107, "eng": "deck", "ukr": "тераса, палуба, прикрашати"},

{"id": 108, "eng": "precisely", "ukr": "точно"},

{"id": 109, "eng": "pork", "ukr": "свинина"},

{"id": 110, "eng": "fins", "ukr": "плавники"},

{"id": 111, "eng": "scale", "ukr": "масштаб, шкaла, рівень"},

{"id": 112, "eng": "therefore", "ukr": "тому"},

{"id": 113, "eng": "acrostic", "ukr": "акростих"},

{"id": 114, "eng": "clarify", "ukr": "уточнити, роз’яснити"},

{"id": 115, "eng": "bind", "ukr": "прив’язати, пов’язати"},

{"id": 116, "eng": "portion", "ukr": "частина, доля"},

{"id": 117, "eng": "led", "ukr": "причина"},

{"id": 118, "eng": "forbade", "ukr": "заборона"},

{"id": 119, "eng": "aspire", "ukr": "прагунти, розраховувати"},

{"id": 120, "eng": "leap", "ukr": "скачок, прижок, високосний"},

{"id": 121, "eng": "ancestral", "ukr": "родовий"},

{"id": 122, "eng": "former", "ukr": "колишній, попередній"},

{"id": 123, "eng": "undertake", "ukr": "провести, займатись"},

{"id": 124, "eng": "sole", "ukr": "єдиний"},

{"id": 125, "eng": "deam", "ukr": "вважати"},

{"id": 126, "eng": "expel", "ukr": "виключати, висилати, відчисляти"},

{"id": 127, "eng": "particularly", "ukr": "особливо"},

{"id": 128, "eng": "gradually", "ukr": "поступово"},

{"id": 129, "eng": "unworthy", "ukr": "недостойний"},

{"id": 130, "eng": "jettison", "ukr": "скинути, викинути"},

{"id": 131, "eng": "outbreak", "ukr": "спалах, початок, виникнення"},

{"id": 132, "eng": "attempt", "ukr": "спроба, зусилля, намагання"},

{"id": 133, "eng": "yearn", "ukr": "прагнути"},

{"id": 134, "eng": "descend", "ukr": "походити, сходити, спускатися"},

{"id": 135, "eng": "utterly", "ukr": "абсолюто, повністю, надзвичайно"},

{"id": 136, "eng": "horse", "ukr": "кінь"},

{"id": 137, "eng": "disavowal", "ukr": "заперечення, відмова"},

{"id": 138, "eng": "stir", "ukr": "розворушити, переполох, тривога"},

{"id": 139, "eng": "purpose", "ukr": "ціль, мета, завдання"},

{"id": 140, "eng": "persuade", "ukr": "вговорити, переконати"},

{"id": 141, "eng": "breakthrough", "ukr": "прорив, успіх, відкриття"},

{"id": 142, "eng": "folly", "ukr": "дурість, безумство"},

{"id": 143, "eng": "desolate", "ukr": "пустинний"},

{"id": 144, "eng": "anticipating", "ukr": "очікування"},

{"id": 145, "eng": "anticipate", "ukr": "очікувати, прогнозувати"},

{"id": 146, "eng": "undergo", "ukr": "проходити, переживати, переносити"},

{"id": 147, "eng": "bypass", "ukr": "обхід, об’їзд"},

{"id": 148, "eng": "distinct", "ukr": "окремий, явний, виражений"},

{"id": 149, "eng": "foremost", "ukr": "головний"},

{"id": 150, "eng": "infidel", "ukr": "безбожник, язичник, невіруючий"},

{"id": 151, "eng": "pillage", "ukr": "грабунок"},

{"id": 152, "eng": "accuse", "ukr": "звинувачувати"},

{"id": 153, "eng": "allegedly", "ukr": "наче"},

{"id": 154, "eng": "conviction", "ukr": "переконання, впевненість"},

{"id": 155, "eng": "distaste", "ukr": "неприязнь"},

{"id": 156, "eng": "yield", "ukr": "принести, дати"},

{"id": 157, "eng": "trait", "ukr": "ознака, риса"},

{"id": 158, "eng": "persuasive", "ukr": "переконливий"},

{"id": 159, "eng": "prominence", "ukr": "відомість, значимість"},

{"id": 160, "eng": "division", "ukr": "розділ, поділ, відділ"},

{"id": 161, "eng": "threat", "ukr": "погроза, загроза, небезпека"},

{"id": 162, "eng": "play", "ukr": "грати"},

{"id": 163, "eng": "aloof", "ukr": "відчужено"},

{"id": 164, "eng": "erroneous", "ukr": "помилковий, неправильний"},

{"id": 165, "eng": "stain", "ukr": "пляма"},

{"id": 166, "eng": "alter", "ukr": "змінити, міняти"},

{"id": 167, "eng": "rehash", "ukr": "перефразування, пересказ"},

{"id": 168, "eng": "canard", "ukr": "чутка"},

{"id": 169, "eng": "perish", "ukr": "загинути"},

{"id": 170, "eng": "garment", "ukr": "одяг"},

{"id": 171, "eng": "decimate", "ukr": "знищити, спустошити"},

{"id": 172, "eng": "expulsion", "ukr": "висилка, виключення, депортація"},

{"id": 173, "eng": "unsybstantiated", "ukr": "непідтверджденні, необгрунтовані"},

{"id": 174, "eng": "usury", "ukr": "лихварство"},

{"id": 175, "eng": "revenue", "ukr": "дохід"},

{"id": 176, "eng": "mint", "ukr": "чеканити"},

{"id": 177, "eng": "undertake", "ukr": "провести, прийняти, виконати"},

{"id": 178, "eng": "swath", "ukr": "полоса, ряд"},

{"id": 179, "eng": "woman", "ukr": "жінка"},

{"id": 180, "eng": "absorb", "ukr": "поглощати, впитати"},

{"id": 181, "eng": "demand", "ukr": "попит, потреба"},

{"id": 182, "eng": "undergo", "ukr": "проходити"},

{"id": 183, "eng": "pitty", "ukr": "дрібний"},

{"id": 184, "eng": "dealt", "ukr": "розглядати, вирішувати"},

{"id": 185, "eng": "horse", "ukr": "кінь"},

{"id": 186, "eng": "king", "ukr": "король"},

{"id": 187, "eng": "fraternal", "ukr": "братський"},

{"id": 188, "eng": "inseparable", "ukr": "неподільний, нероздільний"},

{"id": 189, "eng": "scribe", "ukr": "писар"},

{"id": 190, "eng": "swiftly", "ukr": "швидко"},

{"id": 191, "eng": "prevalent", "ukr": "поширений"},

{"id": 192, "eng": "dean", "ukr": "настоятель"},

{"id": 193, "eng": "charter", "ukr": "хартія, устав"},

{"id": 194, "eng": "adjudicate", "ukr": "розглядати"},

{"id": 195, "eng": "broad", "ukr": "широкий"},

{"id": 196, "eng": "scope", "ukr": "масштаб, охват, рамки"},

{"id": 197, "eng": "sophisticated", "ukr": "ускладнення"},

{"id": 198, "eng": "radiation", "ukr": "радіація"},

{"id": 199, "eng": "tripartile", "ukr": "трьохсторонній"},

{"id": 200, "eng": "intervene", "ukr": "вмішуватись"},

{"id": 201, "eng": "preach", "ukr": "проповідувати"},

{"id": 202, "eng": "disciple", "ukr": "учень, послідовник"},

{"id": 203, "eng": "successor", "ukr": "наступник"},

{"id": 204, "eng": "intermediary", "ukr": "посередник"},

{"id": 205, "eng": "descent", "ukr": "походження, спуск, зниження"},

{"id": 206, "eng": "jamming", "ukr": "глушення"},

{"id": 207, "eng": "squabble", "ukr": "чвари, сварка"},

{"id": 208, "eng": "feud", "ukr": "ворожнеча"},

{"id": 209, "eng": "brain", "ukr": "мозок"},

{"id": 210, "eng": "pain", "ukr": "біль"},

{"id": 211, "eng": "vigorous", "ukr": "енергійний, активний, рішучий"},

{"id": 212, "eng": "book", "ukr": "книга"},

{"id": 213, "eng": "enact", "ukr": "прийняти, ввести, видати"},

{"id": 214, "eng": "tension", "ukr": "напруження, протиріччя"},

{"id": 215, "eng": "encounter", "ukr": "зіштовхнутись, зустріч, контакт"},

{"id": 216, "eng": "tumult", "ukr": ", шум, заворушення"},

{"id": 217, "eng": "adjacent", "ukr": "сусідній, прилеглий"},

{"id": 218, "eng": "allegedly", "ukr": "наче"},

{"id": 219, "eng": "abolish", "ukr": "відмінити, ліквідувати"},

{"id": 220, "eng": "harsh", "ukr": "суворий, жорстокий"},

{"id": 221, "eng": "sentence", "ukr": "вирок, покарання, речення"},

{"id": 222, "eng": "trial", "ukr": "суд, випробування"},

{"id": 223, "eng": "resentment", "ukr": "обіда, неприязнь"},

{"id": 224, "eng": "particular", "ukr": "особливий, конкретний"},

{"id": 225, "eng": "ample", "ukr": "широкий, достатній"},

{"id": 226, "eng": "extend", "ukr": "виразити, продовжити"},

{"id": 227, "eng": "consume", "ukr": "вживати, ковтати"},

{"id": 228, "eng": "refrain", "ukr": "утриматися"},

{"id": 229, "eng": "testimony", "ukr": "свідчення, доказ"},

{"id": 230, "eng": "slander", "ukr": "наклеп"},

{"id": 231, "eng": "rot", "ukr": "гнити"},

{"id": 232, "eng": "outsmart", "ukr": "перехитрити"},

{"id": 233, "eng": "dig", "ukr": "копати"},

{"id": 234, "eng": "drugging", "ukr": "накачувати, травити"},

{"id": 235, "eng": "whack", "ukr": "вдарити, ударити"},

{"id": 236, "eng": "champ", "ukr": "плямкнути"},

{"id": 237, "eng": "hijack", "ukr": "вкрасти, захопити"},

{"id": 238, "eng": "obey", "ukr": "підкоритись, виконати, підкорятись"},

{"id": 239, "eng": "brother", "ukr": "брат"},

{"id": 240, "eng": "peel", "ukr": "кожура, чистити"},

{"id": 241, "eng": "humbag", "ukr": "нісенітниця"},

{"id": 242, "eng": "con", "ukr": "афера"},

{"id": 243, "eng": "grift", "ukr": "афера, обман"},

{"id": 244, "eng": "incline", "ukr": "нахил"},

{"id": 245, "eng": "remedy", "ukr": "виправити, вилікувати, препарат"},

{"id": 246, "eng": "main", "ukr": "головний"},

{"id": 247, "eng": "beanpole", "ukr": "каланча, соплячка"},

{"id": 248, "eng": "conscience", "ukr": "совіст, відомість"},

{"id": 249, "eng": "dame", "ukr": "дама"},

{"id": 250, "eng": "dumb", "ukr": "тупий, дурак"},

{"id": 251, "eng": "sup", "ukr": "ковток, вечеряти"},

{"id": 252, "eng": "angle", "ukr": "кут, точка, ракурс"},

{"id": 253, "eng": "mug", "ukr": "кружка, пика"},

{"id": 254, "eng": "shootout", "ukr": "перестрілка"},

{"id": 255, "eng": "puke", "ukr": "блювати, рвота, тошнота"},

{"id": 256, "eng": "gargle", "ukr": "полоскання"},

{"id": 257, "eng": "engrave", "ukr": "гравірувати, вирити"},

{"id": 258, "eng": "brat", "ukr": "дитина, нахаба"},

{"id": 259, "eng": "stiff", "ukr": "жорсткий, суворий"},

{"id": 260, "eng": "stink", "ukr": "тхнути, сморід"},

{"id": 261, "eng": "odor", "ukr": "запах, аромат"},

{"id": 262, "eng": "wrench", "ukr": "клчюч, вивернути"},

{"id": 263, "eng": "atone", "ukr": "спокутувати, загладжувати"},

{"id": 264, "eng": "swell", "ukr": "набухати"},

{"id": 265, "eng": "sedimentary", "ukr": "осадовий"},

{"id": 266, "eng": "restrain", "ukr": "стримувати"},

{"id": 267, "eng": "warp", "ukr": "деформація, викривлення"},

{"id": 268, "eng": "moderately", "ukr": "помірно"},

{"id": 269, "eng": "shatter", "ukr": "розбити, розколоти"},

{"id": 270, "eng": "sediment", "ukr": "осад, гуща"},

{"id": 271, "eng": "envisage", "ukr": "передбачувати"},

{"id": 272, "eng": "maul", "ukr": "глинистий, грунт"},

{"id": 273, "eng": "rumbler", "ukr": "гул"},

{"id": 274, "eng": "abortion", "ukr": "аборт, недоносок"},

{"id": 275, "eng": "vial", "ukr": "флакон"},

{"id": 276, "eng": "derisively", "ukr": "насмішкувато"},

{"id": 277, "eng": "jumpstart", "ukr": "поштовх"},

{"id": 278, "eng": "vicious", "ukr": "порочний"},

{"id": 279, "eng": "stew", "ukr": "рагу"},

{"id": 280, "eng": "obsess", "ukr": "одержимий"},

{"id": 281, "eng": "hunch", "ukr": "передчуття"},

{"id": 282, "eng": "rumble", "ukr": "гул, чутка"},

{"id": 283, "eng": "sturdy", "ukr": "міцний"},

{"id": 284, "eng": "carrant", "ukr": "морква"},

{"id": 285, "eng": "stiffrope", "ukr": "трос"},

{"id": 286, "eng": "dream", "ukr": "сон, мрія"},

{"id": 287, "eng": "cavern", "ukr": "печера"},

{"id": 288, "eng": "wondrous", "ukr": "дивовижний"},

{"id": 289, "eng": "wrought", "ukr": "кований"},

{"id": 290, "eng": "havoc", "ukr": "хаос, плюндрувати"},

{"id": 291, "eng": "sound", "ukr": "звук"},

{"id": 292, "eng": "landslide", "ukr": "зсув"},

{"id": 293, "eng": "beacon", "ukr": "маяк"},

{"id": 294, "eng": "deny", "ukr": "заперечити, заперечувати"},

{"id": 295, "eng": "peculiar", "ukr": "своєрідний"},

{"id": 296, "eng": "significanse", "ukr": "значення"},

{"id": 297, "eng": "transverse", "ukr": "поперечний"},

{"id": 298, "eng": "depression", "ukr": "депресія, криза, заглиблення"},

{"id": 299, "eng": "merely", "ukr": "просто"},

{"id": 300, "eng": "penetrable", "ukr": "проникливий"},

{"id": 301, "eng": "tend", "ukr": "схильний, тяжіти, намагатися"},

{"id": 302, "eng": "disinclination", "ukr": "несхильність"},

{"id": 303, "eng": "apparent", "ukr": "очевидний"},

{"id": 304, "eng": "beehive", "ukr": "вулик"},

{"id": 305, "eng": "arid", "ukr": "посушливий"},

{"id": 306, "eng": "brief", "ukr": "короткий"},

{"id": 307, "eng": "demolition", "ukr": "знесення"},

{"id": 308, "eng": "noble", "ukr": "благородний"},

{"id": 309, "eng": "exaggarate", "ukr": "перебільшення"},

{"id": 310, "eng": "procure", "ukr": "закупити"},

{"id": 311, "eng": "comprehension", "ukr": "розуміння"},

{"id": 312, "eng": "custodian", "ukr": "зберігач"},

{"id": 313, "eng": "glean", "ukr": "підбирати"},

{"id": 314, "eng": "crevise", "ukr": "щілина"},

{"id": 315, "eng": "clamour", "ukr": "крик"},

{"id": 316, "eng": "straw", "ukr": "солома"},

{"id": 317, "eng": "delusion", "ukr": "омана"},

{"id": 318, "eng": "bond", "ukr": "зв’язок"},

{"id": 319, "eng": "apart", "ukr": "окремо"},

{"id": 320, "eng": "jaw", "ukr": "щелепа"},

{"id": 321, "eng": "dash", "ukr": "мчати, спринт, панель"},

{"id": 322, "eng": "immature", "ukr": "незрілий, інфантильний"},

{"id": 323, "eng": "deliverance", "ukr": "позбавлення, звільнення, спасіння"},

{"id": 324, "eng": "mere", "ukr": "простий, всього"},

{"id": 325, "eng": "transcend", "ukr": "подолати"},

{"id": 326, "eng": "filthy", "ukr": "брудний, непристойний"},

{"id": 327, "eng": "approach", "ukr": "наблизитись, підійти, підхід"},

{"id": 328, "eng": "chaoperone", "ukr": "наглядач, покровитель"},

{"id": 329, "eng": "expire", "ukr": "закінчитися, спливати"},

{"id": 330, "eng": "guise", "ukr": "вигляд"},

{"id": 331, "eng": "virtue", "ukr": "чеснота"},

{"id": 332, "eng": "greed", "ukr": "жадібність"},

{"id": 333, "eng": "gravy", "ukr": "підлива"},

{"id": 334, "eng": "rotten", "ukr": "гнилий"},

{"id": 335, "eng": "vital", "ukr": "життєвий"},

{"id": 336, "eng": "secrecy", "ukr": "таємниця"},

{"id": 337, "eng": "waxen", "ukr": "плач"},

{"id": 338, "eng": "chore", "ukr": "рутина, обов’язок"},

{"id": 339, "eng": "carny", "ukr": "порномодель, бродячий"},

{"id": 340, "eng": "shrine", "ukr": "храм, святиня, гробниця"},

{"id": 341, "eng": "surpass", "ukr": "перевершити"},

{"id": 342, "eng": "plight", "ukr": "страждання"},

{"id": 343, "eng": "swan", "ukr": "лебідь, лебединий"},

{"id": 344, "eng": "hang", "ukr": "повісити, висіти, розвісити"},

{"id": 345, "eng": "favor", "ukr": "прихильність, блоговоління"},

{"id": 346, "eng": "imply", "ukr": "натякати"},

{"id": 347, "eng": "ascension", "ukr": "сходження"},

{"id": 348, "eng": "seize", "ukr": "захопити, зловити"},

{"id": 349, "eng": "delight", "ukr": "захват, захоплення"},

{"id": 350, "eng": "crook", "ukr": "шахрай"},

{"id": 351, "eng": "revive", "ukr": "відродити"},

{"id": 352, "eng": "mess", "ukr": "безлад, бардах, хаос"},

{"id": 353, "eng": "stash", "ukr": "сховок"},

{"id": 354, "eng": "mull", "ukr": "роздумувати"},

{"id": 355, "eng": "sink", "ukr": "раковина, тонути, зливник"},

{"id": 356, "eng": "ape", "ukr": "мавпа, мавпувати"},

{"id": 357, "eng": "eventually", "ukr": "зрештою"},

{"id": 358, "eng": "devastate", "ukr": "розоряти, страчувати"},

{"id": 359, "eng": "foe", "ukr": "ворог"},

{"id": 360, "eng": "cap", "ukr": "шапка, картуз"},

{"id": 361, "eng": "provide", "ukr": "надати, забезпечувати"},

{"id": 362, "eng": "limbo", "ukr": "в’язниця"},

{"id": 363, "eng": "slam", "ukr": "грюкнути"},

{"id": 364, "eng": "snatch", "ukr": "вирвати, вкрасти"},

{"id": 365, "eng": "grid", "ukr": "сітка, решітка"},

{"id": 366, "eng": "gut", "ukr": "пузо, кишки, потрошити"},

{"id": 367, "eng": "bare", "ukr": "голий, бідний, викритий"},

{"id": 368, "eng": "modest", "ukr": "допробристойний, скромний"},

{"id": 369, "eng": "shell", "ukr": "оболонка, панцир"},

{"id": 370, "eng": "particular", "ukr": "особливий, подробиця"},

{"id": 371, "eng": "grudge", "ukr": "образа"},

{"id": 372, "eng": "effigy", "ukr": "опудало"},

{"id": 373, "eng": "badge", "ukr": "значок, бляха"},

{"id": 374, "eng": "caterpillar", "ukr": "гусениця"},

{"id": 375, "eng": "spin", "ukr": "прясти, крутити"},

{"id": 376, "eng": "split", "ukr": "розкол, поділений, розколювати"},

{"id": 377, "eng": "piecemeal", "ukr": "поштучно"},

{"id": 378, "eng": "outright", "ukr": "відверто, відвертий"},

{"id": 379, "eng": "syringe", "ukr": "шприц, спринцівка"},

{"id": 380, "eng": "assemble", "ukr": "зібрати, монтувати"},

{"id": 381, "eng": "snap", "ukr": "оснастка"},

{"id": 382, "eng": "bang", "ukr": "вибух"},

{"id": 383, "eng": "observer", "ukr": "спостерігач"},

{"id": 384, "eng": "further", "ukr": "далі, дальший"},

{"id": 385, "eng": "barbarian", "ukr": "варвар"},

{"id": 386, "eng": "ignorant", "ukr": "невіглас"},

{"id": 387, "eng": "spare", "ukr": "щадити, запасний"},

{"id": 388, "eng": "feeble", "ukr": "слабкий, нездольний"},

{"id": 389, "eng": "ruse", "ukr": "хитрість, обман"},

{"id": 390, "eng": "relent", "ukr": "змиритись"},

{"id": 391, "eng": "relentess", "ukr": "невблаганний, безжалісний"},

{"id": 392, "eng": "shamble", "ukr": "зруйнувати"},

{"id": 393, "eng": "cling", "ukr": "чіплятися"},

{"id": 394, "eng": "rivet", "ukr": "заклепка"},

{"id": 395, "eng": "reckon", "ukr": "розраховувати"},

{"id": 396, "eng": "tuck", "ukr": "засовувати, підвернути"},

{"id": 397, "eng": "shopfront", "ukr": "вітрина"},

{"id": 398, "eng": "gamble", "ukr": "авантюра"},

{"id": 399, "eng": "gather", "ukr": "збір, збирати"},

{"id": 400, "eng": "wale", "ukr": "слуга, рубець"},

{"id": 401, "eng": "astray", "ukr": "заблукати"},

{"id": 402, "eng": "flicker", "ukr": "мерехтіння"},

{"id": 403, "eng": "notion", "ukr": "поняття, уявлення"},

{"id": 404, "eng": "madden", "ukr": "бісити"},

{"id": 405, "eng": "tempt", "ukr": "схиляти, вмовляти"},

{"id": 406, "eng": "gaze", "ukr": "погляд"},

{"id": 407, "eng": "flock", "ukr": "череда, зграя, отара"},

{"id": 408, "eng": "servant", "ukr": "слуга, прислуга"},

{"id": 409, "eng": "smite", "ukr": "удар"},

{"id": 410, "eng": "strike", "ukr": "удар, бій"},

{"id": 411, "eng": "kink", "ukr": "петля, узол"},

{"id": 412, "eng": "scretch", "ukr": "подряпина"},

{"id": 413, "eng": "fit", "ukr": "припасувати, приладити"},

{"id": 414, "eng": "gander", "ukr": "гусак, дурень, простак"},

{"id": 415, "eng": "womb", "ukr": "матка"},

{"id": 416, "eng": "sap", "ukr": "сік, енергія, сила"},

{"id": 417, "eng": "kinky", "ukr": "кучерявий"},

{"id": 418, "eng": "avenger", "ukr": "месник"},

{"id": 419, "eng": "vigorous", "ukr": "сильний, бадьорий"},

{"id": 420, "eng": "marthyrdom", "ukr": "мучинецтво"},

{"id": 421, "eng": "roast", "ukr": "печеня"},

{"id": 422, "eng": "black", "ukr": "чорний"},

{"id": 423, "eng": "bump", "ukr": "удар, зіткнення"},

{"id": 424, "eng": "bruise", "ukr": "синець"},

{"id": 425, "eng": "accomplish", "ukr": "виконувати, домагатися"},

{"id": 426, "eng": "white", "ukr": "білий"},

{"id": 427, "eng": "induce", "ukr": "спонукати, схиляти, впливати"},

{"id": 428, "eng": "signature", "ukr": "підпис"},

{"id": 429, "eng": "staggeringly", "ukr": "приголомшливо"},

{"id": 430, "eng": "flux", "ukr": "течія, потік"},

{"id": 431, "eng": "vessel", "ukr": "посудина"},

{"id": 432, "eng": "precede", "ukr": "передувати"},

{"id": 433, "eng": "elaborate", "ukr": "ретельно"},

{"id": 434, "eng": "mumble", "ukr": "бурмотіння"},

{"id": 435, "eng": "wreckage", "ukr": "уламки"},

{"id": 436, "eng": "orange", "ukr": "помаранчевий"},

{"id": 437, "eng": "indivisible", "ukr": "неподільний"},

{"id": 438, "eng": "define", "ukr": "визначати"},

{"id": 439, "eng": "poverty", "ukr": "бідність"},

{"id": 440, "eng": "testament", "ukr": "заповіт"},

{"id": 441, "eng": "hombre", "ukr": "людина, хлопець, тип"},

{"id": 442, "eng": "divert", "ukr": "відхиляти, відводити"},

{"id": 443, "eng": "commit", "ukr": "робити, здійснювати"},

{"id": 444, "eng": "howl", "ukr": "виття"},

{"id": 445, "eng": "brutish", "ukr": "звірячий, жорстокий"},

{"id": 446, "eng": "slog", "ukr": "удар"},

{"id": 447, "eng": "drain", "ukr": "витік, відтік"},

{"id": 448, "eng": "infiltration", "ukr": "фільтрація"},

{"id": 449, "eng": "retreat", "ukr": "відхід, відступ"},

{"id": 450, "eng": "mock", "ukr": "осміяння, глузування"},

{"id": 451, "eng": "helluva", "ukr": "страшенний, жахливий, надзвичайний"},

{"id": 452, "eng": "flaw", "ukr": "тріщина, дефект"},

{"id": 453, "eng": "clumsy", "ukr": "незграбний, неповороткий"},

{"id": 454, "eng": "rid", "ukr": "звільняти, рятувати"},

{"id": 455, "eng": "goon", "ukr": "дурень, бандит, хуліган"},

{"id": 456, "eng": "sweat", "ukr": "піт, труднощі"},

{"id": 457, "eng": "phoney", "ukr": "підробка, обман"},

{"id": 458, "eng": "gut", "ukr": "мужність"},

{"id": 459, "eng": "whoopee", "ukr": "зойк, бенкет, пиятика"},

{"id": 460, "eng": "deterrent", "ukr": "утримуючий, стримуючий"},

{"id": 461, "eng": "coil", "ukr": "виток, котушка"},

{"id": 462, "eng": "secular", "ukr": "світський"},

{"id": 463, "eng": "beneath", "ukr": "під, унизу, нижче"},

{"id": 464, "eng": "incarcerate", "ukr": "ув’язнювати"},

{"id": 465, "eng": "detain", "ukr": "затримувати, перешкоджати"},

{"id": 466, "eng": "crucify", "ukr": "розпинати, умертвляти"},

{"id": 467, "eng": "patter", "ukr": "стукіт, тарабанити, стукати"},

{"id": 468, "eng": "spark", "ukr": "іскра"},

{"id": 469, "eng": "rear", "ukr": "тил, зад"},

{"id": 470, "eng": "sneak", "ukr": "боягуз, негідник"},

{"id": 471, "eng": "regimen", "ukr": "режим, дієта"},

{"id": 472, "eng": "immeasurable", "ukr": "безмірний, невимірний"},

{"id": 473, "eng": "vanish", "ukr": "усувати, зникати, видаляти"},

{"id": 474, "eng": "barely", "ukr": "ледь, ледве"},

{"id": 475, "eng": "ramble", "ukr": "прогулянка, гуляти"},

{"id": 476, "eng": "stubborn", "ukr": "упертий, завзятий, важкий"},

{"id": 477, "eng": "hint", "ukr": "натяк"},

{"id": 478, "eng": "riot", "ukr": "заколот, безлад"},

{"id": 479, "eng": "subside", "ukr": "падати, ущухати"},

{"id": 480, "eng": "admit", "ukr": "визнавати"},

{"id": 481, "eng": "gratify", "ukr": "задовільняти"},

{"id": 482, "eng": "condemn", "ukr": "засуджувати, конфісковувати, конфіскувати"},

{"id": 483, "eng": "sane", "ukr": "нормальний, здоровий"},

{"id": 484, "eng": "fruit", "ukr": "фрукт"},

{"id": 485, "eng": "penetrate", "ukr": "проникати, просочуватись"},

{"id": 486, "eng": "likeness", "ukr": "схожість, образ, портрет"},

{"id": 487, "eng": "fumble", "ukr": "шарити"},

{"id": 488, "eng": "amorous", "ukr": "любовний, закоханий"},

{"id": 489, "eng": "wit", "ukr": "дотеп"},

{"id": 490, "eng": "botch", "ukr": "псувати"},

{"id": 491, "eng": "fancy", "ukr": "уява, смак, модний"},

{"id": 492, "eng": "rehabilitate", "ukr": "реабілітувати"},

{"id": 493, "eng": "compulsive", "ukr": "потяг"},

{"id": 494, "eng": "adjast", "ukr": "пристосовувати"},

{"id": 495, "eng": "amend", "ukr": "виправляти"},

{"id": 496, "eng": "frank", "ukr": "відвертий, очевидний"},

{"id": 497, "eng": "scarcely", "ukr": "ледь"},

{"id": 498, "eng": "chart", "ukr": "планувати"},

{"id": 499, "eng": "consciousness", "ukr": "свідомість, совість"},

{"id": 500, "eng": "rival", "ukr": "суперник"},

{"id": 501, "eng": "assume", "ukr": "приймати, брати, припускати"},

{"id": 502, "eng": "lure", "ukr": "спокуса, спокушати"},

{"id": 503, "eng": "retrieve", "ukr": "вилучити, вилучати"},

{"id": 504, "eng": "suppress", "ukr": "придушувати, стримувати"},

{"id": 505, "eng": "urge", "ukr": "спонукати, спонукання, змушувати"},

{"id": 506, "eng": "elude", "ukr": "уникати, вислизати"},

{"id": 507, "eng": "confess", "ukr": "визнавати, сповідатися"},

{"id": 508, "eng": "appointment", "ukr": "призначення, зустріч"},

{"id": 509, "eng": "will", "ukr": "воля, бажання"},

{"id": 510, "eng": "persist", "ukr": "наполягати"},

{"id": 511, "eng": "bit", "ukr": "шматок, бур"},

{"id": 512, "eng": "trauma", "ukr": "травма"},

{"id": 513, "eng": "harness", "ukr": "приборкувати"},

{"id": 514, "eng": "disposal", "ukr": "передача, видалення, розташування"},

{"id": 515, "eng": "jolt", "ukr": "поштофх, тряска, удар"},

{"id": 516, "eng": "dissuade", "ukr": "відрадити"},

{"id": 517, "eng": "overcome", "ukr": "здолати"},

{"id": 518, "eng": "pity", "ukr": "жаль"},

{"id": 519, "eng": "disguise", "ukr": "маскування"},

{"id": 520, "eng": "dice", "ukr": "кості"},

{"id": 521, "eng": "inmate", "ukr": "жилець, ув’язнений"},

{"id": 522, "eng": "envy", "ukr": "заздрість, заздрити"},

{"id": 523, "eng": "sever", "ukr": "розірвати"},

{"id": 524, "eng": "constantly", "ukr": "постійно"},

{"id": 525, "eng": "purpose", "ukr": "мета, призначення, намір"},

{"id": 526, "eng": "oust", "ukr": "витісняти, витіснити, виселяти"},

{"id": 527, "eng": "boot", "ukr": "вигода"},

{"id": 528, "eng": "fiefdom", "ukr": "вотчина"},

{"id": 529, "eng": "qualm", "ukr": "занепокоення"},

{"id": 530, "eng": "glimpse", "ukr": "погляд, глянути"},

{"id": 531, "eng": "unerringly", "ukr": "безпомилково"},

{"id": 532, "eng": "warden", "ukr": "вартовий"},

{"id": 533, "eng": "intent", "ukr": "наміри"},

{"id": 534, "eng": "glow", "ukr": "світіння, відбити"},

{"id": 535, "eng": "grasp", "ukr": "зрозуміти, захопити"},

{"id": 536, "eng": "ward", "ukr": "палата"},

{"id": 537, "eng": "rosy", "ukr": "рожевий, радісний"},

{"id": 538, "eng": "perdition", "ukr": "загибель"},

{"id": 539, "eng": "greedy", "ukr": "жадібний"},

{"id": 540, "eng": "compound", "ukr": "складний"},

{"id": 541, "eng": "heed", "ukr": "уважно, дбайливість"},

{"id": 542, "eng": "stock", "ukr": "запас"},

{"id": 543, "eng": "eventually", "ukr": "зрештою"},

{"id": 544, "eng": "wager", "ukr": "ставка, заклад"},

{"id": 545, "eng": "grind", "ukr": "подрібнити"},

{"id": 546, "eng": "halt", "ukr": "зупинка"},

{"id": 547, "eng": "exposure", "ukr": "контакт"},

{"id": 548, "eng": "deteriorate", "ukr": "погіршуватися"},

{"id": 549, "eng": "predatory", "ukr": "хижий"},

{"id": 550, "eng": "prediction", "ukr": "передбачення"},

{"id": 551, "eng": "clear", "ukr": "очистити"},

{"id": 552, "eng": "newspaper", "ukr": "газета"},

{"id": 553, "eng": "house", "ukr": "дім, хата, хатина"},

{"id": 554, "eng": "village", "ukr": "село, селище"},

{"id": 555, "eng": "town", "ukr": "місто"},

{"id": 556, "eng": "city", "ukr": "місто"},

{"id": 557, "eng": "country", "ukr": "країна, держава"},

{"id": 558, "eng": "state", "ukr": "країна, держава"},

{"id": 559, "eng": "territory", "ukr": "територія"},

{"id": 560, "eng": "capital", "ukr": "столиця"},

{"id": 561, "eng": "toss", "ukr": "кидати, закидати"},

{"id": 562, "eng": "suction", "ukr": "всмоктування"},

{"id": 563, "eng": "disrupt", "ukr": "порушувати"},

{"id": 564, "eng": "den", "ukr": "барліг"},

{"id": 565, "eng": "nutcase", "ukr": "псих"},

{"id": 566, "eng": "vie", "ukr": "змагатися"},

{"id": 567, "eng": "contraption", "ukr": "хитрість"},

{"id": 568, "eng": "crunch", "ukr": "хрускіт, хрумкати, перелом"},

{"id": 569, "eng": "dissolution", "ukr": "розчинення"},

{"id": 570, "eng": "hoodlum", "ukr": "хуліган"},

{"id": 571, "eng": "marvel", "ukr": "диво"},

{"id": 572, "eng": "obsolete", "ukr": "застарілий, стертий"},

{"id": 573, "eng": "socket", "ukr": "розетка, муфта"},

{"id": 574, "eng": "heap", "ukr": "купа"},

{"id": 575, "eng": "cast", "ukr": "кидок, шанс, підрахунок"},

{"id": 576, "eng": "swear", "ukr": "клятва, лайка"},

{"id": 577, "eng": "treason", "ukr": "зрада"},

{"id": 578, "eng": "ensure", "ukr": "гарантувати, страхувати"},

{"id": 579, "eng": "exceed", "ukr": "перевищувати, перевершувати"},

{"id": 580, "eng": "compel", "ukr": "змушувати, підкорити"},

{"id": 581, "eng": "pang", "ukr": "біль, муки"},

{"id": 582, "eng": "sting", "ukr": "жало, укус, жалити"},

{"id": 583, "eng": "booth", "ukr": "кіоск"},

{"id": 584, "eng": "hereby", "ukr": "поблизу, так"},

{"id": 585, "eng": "extend", "ukr": "простягати, продовжити"},

{"id": 586, "eng": "heartfelt", "ukr": "щирий"},

{"id": 587, "eng": "sequance", "ukr": "послідовність, наслідок"},

{"id": 588, "eng": "row", "ukr": "гребля, веслування"},

{"id": 589, "eng": "strand", "ukr": "берег"},

{"id": 590, "eng": "wipe", "ukr": "витирати"},

{"id": 591, "eng": "debt", "ukr": "борг, гріх"},

{"id": 592, "eng": "basin", "ukr": "мишка, басейн, резервуар"},

{"id": 593, "eng": "jar", "ukr": "глечик, банка, сварка"},

{"id": 594, "eng": "pickle", "ukr": "розсіл, солити"},

{"id": 595, "eng": "cereal", "ukr": "злак"},

{"id": 596, "eng": "condense", "ukr": "конденсувати"},

{"id": 597, "eng": "gulf", "ukr": "бухта, затока"},

{"id": 598, "eng": "thine", "ukr": "твій, твоя, твоє"},

{"id": 599, "eng": "thee", "ukr": "тебе, тобі, тобою"},

{"id": 600, "eng": "fancce", "ukr": "фантазія, химерний, модний"},

{"id": 601, "eng": "ascension", "ukr": "сходження, підйом, вознесіння"},

{"id": 602, "eng": "redeemer", "ukr": "рятівник"},

{"id": 603, "eng": "grace", "ukr": "грація"},

{"id": 604, "eng": "recommit", "ukr": "повернути"},

{"id": 605, "eng": "submerge", "ukr": "затьмарювати"},

{"id": 606, "eng": "stricken", "ukr": "уражений"},

{"id": 607, "eng": "rail", "ukr": "огорожа"},

{"id": 608, "eng": "deliverance", "ukr": "звільнення"},

{"id": 609, "eng": "purge", "ukr": "очищення, очищати"},

{"id": 610, "eng": "viper", "ukr": "гадюка"},

{"id": 611, "eng": "cleanse", "ukr": "очищати"},

{"id": 612, "eng": "bosom", "ukr": "душа, лоно, надра"},

{"id": 613, "eng": "paragon", "ukr": "зразок"},

{"id": 614, "eng": "discern", "ukr": "розгледіти, бачити, помітити"},

{"id": 615, "eng": "savage", "ukr": "дикун, варвар"},

{"id": 616, "eng": "dimwit", "ukr": "ідіот, йолуп"},

{"id": 617, "eng": "exceedingly", "ukr": "надзвичайно, дуже, вкрай"},

{"id": 618, "eng": "marigold", "ukr": "нагідки, чорнобривці"},

{"id": 619, "eng": "hint", "ukr": "натяк"},

{"id": 620, "eng": "foresee", "ukr": "передбачати"},

{"id": 621, "eng": "game", "ukr": "гра"},

{"id": 622, "eng": "astray", "ukr": "блукати"},

{"id": 623, "eng": "confectionary", "ukr": "цукерня"},

{"id": 624, "eng": "shepherd", "ukr": "вівчар"},

{"id": 625, "eng": "lapel", "ukr": "одворот"},

{"id": 626, "eng": "reveal", "ukr": "відкриття, откровення"},

{"id": 627, "eng": "vigilanse", "ukr": "пильність"},

{"id": 628, "eng": "deterrent", "ukr": "утримуючий"},

{"id": 629, "eng": "courtesy", "ukr": "вічливість"},

{"id": 630, "eng": "swig", "ukr": "ковток"},

{"id": 631, "eng": "wonderment", "ukr": "подив"},

{"id": 632, "eng": "vigour", "ukr": "сила, міць"},

{"id": 633, "eng": "hoist", "ukr": "підняти, підйом"},

{"id": 634, "eng": "envy", "ukr": "заздрість, заздрити"},

{"id": 635, "eng": "peer", "ukr": "рівня"},

{"id": 636, "eng": "possession", "ukr": "володіння, майно"},

{"id": 637, "eng": "stallion", "ukr": "жеребець"},

{"id": 638, "eng": "lift", "ukr": "підйом"},

{"id": 639, "eng": "loft", "ukr": "горище"},

{"id": 640, "eng": "toss", "ukr": "кидок, метання, кинути"},

{"id": 641, "eng": "vile", "ukr": "підлий"},

{"id": 642, "eng": "slain", "ukr": "вбитий, убитий"},

{"id": 643, "eng": "spouse", "ukr": "чоловік, дружина"},

{"id": 644, "eng": "flavour", "ukr": "аромат"},

{"id": 645, "eng": "vice", "ukr": "недолік, порок"},

{"id": 646, "eng": "evade", "ukr": "вислизнути, уникати, уникнути"},

{"id": 647, "eng": "bother", "ukr": "занепокоєння"},

{"id": 648, "eng": "apostate", "ukr": "відступник"},

{"id": 649, "eng": "wrath", "ukr": "гнів, лють"},

{"id": 650, "eng": "bent", "ukr": "схильність, потяг"},

{"id": 651, "eng": "maliciously", "ukr": "злобно"},

{"id": 652, "eng": "brim", "ukr": "край"},

{"id": 653, "eng": "ablaze", "ukr": "палаючий"},

{"id": 654, "eng": "squint", "ukr": "косоокість"},

{"id": 655, "eng": "repent", "ukr": "шкодувати"},

{"id": 656, "eng": "misogyny", "ukr": "жінконенависництво"},

{"id": 657, "eng": "hence", "ukr": "віднині"},

{"id": 658, "eng": "content", "ukr": "задоволений, зміст"},

{"id": 659, "eng": "wit", "ukr": "розум"},

{"id": 660, "eng": "specimen", "ukr": "екземпляр"},

{"id": 661, "eng": "fuse", "ukr": "запобіжник"},

{"id": 662, "eng": "mantle", "ukr": "мантія"},

{"id": 663, "eng": "tumour", "ukr": "пухлина"},

{"id": 664, "eng": "deception", "ukr": "обман, хитрість"},

{"id": 665, "eng": "rigged", "ukr": "сфальсифікований"},

{"id": 666, "eng": "trunks", "ukr": "труси"},

{"id": 667, "eng": "sore", "ukr": "болячка"},

{"id": 668, "eng": "expense", "ukr": "витрата, ціна"},

{"id": 669, "eng": "bunch", "ukr": "пучок"},

{"id": 670, "eng": "soulful", "ukr": "щирий"},

{"id": 671, "eng": "radon", "ukr": "радон"},

{"id": 672, "eng": "herd", "ukr": "стадо"},

{"id": 673, "eng": "county", "ukr": "графство"},

{"id": 674, "eng": "stash", "ukr": "схованка"},

{"id": 675, "eng": "deputy", "ukr": "представник, заступник"},

{"id": 676, "eng": "via", "ukr": "через"},

{"id": 677, "eng": "interfere", "ukr": "перешкоджати"},

{"id": 678, "eng": "piggy", "ukr": "порося, свинка"},

{"id": 679, "eng": "numb", "ukr": "онімілий"},

{"id": 680, "eng": "bunch", "ukr": "пучок"},

{"id": 681, "eng": "cull", "ukr": "відбирати, збирати"},

{"id": 682, "eng": "herd", "ukr": "стадо, череда"},

{"id": 683, "eng": "sober", "ukr": "тверезий"},

{"id": 684, "eng": "earpiece", "ukr": "навушник"},

{"id": 685, "eng": "resolve", "ukr": "рішення, намір"},

{"id": 686, "eng": "infliction", "ukr": "завдання, злодіяння"},

{"id": 687, "eng": "resolver", "ukr": "револьвер"},

{"id": 688, "eng": "velocity", "ukr": "швидкість"},

{"id": 689, "eng": "workbench", "ukr": "верстак"},

{"id": 690, "eng": "smooth", "ukr": "гладкий"},

{"id": 691, "eng": "utmost", "ukr": "найбільше"},

{"id": 692, "eng": "treat", "ukr": "задоволеня, насолода"},

{"id": 693, "eng": "grid", "ukr": "сітка, старт"},

{"id": 694, "eng": "durable", "ukr": "міцний, надійний"},

{"id": 695, "eng": "hotbed", "ukr": "парник, розсадник"},

{"id": 696, "eng": "sentinel", "ukr": "вартовий"},

{"id": 697, "eng": "wield", "ukr": "володіти"},

{"id": 698, "eng": "soothe", "ukr": "заспокоювати, умиротворяти"},

{"id": 699, "eng": "skiff", "ukr": "човен"},

{"id": 700, "eng": "grip", "ukr": "хватка, стиснення"},

{"id": 701, "eng": "depot", "ukr": "склад, сховище"},

{"id": 702, "eng": "trunk", "ukr": "стовбур"},

{"id": 703, "eng": "hog", "ukr": "свиня, кабан"},

{"id": 704, "eng": "chart", "ukr": "карта"},

{"id": 705, "eng": "breach", "ukr": "пробоїна, пролом"},

{"id": 706, "eng": "severe", "ukr": "суворий"},

{"id": 707, "eng": "ferocity", "ukr": "жорстокість, дикість"},

{"id": 708, "eng": "intermingle", "ukr": "змішувати"},

{"id": 709, "eng": "grace", "ukr": "грація, витонченість"},

{"id": 710, "eng": "evasive", "ukr": "ухильний"},

{"id": 711, "eng": "scout", "ukr": "розвідник"},

{"id": 712, "eng": "kin", "ukr": "рід, рідня"},

{"id": 713, "eng": "guerrilla", "ukr": "партизан"},

{"id": 714, "eng": "outcast", "ukr": "вигнанець"},

{"id": 715, "eng": "deploy", "ukr": "розгортати"},

{"id": 716, "eng": "recon", "ukr": "розвідка"},

{"id": 717, "eng": "nap", "ukr": "дрімота"},

{"id": 718, "eng": "apprentice", "ukr": "учень, підмайстер"},

{"id": 719, "eng": "engage", "ukr": "наймати"},

{"id": 720, "eng": "shed", "ukr": "навіс, сарай"},

{"id": 721, "eng": "torment", "ukr": "мука, муки"},

{"id": 722, "eng": "stilt", "ukr": "ходулі"},

{"id": 723, "eng": "nemesis", "ukr": "ворог"},

{"id": 724, "eng": "slip", "ukr": "ковзання"},

{"id": 725, "eng": "worth", "ukr": "вартий"},

{"id": 726, "eng": "precision", "ukr": "точність"},

{"id": 727, "eng": "allot", "ukr": "виділяти"},

{"id": 728, "eng": "slit", "ukr": "щілина, розріз"},

{"id": 729, "eng": "feast", "ukr": "банкет, свято"},

{"id": 730, "eng": "impair", "ukr": "послаблювати"},

{"id": 731, "eng": "scavenge", "ukr": "очищати"},

{"id": 732, "eng": "recoil", "ukr": "віддача"},

{"id": 733, "eng": "posterity", "ukr": "потомство"},

{"id": 734, "eng": "demand", "ukr": "вимога"},

{"id": 735, "eng": "oddity", "ukr": "дивина"},

{"id": 736, "eng": "detail", "ukr": "деталь, подробиця"},

{"id": 737, "eng": "perseverance", "ukr": "завзятість"},

{"id": 738, "eng": "creep", "ukr": "здригання, мурашки"},

{"id": 739, "eng": "clout", "ukr": "удар, ляпас"},

{"id": 740, "eng": "intimidate", "ukr": ", залякувати"},

{"id": 741, "eng": "spur", "ukr": "шпора"},

{"id": 742, "eng": "replenish", "ukr": "заправити, підкинути"},

{"id": 743, "eng": "cenote", "ukr": "сенат"},

{"id": 744, "eng": "cramp", "ukr": "судоми"},

{"id": 745, "eng": "sob", "ukr": "ридання, схлипування"},

{"id": 746, "eng": "spite", "ukr": "злоба, ворожість"},

{"id": 747, "eng": "treat", "ukr": "насолода, обходитися"},

{"id": 748, "eng": "durable", "ukr": "міцний, надійний"},

{"id": 749, "eng": "forger", "ukr": "підроблювач"},

{"id": 750, "eng": "mutually", "ukr": "взаемно"},

{"id": 751, "eng": "beneficial", "ukr": "корисний"},

{"id": 752, "eng": "admiration", "ukr": "захоплення"},

{"id": 753, "eng": "unsubstantial", "ukr": "неістотний"},

{"id": 754, "eng": "remuneration", "ukr": "винагорода"},

{"id": 755, "eng": "disgruntled", "ukr": "неводоволений"},

{"id": 756, "eng": "compel", "ukr": "змушувати"},

{"id": 757, "eng": "tilt", "ukr": "нахил"},

{"id": 758, "eng": "underestimate", "ukr": "недооцінити, недооцінювати"},

{"id": 759, "eng": "estimate", "ukr": "оцінка, оцінити, оцінювати"},

{"id": 760, "eng": "feature", "ukr": "ознака, властивість"},

{"id": 761, "eng": "hourglass", "ukr": "годинник"},

{"id": 762, "eng": "dexterity", "ukr": "спритність"},

{"id": 763, "eng": "bid", "ukr": "наказувати"},

{"id": 764, "eng": "gull", "ukr": "чайка"},

{"id": 765, "eng": "repuulsive", "ukr": "відразливий"},

{"id": 766, "eng": "offspring", "ukr": "нащадок"},

{"id": 767, "eng": "foul", "ukr": "брудний"},

{"id": 768, "eng": "sorcery", "ukr": "чаклунство"},

{"id": 769, "eng": "decent", "ukr": "пристойний"},

{"id": 770, "eng": "excessive", "ukr": "надмірний"},

{"id": 771, "eng": "mage", "ukr": "маг"},

{"id": 772, "eng": "attain", "ukr": "досягати"},

{"id": 773, "eng": "salvage", "ukr": "порятунок"},

{"id": 774, "eng": "mob", "ukr": "натовп"},

{"id": 775, "eng": "robust", "ukr": "здоровий, міцний"},

{"id": 776, "eng": "fencer", "ukr": "фехтувальник"},

{"id": 777, "eng": "hasty", "ukr": "поспішний"},

{"id": 778, "eng": "rude", "ukr": "грубий"},

{"id": 779, "eng": "moat", "ukr": "рів"},

{"id": 780, "eng": "gruesome", "ukr": "жахливий"},

{"id": 781, "eng": "occurrence", "ukr": "випадок, частотність"},

{"id": 782, "eng": "susceptibility", "ukr": "вразливість"},

{"id": 783, "eng": "diligent", "ukr": "старанний"},

{"id": 784, "eng": "supervisor", "ukr": "наглядач"},

{"id": 785, "eng": "invariably", "ukr": "постійно"},

{"id": 786, "eng": "slobber", "ukr": "слина"},

{"id": 787, "eng": "outskirts", "ukr": "околиці"},

{"id": 788, "eng": "inn", "ukr": "трактир"},

{"id": 789, "eng": "gloom", "ukr": "темрява"},

{"id": 790, "eng": "breed", "ukr": "порода"},

{"id": 791, "eng": "reverend", "ukr": "священник"},

{"id": 792, "eng": "dispel", "ukr": "розганяти"},

{"id": 793, "eng": "burnt", "ukr": "згорілий"},

{"id": 794, "eng": "pin", "ukr": "шпилька"},

{"id": 795, "eng": "audacity", "ukr": "сміливість"},

{"id": 796, "eng": "hem", "ukr": "облямівка"},

{"id": 797, "eng": "headquarter", "ukr": "штаб"},

{"id": 798, "eng": "stench", "ukr": "сморід"},

{"id": 799, "eng": "vomit", "ukr": "блювота, блювати"},

{"id": 800, "eng": "mucus", "ukr": "слиз"},

{"id": 801, "eng": "harbinger", "ukr": "провісник"},

{"id": 802, "eng": "halt", "ukr": "зупинка, зупинятись"},

{"id": 803, "eng": "foster", "ukr": "виховувати"},

{"id": 804, "eng": "vex", "ukr": "дратувати"},

{"id": 805, "eng": "barmade", "ukr": "офіціант"},

{"id": 806, "eng": "surrender", "ukr": "капітуляція, здача"},

{"id": 807, "eng": "vile", "ukr": "підлий"},

{"id": 808, "eng": "presume", "ukr": "думати, припускати"},

{"id": 809, "eng": "crate", "ukr": "кошик"},

{"id": 810, "eng": "detest", "ukr": "ненавидіти"},

{"id": 811, "eng": "exguisite", "ukr": "витончений"},

{"id": 812, "eng": "sneer", "ukr": "глумливо"},

{"id": 813, "eng": "thug", "ukr": "вбивця, бандит"},

{"id": 814, "eng": "stray", "ukr": "блукати"},

{"id": 815, "eng": "grim", "ukr": "жорстокий"},

{"id": 816, "eng": "distrustful", "ukr": "підозрілий"},

{"id": 817, "eng": "stingy", "ukr": "скупий, жалкий"},

{"id": 818, "eng": "slit", "ukr": "розрізати"},

{"id": 819, "eng": "fulfil", "ukr": "виконувати"},

{"id": 820, "eng": "neat", "ukr": "чистий, охайний"},

{"id": 821, "eng": "spell", "ukr": "закляття, заклинання, зачаровувати"},

{"id": 822, "eng": "spectre", "ukr": "примара, привид"},

{"id": 823, "eng": "cellar", "ukr": "підвал"},

{"id": 824, "eng": "fact", "ukr": "факт"},

{"id": 825, "eng": "serve", "ukr": "служити, подавати"},

{"id": 826, "eng": "wall", "ukr": "стіна"},

{"id": 827, "eng": "door", "ukr": "двері"},

{"id": 828, "eng": "paper", "ukr": "папір"},

{"id": 829, "eng": "pen", "ukr": "ручка"},

{"id": 830, "eng": "jew", "ukr": "єврей"},

{"id": 831, "eng": "jewish", "ukr": "єврейський"},

{"id": 832, "eng": "cut", "ukr": "різати, розріз, поріз"},

{"id": 833, "eng": "legend", "ukr": "легенда"},

{"id": 834, "eng": "map", "ukr": "карта"},

{"id": 835, "eng": "big", "ukr": "великий"},

{"id": 836, "eng": "color", "ukr": "колір"},

{"id": 837, "eng": "other", "ukr": "інший"},

{"id": 838, "eng": "not", "ukr": "ні"},

{"id": 839, "eng": "this", "ukr": "цей, ця, це"},

{"id": 840, "eng": "product", "ukr": "продукт"},

{"id": 841, "eng": "soy", "ukr": "соя"},

{"id": 842, "eng": "toy", "ukr": "іграшка, гра"},

{"id": 843, "eng": "joy", "ukr": "задоволення, веселощі"},

{"id": 844, "eng": "capsule", "ukr": "капсула"},

{"id": 845, "eng": "bottle", "ukr": "пляшка"},

{"id": 846, "eng": "gold", "ukr": "золотий"},

{"id": 847, "eng": "free", "ukr": "вільний, безкоштовний"},

{"id": 848, "eng": "take", "ukr": "взяти, брати"},

{"id": 849, "eng": "grudge", "ukr": "невдоволення"},

{"id": 850, "eng": "food", "ukr": "їжа"},

{"id": 851, "eng": "tend", "ukr": "займатися"},

{"id": 852, "eng": "sewer", "ukr": "колектор"},

{"id": 853, "eng": "creep", "ukr": "покидьок, злодій, зануда"},

{"id": 854, "eng": "belonging", "ukr": "ручі, пожитки"},

{"id": 855, "eng": "belong", "ukr": "належати"},

{"id": 856, "eng": "swamp", "ukr": "болото"},

{"id": 857, "eng": "gloomy", "ukr": "похмурий, темний"},

{"id": 858, "eng": "bouncer", "ukr": "хвалько, викидайло"},

{"id": 859, "eng": "dike", "ukr": "дамба"},

{"id": 860, "eng": "flint", "ukr": "кремінь"},

{"id": 861, "eng": "gratitude", "ukr": "вдячність"},

{"id": 862, "eng": "humble", "ukr": "скромний"},

{"id": 863, "eng": "gratitude", "ukr": "вдячність"},

{"id": 864, "eng": "hesitate", "ukr": "вагатися"},

{"id": 865, "eng": "stake", "ukr": "жердина"},

{"id": 866, "eng": "lit", "ukr": "п’яний"},

{"id": 867, "eng": "sizzle", "ukr": "шипіння"},

{"id": 868, "eng": "venture", "ukr": "авантюра"},

{"id": 869, "eng": "cub", "ukr": "дитина"},

{"id": 870, "eng": "despise", "ukr": "нехтувати"},

{"id": 871, "eng": "slum", "ukr": "нетрі"},

{"id": 872, "eng": "touchy", "ukr": "образливий, дратівливий"},

{"id": 873, "eng": "bail", "ukr": "застава"},

{"id": 874, "eng": "hostile", "ukr": "ворог"},

{"id": 875, "eng": "scaffold", "ukr": "шибениця"},

{"id": 876, "eng": "reckon", "ukr": "розраховуватися"},

{"id": 877, "eng": "deed", "ukr": "вчинок"},

{"id": 878, "eng": "injure", "ukr": "поранити, ранити, псувати"},

{"id": 879, "eng": "retard", "ukr": "відставання, затримка, затримування"},

{"id": 880, "eng": "blossom", "ukr": "цвіт, цвісти"},

{"id": 881, "eng": "hag", "ukr": "відьма"},

{"id": 882, "eng": "wraith", "ukr": "примара"},

{"id": 883, "eng": "design", "ukr": "задум, план"},

{"id": 884, "eng": "rile", "ukr": "сердити"},

{"id": 885, "eng": "pelt", "ukr": "шкіра"},

{"id": 886, "eng": "drowner", "ukr": "потопаючий"},

{"id": 887, "eng": "obtain", "ukr": "одержувати"},

{"id": 888, "eng": "infantry", "ukr": "піхота"},

{"id": 889, "eng": "flee", "ukr": "тікати"},

{"id": 890, "eng": "tenacity", "ukr": "завзятість"},

{"id": 891, "eng": "limp", "ukr": "кульгати"},

{"id": 892, "eng": "disperse", "ukr": "розсіювати"},

{"id": 893, "eng": "certain", "ukr": "певний"},

{"id": 894, "eng": "odd", "ukr": "дивина, дивність"},

{"id": 895, "eng": "ferry", "ukr": "переправа"},

{"id": 896, "eng": "shawl", "ukr": "шаль"},

{"id": 897, "eng": "mischeif", "ukr": "зло, шкода"},

{"id": 898, "eng": "hermit", "ukr": "пустельник, самітник"},

{"id": 899, "eng": "lead", "ukr": "свинець"},

{"id": 900, "eng": "lurk", "ukr": "ховання, ховатися"},

{"id": 901, "eng": "clay", "ukr": "глина"},

{"id": 902, "eng": "murky", "ukr": "хмарний, похмурий"},

{"id": 903, "eng": "snack", "ukr": "закусити"},

{"id": 904, "eng": "nigh", "ukr": "близький"},

{"id": 905, "eng": "dull", "ukr": "безглуздий"},

{"id": 906, "eng": "adversary", "ukr": ", супротивник, ворог"},

{"id": 907, "eng": "interrogate", "ukr": "допитувати"},

{"id": 908, "eng": "erect", "ukr": "прямий, будувати"},

{"id": 909, "eng": "marshland", "ukr": "болото"},

{"id": 910, "eng": "tame", "ukr": "ручний, приручений"},

{"id": 911, "eng": "lumberjack", "ukr": "лісоруб"},

{"id": 912, "eng": "lumber", "ukr": "пиломатеріали"},

{"id": 913, "eng": "grove", "ukr": "лосочок"},

{"id": 914, "eng": "peep", "ukr": "погляд, заглядати, заглянути"},

{"id": 915, "eng": "testimony", "ukr": "доказ, свідчення"},

{"id": 916, "eng": "culprit", "ukr": "винний, злочинець"},

{"id": 917, "eng": "rod", "ukr": "прут"},

{"id": 918, "eng": "digress", "ukr": "відступати, відхилятися"},

{"id": 919, "eng": "ascend", "ukr": "підніматися"},

{"id": 920, "eng": "smith", "ukr": "коваль"},

{"id": 921, "eng": "dandelion", "ukr": "кульбаба"},

{"id": 922, "eng": "pitchfork", "ukr": "вила"},

{"id": 923, "eng": "splendid", "ukr": "блискучий, розкішний"},

{"id": 924, "eng": "booze", "ukr": "випивка, пиятика"},

{"id": 925, "eng": "jug", "ukr": "глечик"},

{"id": 926, "eng": "lard", "ukr": "жир"},

{"id": 927, "eng": "rampage", "ukr": "шаленство, лють"},

{"id": 928, "eng": "tempest", "ukr": "буря"},

{"id": 929, "eng": "cavity", "ukr": "западина, порожнина"},

{"id": 930, "eng": "due", "ukr": "відповідний, належний"},

{"id": 931, "eng": "attend", "ukr": "відвідувати"},

{"id": 932, "eng": "falsely", "ukr": "сумнівний, підозрілий"},

{"id": 933, "eng": "indefatigable", "ukr": "невтомний"},

{"id": 934, "eng": "windbag", "ukr": "базікало, пустомеля"},

{"id": 935, "eng": "buffon", "ukr": "блазень"},

{"id": 936, "eng": "huddle", "ukr": "хитросплетіння, притискатися"},

{"id": 937, "eng": "plinth", "ukr": "пустомеля"},

{"id": 938, "eng": "covet", "ukr": "жадати"},

{"id": 939, "eng": "outset", "ukr": "початок"},

{"id": 940, "eng": "frown", "ukr": "похмурий"},

{"id": 941, "eng": "vow", "ukr": "обітниця, клятва"},

{"id": 942, "eng": "pry", "ukr": "цікавість"},

{"id": 943, "eng": "treason", "ukr": "зрада"},

{"id": 944, "eng": "spoil", "ukr": "балувати, псувати"},

{"id": 945, "eng": "deceive", "ukr": "обманювати, розчаровувати"},

{"id": 946, "eng": "upset", "ukr": "порушувати"},

{"id": 947, "eng": "candid", "ukr": "відвертий, щирий"},

{"id": 948, "eng": "pawn", "ukr": "пішак"},

{"id": 949, "eng": "copulation", "ukr": "зєднання, об’єднання"},

{"id": 950, "eng": "simpleton", "ukr": "простак"},

{"id": 951, "eng": "tangle", "ukr": "переплетення"},

{"id": 952, "eng": "fetch", "ukr": "хитрість"},

{"id": 953, "eng": "seal", "ukr": "печатка"},

{"id": 954, "eng": "pledge", "ukr": "застава"},

{"id": 955, "eng": "lass", "ukr": "дівчина, служниця"},

{"id": 956, "eng": "fussy", "ukr": "метушливий, нервовий"},

{"id": 957, "eng": "meddle", "ukr": "втручання"},

{"id": 958, "eng": "submerge", "ukr": "затьмарювати"},

{"id": 959, "eng": "yearn", "ukr": "жадати, прагнути"},

{"id": 960, "eng": "trinket", "ukr": "дрібничка"},

{"id": 961, "eng": "grain", "ukr": "пах"},

{"id": 962, "eng": "udder", "ukr": "вим’я"},

{"id": 963, "eng": "pathetic", "ukr": "зворушливий, жалісний"},

{"id": 964, "eng": "carpenter", "ukr": "столяр"},

{"id": 965, "eng": "versatile", "ukr": "різнобічний"},

{"id": 966, "eng": "keftover", "ukr": "залишок"},

{"id": 967, "eng": "grief", "ukr": "сум, горе"},

{"id": 968, "eng": "immense", "ukr": "величезний, колосальний"},

{"id": 969, "eng": "tough", "ukr": "бандит, хуліган"},

{"id": 970, "eng": "seclusion", "ukr": "ізоляція"},

{"id": 971, "eng": "debauchery", "ukr": "пияцтво"},

{"id": 972, "eng": "engulf", "ukr": "поглинати, засмоктувати"},

{"id": 973, "eng": "vest", "ukr": "наділяти"},

{"id": 974, "eng": "villainy", "ukr": "ліходійство"},

{"id": 975, "eng": "irritate", "ukr": "дратувати"},

{"id": 976, "eng": "hermit", "ukr": "самітник"},

{"id": 977, "eng": "toss", "ukr": "кидання, кидок"},

{"id": 978, "eng": "meadow", "ukr": "луг"},

{"id": 979, "eng": "plaintive", "ukr": "сумний"},

{"id": 980, "eng": "purse", "ukr": "гаманець"},

{"id": 981, "eng": "ripple", "ukr": "струменіти"},

{"id": 982, "eng": "sturdy", "ukr": "сильний, міцний"},

{"id": 983, "eng": "pensive", "ukr": "замислений"},

{"id": 984, "eng": "harness", "ukr": "спорядження"},

{"id": 985, "eng": "unwary", "ukr": "необережний"},

{"id": 986, "eng": "frankly", "ukr": "відверто"},

{"id": 987, "eng": "behest", "ukr": "вуління, наказ"},

{"id": 988, "eng": "bulb", "ukr": "цибулина"},

{"id": 989, "eng": "cheerfully", "ukr": "весело"},

{"id": 990, "eng": "condolence", "ukr": "співчувати, співчуття"},

{"id": 991, "eng": "fang", "ukr": "ікло"},

{"id": 992, "eng": "vain", "ukr": "марний, даремний"},

{"id": 993, "eng": "affair", "ukr": "справа, роман"},

{"id": 994, "eng": "foray", "ukr": "наліт"},

{"id": 995, "eng": "candour", "ukr": "щирість"},

{"id": 996, "eng": "tiff", "ukr": "незлагода"},

{"id": 997, "eng": "lessure", "ukr": "дозвілля"},

{"id": 998, "eng": "ravine", "ukr": "ущелина, яр"},

{"id": 999, "eng": "spew", "ukr": "викид, вивертати"},

{"id": 1000, "eng": "eminent", "ukr": "видатний"},

{"id": 1001, "eng": "atop", "ukr": "нагорі"},

{"id": 1002, "eng": "lithe", "ukr": "гнучний"},

{"id": 1003, "eng": "repel", "ukr": "відганяти"},

{"id": 1004, "eng": "woe", "ukr": "горе, скорбота"},

{"id": 1005, "eng": "brazen", "ukr": "мідний"},

{"id": 1006, "eng": "itinerant", "ukr": "мандрівний"},

{"id": 1007, "eng": "abode", "ukr": "житло"},

{"id": 1008, "eng": "jest", "ukr": "жарт"},

{"id": 1009, "eng": "strive", "ukr": "намагатися"},

{"id": 1010, "eng": "awkward", "ukr": "незграбний"},

{"id": 1011, "eng": "shirk", "ukr": "ухиляння"},

{"id": 1012, "eng": "boor", "ukr": "грубіян"},

{"id": 1013, "eng": "confidant", "ukr": "довірений"},

{"id": 1014, "eng": "retinue", "ukr": "ескорт"},

{"id": 1015, "eng": "loin", "ukr": "лоно"},

{"id": 1016, "eng": "solar", "ukr": "сонячний"},

{"id": 1017, "eng": "weep", "ukr": "плач"},

{"id": 1018, "eng": "interment", "ukr": "поховання"},

{"id": 1019, "eng": "volition", "ukr": "воля"},

{"id": 1020, "eng": "beggar", "ukr": "жебрак"},

{"id": 1021, "eng": "vermin", "ukr": "паразити, ледарі"},

{"id": 1022, "eng": "mold", "ukr": "форма"},

{"id": 1023, "eng": "plough", "ukr": "плуг"},

{"id": 1024, "eng": "deaf", "ukr": "глухий"},

{"id": 1025, "eng": "garb", "ukr": "одіяння"},

{"id": 1026, "eng": "toll", "ukr": "мито"},

{"id": 1027, "eng": "prudent", "ukr": "розсудливий"},

{"id": 1028, "eng": "trait", "ukr": "риса"},

{"id": 1029, "eng": "coincidence", "ukr": "збіг"},

{"id": 1030, "eng": "sod", "ukr": "земля"},

{"id": 1031, "eng": "ardvous", "ukr": "важкий, напружений"},

{"id": 1032, "eng": "ostensibly", "ukr": "нібито"},

{"id": 1033, "eng": "befit", "ukr": "годитися"},

{"id": 1034, "eng": "vicinity", "ukr": "сусідство, близькість"},

{"id": 1035, "eng": "partially", "ukr": "частково"},

{"id": 1036, "eng": "pasttime", "ukr": "хобі"},

{"id": 1037, "eng": "vouch", "ukr": "ручатися"},

{"id": 1038, "eng": "wagon", "ukr": "віз"},

{"id": 1039, "eng": "dusk", "ukr": "сутінки"},

{"id": 1040, "eng": "torch", "ukr": "факел"},

{"id": 1041, "eng": "veneer", "ukr": "шпона"},

{"id": 1042, "eng": "insolence", "ukr": "пихатість"},

{"id": 1043, "eng": "bestial", "ukr": "скотинячий"},

{"id": 1044, "eng": "menace", "ukr": "загроза"},

{"id": 1045, "eng": "incense", "ukr": "фіміам"},

{"id": 1046, "eng": "scent", "ukr": "парфуми"},

{"id": 1047, "eng": "wallow", "ukr": "борсатися"},

{"id": 1048, "eng": "runt", "ukr": "коротун"},

{"id": 1049, "eng": "romp", "ukr": "шибенник"},

{"id": 1050, "eng": "diversion", "ukr": "відволікання"},

{"id": 1051, "eng": "rudely", "ukr": "образливо, грубо"},

{"id": 1052, "eng": "pile", "ukr": "кіл, стовп"},

{"id": 1053, "eng": "ordnance", "ukr": "артилерія"},

{"id": 1054, "eng": "preferably", "ukr": "переважно"},

{"id": 1055, "eng": "moose", "ukr": "лось"},

{"id": 1056, "eng": "antsy", "ukr": "неспокійний"},

{"id": 1057, "eng": "thick", "ukr": "товстий"},

{"id": 1058, "eng": "pivotal", "ukr": "центральний"},

{"id": 1059, "eng": "impede", "ukr": "перешкоджати"},

{"id": 1060, "eng": "sneak", "ukr": "боягуз, крастися"},

{"id": 1061, "eng": "gossip", "ukr": "балаканина, базікати"},

{"id": 1062, "eng": "gasp", "ukr": "задихатися"},

{"id": 1063, "eng": "moor", "ukr": "болото"},

{"id": 1064, "eng": "succumb", "ukr": "поступитися"},

{"id": 1065, "eng": "ought", "ukr": "обов’язок"},

{"id": 1066, "eng": "wimp", "ukr": "зануда"},

{"id": 1067, "eng": "contender", "ukr": "суперник, претендент"},

{"id": 1068, "eng": "peat", "ukr": "торф"},

{"id": 1069, "eng": "supremacy", "ukr": "перевага"},

{"id": 1070, "eng": "splendor", "ukr": "блиск"},

{"id": 1071, "eng": "sooth", "ukr": "правда, істина"},

{"id": 1072, "eng": "opressor", "ukr": "гнобитель"},

{"id": 1073, "eng": "prone", "ukr": "розпростертий"},

{"id": 1074, "eng": "oblivion", "ukr": "забуття"},

{"id": 1075, "eng": "venom", "ukr": "отрута, злість"},

{"id": 1076, "eng": "custom", "ukr": "звичай"},

{"id": 1077, "eng": "overdo", "ukr": "перебільшувати"},

{"id": 1078, "eng": "aid", "ukr": "допомога"},

{"id": 1079, "eng": "hence", "ukr": "отже"},

{"id": 1080, "eng": "distruction", "ukr": "відволікання"},

{"id": 1081, "eng": "condone", "ukr": "забути, спокутувати"},

{"id": 1082, "eng": "punch", "ukr": "удар"},

{"id": 1083, "eng": "con", "ukr": "учити, шахрайство, кермувати"},

{"id": 1084, "eng": "rag", "ukr": "ганчірка"},

{"id": 1085, "eng": "remnant", "ukr": "залишок"},

{"id": 1086, "eng": "fraud", "ukr": "обман"},

{"id": 1087, "eng": "reek", "ukr": "сморід"},

{"id": 1088, "eng": "proverb", "ukr": "прислів’я"},

{"id": 1089, "eng": "pitch", "ukr": "смола"},

{"id": 1090, "eng": "tit", "ukr": "кунжут"},

{"id": 1091, "eng": "cramped", "ukr": "тісний"},

{"id": 1092, "eng": "somewhat", "ukr": "дещо"},

{"id": 1093, "eng": "drought", "ukr": "тяга"},

{"id": 1094, "eng": "elicit", "ukr": "виявляти"},

{"id": 1095, "eng": "footprint", "ukr": "слід, відбиток"},

{"id": 1096, "eng": "hull", "ukr": "оболонка"},

{"id": 1097, "eng": "dispatch", "ukr": "відправка"},

{"id": 1098, "eng": "venomous", "ukr": "отрутний"},

{"id": 1099, "eng": "dodge", "ukr": "ухилятися"},

{"id": 1100, "eng": "porch", "ukr": "ганок"},

{"id": 1101, "eng": "expenditure", "ukr": "витрати"},

{"id": 1102, "eng": "trim", "ukr": "порядок"},

{"id": 1103, "eng": "solitary", "ukr": "відлюдник"},

{"id": 1104, "eng": "busted", "ukr": "зламаний"},

{"id": 1105, "eng": "seduce", "ukr": "спокусити"},

{"id": 1106, "eng": "elbow", "ukr": "лікоть"},

{"id": 1107, "eng": "warfare", "ukr": "війна, боротьба"},

{"id": 1108, "eng": "cheer", "ukr": "оплески"},

{"id": 1109, "eng": "opression", "ukr": "гноблення"},

{"id": 1110, "eng": "conceal", "ukr": "ховати"},

{"id": 1111, "eng": "deity", "ukr": "божественність"},

{"id": 1112, "eng": "frivolously", "ukr": "легковажно"},

{"id": 1113, "eng": "toll", "ukr": "мито"},

{"id": 1114, "eng": "succumb", "ukr": "загинути"},

{"id": 1115, "eng": "shoal", "ukr": "зграя, мілина"},

{"id": 1116, "eng": "heap", "ukr": "купа"},

{"id": 1117, "eng": "alga", "ukr": "водорость"},

{"id": 1118, "eng": "maple", "ukr": "клен"},

{"id": 1119, "eng": "enema", "ukr": "мед, клізма"},

{"id": 1120, "eng": "unify", "ukr": "об’єднувати"},

{"id": 1121, "eng": "resolute", "ukr": "твердий, рішучий"},

{"id": 1122, "eng": "hide", "ukr": "ховати, ховатись"},

{"id": 1123, "eng": "vat", "ukr": "цистерна"},

{"id": 1124, "eng": "collar", "ukr": "комір"},

{"id": 1125, "eng": "sheen", "ukr": "сяйво"},

{"id": 1126, "eng": "grim", "ukr": "жорстокий"},

{"id": 1127, "eng": "assert", "ukr": "стверджувати"},

{"id": 1128, "eng": "certify", "ukr": "засвідчувати"},

{"id": 1129, "eng": "disgrace", "ukr": "ганьба"},

{"id": 1130, "eng": "outcry", "ukr": "вигук"},

{"id": 1131, "eng": "verge", "ukr": "край, межа"},

{"id": 1132, "eng": "homicidal", "ukr": "смертоносний"},

{"id": 1133, "eng": "fertile", "ukr": "родючий, плодоносний"},

{"id": 1134, "eng": "blanket", "ukr": "загальний, повний"},

{"id": 1135, "eng": "dearly", "ukr": "дорого"},

{"id": 1136, "eng": "guise", "ukr": "вигляд"},

{"id": 1137, "eng": "heresy", "ukr": "єресь"},

{"id": 1138, "eng": "manacle", "ukr": "наручники"},

{"id": 1139, "eng": "opression", "ukr": "гноблення, тиранія"},

{"id": 1140, "eng": "incursion", "ukr": "вторгнення"},

{"id": 1141, "eng": "spat", "ukr": "сварка, сваритися"},

{"id": 1142, "eng": "custody", "ukr": "опіка"},

{"id": 1143, "eng": "pun", "ukr": "каламбур"},

{"id": 1144, "eng": "decency", "ukr": ", пристойність"},

{"id": 1145, "eng": "breadth", "ukr": "ширина"},

{"id": 1146, "eng": "cushion", "ukr": "підстилка"},

{"id": 1147, "eng": "betwixt", "ukr": "між"},

{"id": 1148, "eng": "agenda", "ukr": "порядок"},

{"id": 1149, "eng": "prosperity", "ukr": "процвітання"},

{"id": 1150, "eng": "thrive", "ukr": "процвітати"},

{"id": 1151, "eng": "barn", "ukr": "комора"},

{"id": 1152, "eng": "prey", "ukr": "жертва, здобич"},

{"id": 1153, "eng": "yonder", "ukr": "той"},

{"id": 1154, "eng": "hangout", "ukr": "притулок"},

{"id": 1155, "eng": "rub", "ukr": "тертя"},

{"id": 1156, "eng": "topple", "ukr": "падати, валити"},

{"id": 1157, "eng": "less", "ukr": "менший, менше"},

{"id": 1158, "eng": "precision", "ukr": "точність"},

{"id": 1159, "eng": "copper", "ukr": "мідь"},

{"id": 1160, "eng": "conjuction", "ukr": "з’єднання"},

{"id": 1161, "eng": "batty", "ukr": "збожеволілий"},

{"id": 1162, "eng": "prick", "ukr": "шип, колючка"},

{"id": 1163, "eng": "spit", "ukr": "шампур, меч"},

{"id": 1164, "eng": "shady", "ukr": "тінистий"},

{"id": 1165, "eng": "attain", "ukr": "досягати, домагатися"},

{"id": 1166, "eng": "whim", "ukr": "бажати"},

{"id": 1167, "eng": "ruse", "ukr": "хитрість"},

{"id": 1168, "eng": "vengeance", "ukr": "помста"},

{"id": 1169, "eng": "draw", "ukr": "тяга"},

{"id": 1170, "eng": "sow", "ukr": "свиня, сіяти"},

{"id": 1171, "eng": "hog", "ukr": "свиня, егоїст"},

{"id": 1172, "eng": "nimble", "ukr": "моторний"},

{"id": 1173, "eng": "grace", "ukr": "грація, прихильність"},

{"id": 1174, "eng": "mist", "ukr": "туман"},

{"id": 1175, "eng": "extencion", "ukr": "витягування"},

{"id": 1176, "eng": "clap", "ukr": "ляскіт"},

{"id": 1177, "eng": "tip", "ukr": "верхівка"},

{"id": 1178, "eng": "plain", "ukr": "рівнина, простий"},

{"id": 1179, "eng": "louse", "ukr": "воша"},

{"id": 1180, "eng": "bulging", "ukr": "здуття"},

{"id": 1181, "eng": "canteen", "ukr": "їдальня"},

{"id": 1182, "eng": "pitiful", "ukr": "співчутливий"},

{"id": 1183, "eng": "reveal", "ukr": "викриття"},

{"id": 1184, "eng": "abound", "ukr": "бути, перебувати"},

{"id": 1185, "eng": "overgrown", "ukr": "перерослий"},

{"id": 1186, "eng": "accomplish", "ukr": "виконувати"},

{"id": 1187, "eng": "ease", "ukr": "свобода, полегшення"},

{"id": 1188, "eng": "surmise", "ukr": "припущення"},

{"id": 1189, "eng": "claim", "ukr": "позов, вимога"},

{"id": 1190, "eng": "concern", "ukr": "стосунок, турбувати, занепокоєння"},

{"id": 1191, "eng": "blather", "ukr": "балаканина"},

{"id": 1192, "eng": "generosity", "ukr": "великодушність"},

{"id": 1193, "eng": "lineage", "ukr": "родовід"},

{"id": 1194, "eng": "fray", "ukr": "сутичка"},

{"id": 1195, "eng": "sleeve", "ukr": "рукав"},

{"id": 1196, "eng": "decisive", "ukr": "остаточний, рішучий, явний"},

{"id": 1197, "eng": "vicious", "ukr": "порочний"},

{"id": 1198, "eng": "tide", "ukr": "течія"},

{"id": 1199, "eng": "comet", "ukr": "комета"},

{"id": 1200, "eng": "botch", "ukr": "латка"},

{"id": 1201, "eng": "latter", "ukr": "останній"},

{"id": 1202, "eng": "glib", "ukr": "жвавий"},

{"id": 1203, "eng": "muster", "ukr": "збір"},

{"id": 1204, "eng": "prim", "ukr": "манірний, строгий"},

{"id": 1205, "eng": "chainmail", "ukr": "кольчуга"},

{"id": 1206, "eng": "lampoon", "ukr": "сатира"},

{"id": 1207, "eng": "reprimand", "ukr": "догана"},

{"id": 1208, "eng": "dormant", "ukr": "сплячий"},

{"id": 1209, "eng": "grunt", "ukr": "бурчання"},

{"id": 1210, "eng": "quarrel", "ukr": "суперечка"},

{"id": 1211, "eng": "lad", "ukr": "юнак"},

{"id": 1212, "eng": "bask", "ukr": "грітися"},

{"id": 1213, "eng": "sinful", "ukr": "грішний, злочинний"},

{"id": 1214, "eng": "meagre", "ukr": "худий"},

{"id": 1215, "eng": "yield", "ukr": "врожай, плоди"},

{"id": 1216, "eng": "wine", "ukr": "вино"},

{"id": 1217, "eng": "ruse", "ukr": "хитрість"},

{"id": 1218, "eng": "salve", "ukr": "мазь"},

{"id": 1219, "eng": "boil", "ukr": "хвилювання"},

{"id": 1220, "eng": "mare", "ukr": "кобила"},

{"id": 1221, "eng": "snitch", "ukr": "донощик, доносити"},

{"id": 1222, "eng": "derision", "ukr": "висміювання"},

{"id": 1223, "eng": "audacity", "ukr": "сміливість, відвага"},

{"id": 1224, "eng": "overdue", "ukr": "надмірний"},

{"id": 1225, "eng": "dope", "ukr": "паста, допінг, наркоман"},

{"id": 1226, "eng": "vicious", "ukr": "порочний, злий"},

{"id": 1227, "eng": "compound", "ukr": "ускладнювати"},

{"id": 1228, "eng": "wreck", "ukr": "аварія, крах"},

{"id": 1229, "eng": "damp", "ukr": "вологість, зневіра, слабість"},

{"id": 1230, "eng": "spunk", "ukr": "хоробрість, мужність"},

{"id": 1231, "eng": "tumble", "ukr": "падіння, впасти"},

{"id": 1232, "eng": "pail", "ukr": "купа"},

{"id": 1233, "eng": "lever", "ukr": "важіль"},

{"id": 1234, "eng": "miserable", "ukr": "жалюгідний, жалюгідно"},

{"id": 1235, "eng": "grease", "ukr": "лестощі, хабар"},

{"id": 1236, "eng": "spark", "ukr": "іскра"},

{"id": 1237, "eng": "bunk", "ukr": "ліжко"},

{"id": 1238, "eng": "puffy", "ukr": "рвучкий, пишний"},

{"id": 1239, "eng": "chop", "ukr": "удар, скидба, шмат"},

{"id": 1240, "eng": "pouch", "ukr": "сумка"},

{"id": 1241, "eng": "strengten", "ukr": "підсилюватии"},

{"id": 1242, "eng": "burrow", "ukr": "борона, колія"},

{"id": 1243, "eng": "bleach", "ukr": "відбілювання, білити"},

{"id": 1244, "eng": "platoon", "ukr": "загін, група"},

{"id": 1245, "eng": "snivel", "ukr": "соплі, голосіння"},

{"id": 1246, "eng": "giggle", "ukr": "смішки, хихикати"},

{"id": 1247, "eng": "neight", "ukr": "іржання, іржати"},

{"id": 1248, "eng": "din", "ukr": "гуркіт"},

{"id": 1249, "eng": "jumble", "ukr": "плутанина, безлад"},

{"id": 1250, "eng": "abequate", "ukr": "достатній, компетентний"},

{"id": 1251, "eng": "jab", "ukr": "стусан"},

{"id": 1252, "eng": "dire", "ukr": "жахливий"},

{"id": 1253, "eng": "sombre", "ukr": "темний, похмурий"},

{"id": 1254, "eng": "nepotism", "ukr": "кумівство"},

{"id": 1255, "eng": "penchant", "ukr": "схильність"},

{"id": 1256, "eng": "impart", "ukr": "наділяти"},

{"id": 1257, "eng": "maim", "ukr": "калічити"},

{"id": 1258, "eng": "moniker", "ukr": "кличка"},

{"id": 1259, "eng": "petal", "ukr": "пелюсток"},

{"id": 1260, "eng": "laden", "ukr": "навантажений"},

{"id": 1261, "eng": "hay", "ukr": "сіно"},

{"id": 1262, "eng": "devote", "ukr": "присвячувати"},

{"id": 1263, "eng": "amicably", "ukr": "мирно, дружно"},

{"id": 1264, "eng": "deign", "ukr": "удостоювати"},

{"id": 1265, "eng": "snare", "ukr": "пастка, петля, тенета"},

{"id": 1266, "eng": "splinter", "ukr": "уламок, скалка"},

{"id": 1267, "eng": "regiment", "ukr": "полк"},

{"id": 1268, "eng": "prevail", "ukr": "переважати"},

{"id": 1269, "eng": "highwayman", "ukr": "розбійник"},

{"id": 1270, "eng": "beaver", "ukr": "бобер, роботяга"},

{"id": 1271, "eng": "fiddle", "ukr": "скрипка, обман"},

{"id": 1272, "eng": "misstep", "ukr": "помилка"},

{"id": 1273, "eng": "vice", "ukr": "порок, слабість"},

{"id": 1274, "eng": "vendor", "ukr": "продавець"},

{"id": 1275, "eng": "exert", "ukr": "напружувати"},

{"id": 1276, "eng": "withdraw", "ukr": "відмовлятись, відходити"},

{"id": 1277, "eng": "foretell", "ukr": "пророкувати"},

{"id": 1278, "eng": "rogue", "ukr": "негідник"},

{"id": 1279, "eng": "wee", "ukr": "крихітний"},

{"id": 1280, "eng": "acutely", "ukr": "гостро, різко"},

{"id": 1281, "eng": "firmly", "ukr": "твердо"},

{"id": 1282, "eng": "apprentice", "ukr": "учень, підмайстер"},

{"id": 1283, "eng": "devise", "ukr": "заповіт"},

{"id": 1284, "eng": "sow", "ukr": "свиня"},

{"id": 1285, "eng": "strumpet", "ukr": "повія"},

{"id": 1286, "eng": "swine", "ukr": "свиня"},

{"id": 1287, "eng": "cave", "ukr": "бухта"},

{"id": 1288, "eng": "apart", "ukr": "віддалено"},

{"id": 1289, "eng": "hex", "ukr": "відьма"},

{"id": 1290, "eng": "fence", "ukr": "огороджувати"},

{"id": 1291, "eng": "tripe", "ukr": "рубець"},

{"id": 1292, "eng": "wench", "ukr": "дівчина"},

{"id": 1293, "eng": "drivel", "ukr": "нісенітниця"},

{"id": 1294, "eng": "ignite", "ukr": "запалювати"},

{"id": 1295, "eng": "brink", "ukr": "край"},

{"id": 1296, "eng": "turmoil", "ukr": "безлад"},

{"id": 1297, "eng": "beckon", "ukr": "кивок"},

{"id": 1298, "eng": "chip", "ukr": "уламок"},

{"id": 1299, "eng": "capital", "ukr": "столиця"},

{"id": 1300, "eng": "careful", "ukr": "обережний, уважний"},

{"id": 1301, "eng": "cartoon", "ukr": "мультфільм"},

{"id": 1302, "eng": "chest", "ukr": "ящик, скриня"},

{"id": 1303, "eng": "coach", "ukr": "карета, репетитор"},

{"id": 1304, "eng": "comedy", "ukr": "комедія"},

{"id": 1305, "eng": "draw", "ukr": "нічия"},

{"id": 1306, "eng": "dry", "ukr": "сухий, сушити, сушитися"},

{"id": 1307, "eng": "effect", "ukr": "дія, вплив"},

{"id": 1308, "eng": "devote", "ukr": "присвячувати"},

{"id": 1309, "eng": "guess", "ukr": "здогадуватись"},

{"id": 1310, "eng": "kind", "ukr": "вид, сорт, добрий"},

{"id": 1311, "eng": "lazy", "ukr": "лінивий"},

{"id": 1312, "eng": "look", "ukr": "дивитись"},

{"id": 1313, "eng": "lie", "ukr": "брехня, неправда"},

{"id": 1314, "eng": "life", "ukr": "життя"},

{"id": 1315, "eng": "kill", "ukr": "вбивати"},

{"id": 1316, "eng": "leave", "ukr": "залишати, покидати"},

{"id": 1317, "eng": "pillow", "ukr": "подушка"},

{"id": 1318, "eng": "recover", "ukr": "видужувати"},

{"id": 1319, "eng": "possible", "ukr": "можливий"},

{"id": 1320, "eng": "poem", "ukr": "вірш, поема"},

{"id": 1321, "eng": "nuclear", "ukr": "ядерний"},

{"id": 1322, "eng": "ocean", "ukr": "океан"},

{"id": 1323, "eng": "polite", "ukr": "вічливий"},

{"id": 1324, "eng": "present", "ukr": "дарунок"},

{"id": 1325, "eng": "remind", "ukr": "нагадувати"},

{"id": 1326, "eng": "tag", "ukr": "ярлик, етикетка"},

{"id": 1327, "eng": "star", "ukr": "зірка"},

{"id": 1328, "eng": "stone", "ukr": "камінь"},

{"id": 1329, "eng": "tower", "ukr": "башта"},

{"id": 1330, "eng": "synonym", "ukr": "синонім"},

{"id": 1331, "eng": "sour", "ukr": "кислий"},

{"id": 1332, "eng": "delight", "ukr": "захват"},

{"id": 1333, "eng": "convey", "ukr": "перевозити"},

{"id": 1334, "eng": "forgery", "ukr": "підробка"},

{"id": 1335, "eng": "draft", "ukr": "план, проект"},

{"id": 1336, "eng": "quench", "ukr": "гасити, гасіння"},

{"id": 1337, "eng": "evince", "ukr": "виявляти, доводити"},

{"id": 1338, "eng": "rinse", "ukr": "полоскати"},

{"id": 1339, "eng": "ample", "ukr": "багатий, просторий, докладний"},

{"id": 1340, "eng": "term", "ukr": "термін, відносини, мета"},

{"id": 1341, "eng": "cheek", "ukr": "щока, нахабність"},

{"id": 1342, "eng": "prance", "ukr": "головний"},

{"id": 1343, "eng": "dull", "ukr": "нудний, тупий"},

{"id": 1344, "eng": "behave", "ukr": "поводитись, діяти"},

{"id": 1345, "eng": "ought", "ukr": "повинен, слід, варто"},

{"id": 1346, "eng": "weasel", "ukr": "ласка, тхір, донощик"},

{"id": 1347, "eng": "pounce", "ukr": "накинутися"},

{"id": 1348, "eng": "hone", "ukr": "відточити"},

{"id": 1349, "eng": "draw", "ukr": "залучити, привертати"},

{"id": 1350, "eng": "tenure", "ukr": "володіння"},

{"id": 1351, "eng": "vagrant", "ukr": "бродяга"},

{"id": 1352, "eng": "mangy", "ukr": "паршивий"},

{"id": 1353, "eng": "goosberry", "ukr": "агрус"},

{"id": 1354, "eng": "omnicient", "ukr": "всезнаючий"},

{"id": 1355, "eng": "density", "ukr": "щільність, густота"},

{"id": 1356, "eng": "consent", "ukr": "згода, дозвіл"},

{"id": 1357, "eng": "calluse", "ukr": "мозолі"},

{"id": 1358, "eng": "battue", "ukr": "облава"},

{"id": 1359, "eng": "plate", "ukr": "блюдо, пластина"},

{"id": 1360, "eng": "bait", "ukr": "приманка"},

{"id": 1361, "eng": "muck", "ukr": "гній, болото, грязь"},

{"id": 1362, "eng": "rag", "ukr": "ганчірка"},

{"id": 1363, "eng": "saturate", "ukr": "просочити, наситити"},

{"id": 1364, "eng": "shaft", "ukr": "вал, стрижень"},

{"id": 1365, "eng": "dense", "ukr": "щільний, густий"},

{"id": 1366, "eng": "prowling", "ukr": "бродити, нишпорити"},

{"id": 1367, "eng": "proper", "ukr": "правильний"},

{"id": 1368, "eng": "ashen", "ukr": "попелястий"},

{"id": 1369, "eng": "heiress", "ukr": "спадкоємиця"},

{"id": 1370, "eng": "bear", "ukr": "ведмідь, носити"},

{"id": 1371, "eng": "renown", "ukr": "популярність"},

{"id": 1372, "eng": "afore", "ukr": "перш, раніше"},

{"id": 1373, "eng": "magpie", "ukr": "сорока"},

{"id": 1374, "eng": "copper", "ukr": "мідь, казан"},

{"id": 1375, "eng": "lend", "ukr": "позичити"},

{"id": 1376, "eng": "shrewdly", "ukr": "далекоглядно, мудро"},

{"id": 1377, "eng": "soot", "ukr": "сажа"},

{"id": 1378, "eng": "arrange", "ukr": "організвувати, влаштувати"},

{"id": 1379, "eng": "writ", "ukr": "припис"},

{"id": 1380, "eng": "arsonist", "ukr": "палій"},

{"id": 1381, "eng": "banter", "ukr": "кепкування"},

{"id": 1382, "eng": "grievances", "ukr": "образи, скарги"},

{"id": 1383, "eng": "dowry", "ukr": "посок, придане"},

{"id": 1384, "eng": "solace", "ukr": "розрад, заспокоєння"},

{"id": 1385, "eng": "heed", "ukr": "увага"},

{"id": 1386, "eng": "wallop", "ukr": "бити, удар"},

{"id": 1387, "eng": "mace", "ukr": "булава"},

{"id": 1388, "eng": "sip", "ukr": "ковток"},

{"id": 1389, "eng": "cubby", "ukr": "комірка"},

{"id": 1390, "eng": "decoction", "ukr": "відвар"},

{"id": 1391, "eng": "roach", "ukr": "плотва"},

{"id": 1392, "eng": "hoggle", "ukr": "суперечка, торг"},

{"id": 1393, "eng": "yoke", "ukr": "ярмо"},

{"id": 1394, "eng": "wiry", "ukr": "тонкий, жилистий"},

{"id": 1395, "eng": "birch", "ukr": "береза"},

{"id": 1396, "eng": "dismember", "ukr": "розчленовувати, виключати"},

{"id": 1397, "eng": "stead", "ukr": "місце"},

{"id": 1398, "eng": "brawl", "ukr": "скандал"},

{"id": 1399, "eng": "embracce", "ukr": "обійми, обіймати"},

{"id": 1400, "eng": "chafe", "ukr": "садно"},

{"id": 1401, "eng": "bow", "ukr": "уклін"},

{"id": 1402, "eng": "banter", "ukr": "жартувати"},

{"id": 1403, "eng": "bog", "ukr": "болото, трясовина"},

{"id": 1404, "eng": "moist", "ukr": "сирий"},

{"id": 1405, "eng": "nook", "ukr": "глушина, захисток"},

{"id": 1406, "eng": "sharpness", "ukr": "різкість, гострота"},

{"id": 1407, "eng": "commiserate", "ukr": "співчувати"},

{"id": 1408, "eng": "ravage", "ukr": "спустошення, розоряти"},

{"id": 1409, "eng": "wimp", "ukr": "занудатшсл, зарубка, засічка"},

{"id": 1410, "eng": "pillar", "ukr": "стовп, опора"},

{"id": 1411, "eng": "pester", "ukr": "докучати, набридати"},

{"id": 1412, "eng": "morsel", "ukr": "шматочок"},

{"id": 1413, "eng": "impunity", "ukr": "безкарність"},

{"id": 1414, "eng": "mange", "ukr": "короста"},

{"id": 1415, "eng": "umbrage", "ukr": "образа, ображати"},

{"id": 1416, "eng": "twig", "ukr": "гілочка"},

{"id": 1417, "eng": "augur", "ukr": "віщун"},

{"id": 1418, "eng": "rave", "ukr": "марення"},

{"id": 1419, "eng": "scenery", "ukr": "декорації, пейзаж"},

{"id": 1420, "eng": "soothsayer", "ukr": "провісник, віщун"},

{"id": 1421, "eng": "thumb", "ukr": "палець"},

{"id": 1422, "eng": "wayward", "ukr": "норовливий"},

{"id": 1423, "eng": "ward", "ukr": "опіка"},

{"id": 1424, "eng": "lash", "ukr": "батіг"},

{"id": 1425, "eng": "ire", "ukr": "гнів, лють"},

{"id": 1426, "eng": "hob", "ukr": "селюк"},

{"id": 1427, "eng": "treshold", "ukr": "поріг"},

{"id": 1428, "eng": "fetus", "ukr": "плід, ембріон"},

{"id": 1429, "eng": "relent", "ukr": "м’якшати"},

{"id": 1430, "eng": "woeful", "ukr": "скорботний, жалюгідний"},

{"id": 1431, "eng": "idly", "ukr": "ліниво"},

{"id": 1432, "eng": "roar", "ukr": "ревіння, гуркіт, крик"},

{"id": 1433, "eng": "palm", "ukr": "долоня, пальма"},

{"id": 1434, "eng": "eager", "ukr": "жадаючий"},

{"id": 1435, "eng": "adore", "ukr": "обожнювати, любити"},

{"id": 1436, "eng": "enticement", "ukr": "переманювати, переманюваня, спокуса"},

{"id": 1437, "eng": "abrupt", "ukr": "різкий, раптовий"},

{"id": 1438, "eng": "carve", "ukr": "вирізати"},

{"id": 1439, "eng": "distore", "ukr": "впотворити, викривити"},

{"id": 1440, "eng": "beforehang", "ukr": "заздалегідь"},

{"id": 1441, "eng": "transpire", "ukr": "вилитися"},

]

export default Words;