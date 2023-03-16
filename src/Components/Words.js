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
]

export default Words;