const birdsData = [
  [
    {
      id: 1,
      name: 'Стервятник',
      species: 'Neophron percnopterus',
      description: 'Некрупный пернатый хищник контрастного окраса из черных и белых тонов, с характерным участком голой кожи на голове. На затылке и шее длинные перья.',
      image: '/img/predatory/Neophron-percnopterus.jpg',
      audio: '/audio/predatory/Neophron-percnopterus.mp3',
    },
    {
      id: 2,
      name: 'Чёрный гриф',
      species: 'Aegypius monachus',
      description: 'Черные грифы - это одни из самых крупных хищных птиц. Благодаря своему выразительному внешнему виду грифы оставили значительный след в мифологии и культуре многих народов.',
      image: '/img/predatory/Aegypius-monachus.jpg',
      audio: '/audio/predatory/Aegypius-monachus.mp3',
    },
    {
      id: 3,
      name: 'Чёрный коршун',
      species: 'Milvus migrans',
      description: 'В полёте коршун неутомим и может быть невидим в небе, настолько высоко взмывает. Такие создания способны парить до четверти часа без единого взмаха узких и длинных крыльев, но реакции их замедлены.',
      image: '/img/predatory/Milvus-migrans.jpg',
      audio: '/audio/predatory/Milvus-migrans.mp3',
    },
    {
      id: 4,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description: 'Это птица из рода орлов. Она имеет сильное, мощное, выносливое тело и обладает искусством парить в небе часами, улавливая благоприятные воздушные тёплые потоки своими распахнутыми большими крыльями.',
      image: '/img/predatory/Aquila-chrysaetos.jpg',
      audio: '/audio/predatory/Aquila-chrysaetos.mp3',
    },
    {
      id: 5,
      name: 'Сокол Элеоноры',
      species: 'Falco eleonorae',
      description: 'Это изящный сокол с длинными крыльями заострённой формы и длинным клиновидным хвостом.Полёт у чеглока быстрый и маневренный, в нем птица чередует частые взмахи крыльями со скольжением.',
      image: '/img/predatory/Falco-eleonorae.jpg',
      audio: '/audio/predatory/Falco-eleonorae.mp3',
    },
    {
      id: 6,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: '/img/predatory/Falco-peregrinus.jpg',
      audio: '/audio/predatory/Falco-peregrinus.mp3',
    },
  ],
  [
    {
      id: 7,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description: 'Это одна из самых известных птиц, типичный обитатель лесов, парков, частый гость на садовых участках. Ее характерное «ку-ку» почти невозможно спутать с другими голосами зверей и птиц. ',
      image: '/img/insectivores/Cuculus-canorus.jpg',
      audio: '/audio/insectivores/Cuculus-canorus.mp3',
    },
    {
      id: 8,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы постоянно шумят, когда питаются или ссорятся, просто сидят и переговариваются друг с другом. Их постоянный гомон трудно не заметить. ',
      image: '/img/insectivores/Sturnus-vulgaris.jpg',
      audio: '/audio/insectivores/Sturnus-vulgaris.mp3',
    },
    {
      id: 9,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: '/img/insectivores/Fringilla-coelebs.jpg',
      audio: '/audio/insectivores/Fringilla-coelebs.mp3',
    },
    {
      id: 10,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Удод — небольшая по размерам, но достаточно запоминающаяся птица, имеющая яркое оперение, узкий удлиненный клюв и хохолок в виде веера. Относится к семейству удодовых. Существует много поверий связанных с птицей.',
      image: '/img/insectivores/Upupa-epops.jpg',
      audio: '/audio/insectivores/Upupa-epops.mp3',
    },
    {
      id: 11,
      name: 'Корольковая пеночка',
      species: 'Phylloscopus proregulus',
      description: 'Одна из самых маленьких пеночек, еще более, чем зарничка, похожая на королька. В весеннем и особенно в осеннем нарядах заметны желтые бровь, широкая полоса на темени, две крыловых полосы и ярко окрашенная поясница.',
      image: '/img/insectivores/Phylloscopus-proregulus.jpg',
      audio: '/audio/insectivores/Phylloscopus-proregulus.mp3',
    },
    {
      id: 12,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Иволга часто украшает собой научные журналы, детские книги, тетради и открытки. Ее легко можно узнать по красивой мелодии, напоминающей звуки флейты.',
      image: '/img/insectivores/Oriolus-oriolus.jpg',
      audio: '/audio/insectivores/Oriolus-oriolus.mp3',
    },
  ],
  [
    {
      id: 13,
      name: 'Чечевица',
      species: 'Carpodacus erythrinus',
      description: 'Населяет открытые пространства с зарослями кустарников, опушки лесов, поймы рек. Предпочитает места с густыми кустарниковыми зарослями. На глаза попадается редко, так как прячется в густой листве.',
      image: '/img/herbivorous/Carpodacus-erythrinus.jpg',
      audio: '/audio/herbivorous/Carpodacus-erythrinus.mp3',
    },
    {
      id: 14,
      name: 'Чиж',
      species: 'Spinus spinus',
      description: 'Чижи мало боятся человека, быстро приручаются, имеют веселый, общительный характер. По мнению многих орнитологов, это самое очаровательное, грациозное и смышленое существо украсит живые уголки, особенно вольеры.',
      image: '/img/herbivorous/Spinus-spinus.jpg',
      audio: '/audio/herbivorous/Spinus-spinus.mp3',
    },
    {
      id: 15,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description: 'Щеглы привлекают своей пестрой расцветкой, мелодичным голосом, часто содержатся в домашних условиях любителями экзотики. Это животное не привередливое, имеет развитый интеллект, быстро учится и привыкает к своему хозяину.',
      image: '/img/herbivorous/Carduelis-carduelis.jpg',
      audio: '/audio/herbivorous/Carduelis-carduelis.mp3',
    },
    {
      id: 16,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'Небольшая птичка из воробьиных, которую в средней полосе России можно встретить и летом, и зимой. Хотя предпочитает она жить в лесу, но может выбираться и в населённые пункты, иногда наносит ущерб урожаям в садах.',
      image: '/img/herbivorous/Bombycilla-garrulus.jpg',
      audio: '/audio/herbivorous/Bombycilla-garrulus.mp3',
    },
    {
      id: 17,
      name: 'Зеленушка',
      species: 'Chloris chloris',
      description: 'Осторожная птица в естественных условиях обитания. Но в неволе быстро привыкает к новым условиям, благодаря малоподвижному образу жизни. Некоторые особи начинают петь в клетке с первого дня, другим требуется привыкание в течение 2-3 месяцев.',
      image: '/img/herbivorous/Chloris-chloris.jpg',
      audio: '/audio/herbivorous/Chloris-chloris.mp3',
    },
    {
      id: 18,
      name: 'Клёст-еловик',
      species: 'Loxia curvirostra',
      description: 'Клесты – небольшие певчие пташки, относящиеся к отряду воробьинообразных и семейству вьюрковых. Клеста можно назвать древней птицы, ведь известно, что его предки населяли нашу планету еще 9 или 10 миллионов лет тому назад.',
      image: '/img/herbivorous/Loxia-curvirostra.jpg',
      audio: '/audio/herbivorous/Loxia-curvirostra.mp3',
    },
  ],
  [
    {
      id: 19,
      name: 'Эму',
      species: 'Dromaius novaehollandiae',
      description: 'Крупнейшая австралийская птица отряда казуарообразные, несмотря на свои внушительные размеры, великолепно плавает и, обладая сильными лапами, быстро бегает.',
      image: '/img/flightless/Dromaius-novaehollandiae.jpg',
      audio: '/audio/flightless/Dromaius-novaehollandiae.mp3',
    },
    {
      id: 20,
      name: 'Обыкновенный нанду',
      species: 'Rhea americana',
      description: 'Крупная птица из семейства Нанду. Она не умеет летать, но очень резво бегает со скоростью до 60 км/час, делая шаги от 1,5 до 2 м. Ее называют также большим или северным нанду.',
      image: '/img/flightless/Rhea-americana.jpg',
      audio: '/audio/flightless/Rhea-americana.mp3',
    },
    {
      id: 21,
      name: 'Киви',
      species: 'Apteryx shaw',
      description: 'Птица киви очень любопытная: она не может летать, у нее свободные, похожие на волосы перья, сильные ноги и отсутствует хвост. У птицы есть много странных и замечательных особенностей.',
      image: '/img/flightless/Apteryx-shaw.jpg',
      audio: '/audio/flightless/Apteryx-shaw.mp3',
    },
    {
      id: 22,
      name: 'Какапо',
      species: 'Strigops habroptila',
      description: 'Этот вид, занесенный в Красную книгу, еще называют совиным попугаем, и он также утратил способность к полетам. Один из самых древних обитателей Земли среди всего многообразия ныне живущих пернатых.',
      image: '/img/flightless/Strigops-habroptila.jpg',
      audio: '/audio/flightless/Strigops-habroptila.mp3',
    },
    {
      id: 23,
      name: 'Такахе',
      species: 'Porphyrio hochstetteri',
      description: 'Второе название этой птички — бескрылая султанка, но крылья развиты хорошо, а вот мышцы грудины и киля развиты слабо, из-за чего эта птица и не летает.',
      image: '/img/flightless/Porphyrio-hochstetteri.jpg',
      audio: '/audio/flightless/Porphyrio-hochstetteri.mp3',
    },
    {
      id: 24,
      name: 'Королевский пингвин',
      species: 'Aptenodytes patagonicus',
      description: 'Это один из самых больших ныне существующих пингвинов. Он имеет обтекаемую форму тела и толстые по структуре перья, которые обладают водоотталкивающими свойствами.',
      image: '/img/flightless/Aptenodytes-patagonicus.jpg',
      audio: '/audio/flightless/Aptenodytes-patagonicus.mp3',
    },
  ],
  [
    {
      id: 25,
      name: 'Огарь',
      species: 'Tadorna ferruginea',
      description: 'Красная водоплавающая птица относится к семейству утиных. Яркое оранжевое оперение придает нарядный вид осторожному обитателю водоемов Европы и Азии. Маховые крылья, лапы черные.',
      image: '/img/floating/Tadorna-ferruginea.jpg',
      audio: '/audio/floating/Tadorna-ferruginea.mp3',
    },
    {
      id: 26,
      name: 'Гага',
      species: 'Somateria mollissima',
      description: 'Гага – птица, известная всемирно своим необыкновенным пухом. Эта птица на протяжении веков является местным жителем холодного северного региона.',
      image: '/img/floating/Somateria-mollissima.jpg',
      audio: '/audio/floating/Somateria-mollissima.mp3',
    },
    {
      id: 27,
      name: 'Чомга',
      species: 'Podiceps cristatus',
      description: 'Птицы обитают на прудах, озерах, любят заросли тростника. Чомгу не встретить на суше, она даже взлетает после разбега с воды. Плавает с глубоким погружением в воду.',
      image: '/img/floating/Podiceps-cristatus.jpg',
      audio: '/audio/floating/Podiceps-cristatus.mp3',
    },
    {
      id: 28,
      name: 'Лысуха',
      species: 'Fulica atra',
      description: 'Это птица средних размеров, относящаяся к семейству пастушковых. Свое название получила благодаря белому кожистому пятну на лбу, не покрытому оперением.',
      image: '/img/floating/Fulica-atra.jpg',
      audio: '/audio/floating/Fulica-atra.mp3',
    },
    {
      id: 29,
      name: 'Гагарка',
      species: 'Alca torda',
      description: 'Гагарка – водоплавающая птица просторов севера. Лучше всего они ощущают себя в царстве бескрайних солёных вод, прекрасно плавая и виртуозно ныряя. В полёте они кажутся неуклюжими.',
      image: '/img/floating/Alca-torda.jpg',
      audio: '/audio/floating/Alca-torda.mp3',
    },
    {
      id: 30,
      name: 'Гоголь',
      species: 'Bucephala clangula',
      description: 'Птица семейства утиных, нырковая утка средней величины с большой округлой головой, коротким клювом и контрастным чёрно-белым оперением.',
      image: '/img/floating/Bucephala-clangula.jpg',
      audio: '/audio/floating/Bucephala-clangula.mp3',
    },
  ],
  [
    {
      id: 31,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Большинство кочующих грачей отправляются в путь в октябре и возвращаются обратно в марте. Где птица будет зимовать, зависит от ее места проживания.',
      image: '/img/migratory/Corvus-frugilegus.jpg',
      audio: '/audio/migratory/Corvus-frugilegus.mp3',
    },
    {
      id: 32,
      name: 'Гусь',
      species: 'Anser',
      description: 'Когда начинается конец октября, гуси отправляются в путь, чтобы переждать зиму в теплых странах. Этих птиц легко узнать в небе, поскольку они летят клином, держа четкое построение.',
      image: '/img/migratory/Anser.jpg',
      audio: '/audio/migratory/Anser.mp3',
    },
    {
      id: 33,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Птица знаменита своим громким пением, которое можно услышать в деревнях и лесных рощах. Соловей вьет гнезда на вершинах деревьев, питается насекомыми и ягодами.',
      image: '/img/migratory/Luscinia-luscinia.jpg',
      audio: '/audio/migratory/Luscinia-luscinia.mp3',
    },
    {
      id: 34,
      name: 'Перепел',
      species: 'Coturnix coturnix',
      description: 'Методика перелета на юг у перепелов довольна интересна. Зиму они проводят на Балканах и Ближнем Востоке. Питаются в основном личинками.',
      image: '/img/migratory/Coturnix-coturnix.jpg',
      audio: '/audio/migratory/Coturnix-coturnix.mp3',
    },
    {
      id: 35,
      name: 'Журавль',
      species: 'Gruiformes',
      description: 'Журавли путешествуют стаями, образуя во время полета косяк, где во главе летит вожак. Поскольку данная птица делится на множество подвидов, каждый зимует в определенных теплых странах.',
      image: '/img/migratory/Gruiformes.jpg',
      audio: '/audio/migratory/Gruiformes.mp3',
    },
    {
      id: 36,
      name: 'Малиновка',
      species: 'Erithacus rubecula',
      description: 'Зарянка или малиновка – как принято называть ее в России, известна своим дружелюбным характером и пестрым окрасом. Эта маленькая птичка совсем не боится людей.',
      image: '/img/migratory/Erithacus-rubecula.jpg',
      audio: '/audio/migratory/Erithacus-rubecula.mp3',
    },
  ],
];

export default birdsData;