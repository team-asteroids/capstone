const users = [
  {
    firstName: 'Kailey',
    lastName: 'Reaney',
    email: 'kreaney0@techcrunch.com',
    phone: '760-944-1629',
    address1: '91 Maywood Circle',
    address2: '63',
    city: 'Escondido',
    state: 'California',
    zip: '92030',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    password: 'll6hDKErQjr',
    totalPets: 4,
    canFoster: true,
    userName: 'kreaney0',
  },
  {
    firstName: 'Deena',
    lastName: 'Lantiffe',
    email: 'dlantiffe1@ebay.com',
    phone: '209-454-9109',
    address1: '081 Kingsford Plaza',
    address2: '5',
    city: 'Stockton',
    state: 'California',
    zip: '95210',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    password: '1MSBFRHyqZK',
    totalPets: 10,
    canFoster: true,
    userName: 'dlantiffe1',
  },
  {
    firstName: 'Nina',
    lastName: 'Hallbird',
    email: 'nhallbird2@ameblo.jp',
    phone: '501-797-2093',
    address1: '80555 Stone Corner Junction',
    address2: null,
    city: 'Hot Springs National Park',
    state: 'Arkansas',
    zip: '71914',
    role: 'user',
    imageSrc: null,
    password: '66NjOcJY4a',
    totalPets: 7,
    canFoster: false,
    userName: 'nhallbird2',
  },
  {
    firstName: 'Kinny',
    lastName: 'Dinzey',
    email: 'kdinzey3@nasa.gov',
    phone: '619-601-4293',
    address1: '49 Anhalt Road',
    address2: null,
    city: 'San Diego',
    state: 'California',
    zip: '92121',
    role: 'user',
    imageSrc: null,
    password: 'gwg41FLf3',
    totalPets: 10,
    canFoster: true,
    userName: 'kdinzey3',
  },
  {
    firstName: 'Marilyn',
    lastName: 'Kisby',
    email: 'mkisby4@meetup.com',
    phone: '601-865-1470',
    address1: '761 Sauthoff Road',
    address2: null,
    city: 'Hattiesburg',
    state: 'Mississippi',
    zip: '39404',
    role: 'user',
    imageSrc: null,
    password: '7TKLD23432F3',
    totalPets: 9,
    canFoster: true,
    userName: 'mkisby4',
  },
  {
    firstName: 'Dalis',
    lastName: 'Mettetal',
    email: 'dmettetal5@canalblog.com',
    phone: '805-400-5630',
    address1: '8781 Surrey Pass',
    address2: null,
    city: 'Ventura',
    state: 'California',
    zip: '93005',
    role: 'user',
    imageSrc: null,
    password: 'J80Ijfg87dCA',
    totalPets: 5,
    canFoster: true,
    userName: 'dmettetal5',
  },
  {
    firstName: 'Terza',
    lastName: 'Titcombe',
    email: 'ttitcombe6@uol.com.br',
    phone: '304-130-5271',
    address1: '87 Rigney Center',
    address2: '38162',
    city: 'Charleston',
    state: 'West Virginia',
    zip: '25321',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    password: 'UbhBjb8vNH',
    totalPets: 8,
    canFoster: true,
    userName: 'ttitcombe6',
  },
  {
    firstName: 'Rafaelia',
    lastName: 'Grise',
    email: 'rgrise7@foxnews.com',
    phone: '323-460-9394',
    address1: '635 Oneill Terrace',
    address2: null,
    city: 'Los Angeles',
    state: 'California',
    zip: '90076',
    role: 'user',
    imageSrc: null,
    password: 'n6be345dfgdsoBT',
    totalPets: 2,
    canFoster: true,
    userName: 'rgrise7',
  },
  {
    firstName: 'Papagena',
    lastName: 'Serrier',
    email: 'pserrier8@sfgate.com',
    phone: '954-427-1692',
    address1: '705 Ridgeway Way',
    address2: '263',
    city: 'Fort Lauderdale',
    state: 'Florida',
    zip: '33315',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    password: 'ppEQobS744',
    totalPets: 6,
    canFoster: false,
    userName: 'pserrier8',
  },
  {
    firstName: 'Lynde',
    lastName: 'Barry',
    email: 'lbarry9@parallels.com',
    phone: '602-660-2769',
    address1: '74149 School Court',
    address2: '3',
    city: 'Gilbert',
    state: 'Arizona',
    zip: '85297',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    password: '5GUG4AhpzGS2',
    totalPets: 6,
    canFoster: false,
    userName: 'lbarry9',
  },
  {
    firstName: 'Justinian',
    lastName: 'Buckhurst',
    email: 'jbuckhursta@va.gov',
    phone: '949-924-3472',
    address1: '1 Moland Plaza',
    address2: null,
    city: 'Orange',
    state: 'California',
    zip: '92867',
    role: 'sitter',
    imageSrc: null,
    password: 'byJr7ljkkgdsO',
    totalPets: 8,
    canFoster: false,
    userName: 'jbuckhursta',
  },
  {
    firstName: 'Jamil',
    lastName: 'Brower',
    email: 'jbrowerb@360.cn',
    phone: '915-239-3093',
    address1: '1 Roxbury Way',
    address2: null,
    city: 'El Paso',
    state: 'Texas',
    zip: '88558',
    role: 'user',
    imageSrc: null,
    password: 'NZGW2Hamoreaw',
    totalPets: 1,
    canFoster: false,
    userName: 'jbrowerb',
  },
  {
    firstName: 'Lyndell',
    lastName: 'Boat',
    email: 'lboatc@youtu.be',
    phone: '706-720-5834',
    address1: '6 Amoth Lane',
    address2: '347',
    city: 'Columbus',
    state: 'Georgia',
    zip: '31914',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/dddddd/000000',
    password: 'z4v076fsdhjWPSp',
    totalPets: 10,
    canFoster: true,
    userName: 'lboatc',
  },
  {
    firstName: 'Ingemar',
    lastName: 'Trudgian',
    email: 'itrudgiand@umich.edu',
    phone: '612-102-6010',
    address1: '9 Fair Oaks Lane',
    address2: '44',
    city: 'Minneapolis',
    state: 'Minnesota',
    zip: '55446',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/dddddd/000000',
    password: 'k0lkJfgbrRQz',
    totalPets: 9,
    canFoster: true,
    userName: 'itrudgiand',
  },
  {
    firstName: 'Adella',
    lastName: 'Santry',
    email: 'asantrye@sphinn.com',
    phone: '918-128-3217',
    address1: '4290 Anniversary Pass',
    address2: null,
    city: 'Tulsa',
    state: 'Oklahoma',
    zip: '74170',
    role: 'user',
    imageSrc: null,
    password: 'h6VlEEoOVni',
    totalPets: 6,
    canFoster: false,
    userName: 'asantrye',
  },
  {
    firstName: 'Linc',
    lastName: 'Gingle',
    email: 'lginglef@mysql.com',
    phone: '602-119-7131',
    address1: '632 Dapin Avenue',
    address2: '9',
    city: 'Gilbert',
    state: 'Arizona',
    zip: '85297',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/dddddd/000000',
    password: 'XOamo3Sk',
    totalPets: 9,
    canFoster: false,
    userName: 'lginglef',
  },
  {
    firstName: 'Junie',
    lastName: 'Sherred',
    email: 'jsherredg@chron.com',
    phone: '915-741-1138',
    address1: '89 Northview Terrace',
    address2: null,
    city: 'El Paso',
    state: 'Texas',
    zip: '88569',
    role: 'user',
    imageSrc: null,
    password: 'nDpCl2ydsyrd1v',
    totalPets: 1,
    canFoster: false,
    userName: 'jsherredg',
  },
  {
    firstName: 'Christoforo',
    lastName: 'Garvagh',
    email: 'cgarvaghh@dmoz.org',
    phone: '713-890-0244',
    address1: '97 Summerview Court',
    address2: null,
    city: 'Houston',
    state: 'Texas',
    zip: '77281',
    role: 'sitter',
    imageSrc: null,
    password: 'ho1SBArD',
    totalPets: 7,
    canFoster: true,
    userName: 'cgarvaghh',
  },
  {
    firstName: 'Hertha',
    lastName: 'Waleworke',
    email: 'hwaleworkei@dmoz.org',
    phone: '202-225-3381',
    address1: '9 Maywood Drive',
    address2: '2767',
    city: 'Washington',
    state: 'District of Columbia',
    zip: '20575',
    role: 'sitter',
    imageSrc: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    password: '5sAEjQHobj',
    totalPets: 10,
    canFoster: false,
    userName: 'hwaleworkei',
  },
  {
    firstName: 'Silvia',
    lastName: 'Brammar',
    email: 'sbrammarj@google.it',
    phone: '907-678-9264',
    address1: '828 Oriole Street',
    address2: '09',
    city: 'Fairbanks',
    state: 'Alaska',
    zip: '99790',
    role: 'sitter',
    imageSrc: 'http://dummyimage.com/100x100.png/dddddd/000000',
    password: 'zPgzfgdfhgdfhES',
    totalPets: 9,
    canFoster: false,
    userName: 'sbrammarj',
  },
  {
    firstName: 'Jarid',
    lastName: 'Pimmocke',
    email: 'jpimmockek@mlb.com',
    phone: '303-900-8149',
    address1: '59 Park Meadow Trail',
    address2: '0',
    city: 'Denver',
    state: 'Colorado',
    zip: '80228',
    role: 'admin',
    imageSrc: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    password: 'Y0R7PbAS59lJ',
    totalPets: 6,
    canFoster: true,
    userName: 'jpimmockek',
  },
  {
    firstName: 'Kally',
    lastName: 'Seczyk',
    email: 'kseczykl@twitpic.com',
    phone: '719-942-0306',
    address1: '5 Glacier Hill Circle',
    address2: null,
    city: 'Colorado Springs',
    state: 'Colorado',
    zip: '80995',
    role: 'user',
    imageSrc: null,
    password: 'DCdyDZoNTRB',
    totalPets: 6,
    canFoster: true,
    userName: 'kseczykl',
  },
  {
    firstName: 'Norrie',
    lastName: 'Margarson',
    email: 'nmargarsonm@quantcast.com',
    phone: '325-981-0971',
    address1: '6 Moland Point',
    address2: '8661',
    city: 'San Angelo',
    state: 'Texas',
    zip: '76905',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    password: 'J67GfmYfu',
    totalPets: 4,
    canFoster: false,
    userName: 'nmargarsonm',
  },
  {
    firstName: 'Homerus',
    lastName: 'Obey',
    email: 'hobeyn@miibeian.gov.cn',
    phone: '858-871-6406',
    address1: '3629 Donald Trail',
    address2: null,
    city: 'Orange',
    state: 'California',
    zip: '92668',
    role: 'admin',
    imageSrc: null,
    password: 'seNnsabbaqp31',
    totalPets: 5,
    canFoster: false,
    userName: 'hobeyn',
  },
  {
    firstName: 'Katharina',
    lastName: 'Giocannoni',
    email: 'kgiocannonio@uol.com.br',
    phone: '913-262-6880',
    address1: '7 Green Ridge Trail',
    address2: null,
    city: 'Shawnee Mission',
    state: 'Kansas',
    zip: '66276',
    role: 'user',
    imageSrc: null,
    password: 'fO25j4g8umXC',
    totalPets: 6,
    canFoster: false,
    userName: 'kgiocannonio',
  },
  {
    firstName: 'Dulcy',
    lastName: 'Saiger',
    email: 'dsaigerp@indiatimes.com',
    phone: '484-241-4583',
    address1: '18 Magdeline Point',
    address2: null,
    city: 'Valley Forge',
    state: 'Pennsylvania',
    zip: '19495',
    role: 'sitter',
    imageSrc: null,
    password: 'l61jsedadfgd',
    totalPets: 5,
    canFoster: false,
    userName: 'dsaigerp',
  },
  {
    firstName: 'Luigi',
    lastName: 'Astles',
    email: 'lastlesq@abc.net.au',
    phone: '973-913-5488',
    address1: '4 Elka Lane',
    address2: null,
    city: 'Newark',
    state: 'New Jersey',
    zip: '07112',
    role: 'user',
    imageSrc: null,
    password: 'BZUtqcOJ',
    totalPets: 3,
    canFoster: false,
    userName: 'lastlesq',
  },
  {
    firstName: 'Morgen',
    lastName: 'Teresi',
    email: 'mteresir@blinklist.com',
    phone: '919-145-8165',
    address1: '64 Northwestern Terrace',
    address2: null,
    city: 'Raleigh',
    state: 'North Carolina',
    zip: '27605',
    role: 'user',
    imageSrc: null,
    password: 'tN1jHiNj4lEc',
    totalPets: 10,
    canFoster: true,
    userName: 'mteresir',
  },
  {
    firstName: 'Joann',
    lastName: 'Sonier',
    email: 'jsoniers@plala.or.jp',
    phone: '646-384-8705',
    address1: '063 Sauthoff Drive',
    address2: null,
    city: 'New York City',
    state: 'New York',
    zip: '10004',
    role: 'sitter',
    imageSrc: null,
    password: 'Lcsgl08ssEFZY',
    totalPets: 9,
    canFoster: true,
    userName: 'jsoniers',
  },
  {
    firstName: 'Jania',
    lastName: 'Doust',
    email: 'jdoustt@ning.com',
    phone: '415-779-0578',
    address1: '12513 Russell Junction',
    address2: null,
    city: 'San Francisco',
    state: 'California',
    zip: '94169',
    role: 'admin',
    imageSrc: null,
    password: 'usUUs562UfdU8',
    totalPets: 8,
    canFoster: true,
    userName: 'jdoustt',
  },
  {
    firstName: 'Town',
    lastName: 'Trumper',
    email: 'ttrumperu@illinois.edu',
    phone: '254-883-5256',
    address1: '4 Iowa Junction',
    address2: null,
    city: 'Temple',
    state: 'Texas',
    zip: '76505',
    role: 'user',
    imageSrc: null,
    password: 'XzpWuZ3T',
    totalPets: 5,
    canFoster: false,
    userName: 'ttrumperu',
  },
  {
    firstName: 'Joanne',
    lastName: 'Trussman',
    email: 'jtrussmanv@blinklist.com',
    phone: '702-668-7223',
    address1: '47 Morning Court',
    address2: '70',
    city: 'Las Vegas',
    state: 'Nevada',
    zip: '89166',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    password: '4rNbi9ls4gqfr',
    totalPets: 7,
    canFoster: true,
    userName: 'jtrussmanv',
  },
  {
    firstName: 'Kristan',
    lastName: 'Louder',
    email: 'klouderw@auda.org.au',
    phone: '202-675-0803',
    address1: '2 Manley Way',
    address2: null,
    city: 'Washington',
    state: 'District of Columbia',
    zip: '20319',
    role: 'user',
    imageSrc: null,
    password: 'fSl75tjzdCRh0',
    totalPets: 2,
    canFoster: true,
    userName: 'klouderw',
  },
  {
    firstName: 'Georgeta',
    lastName: 'Fyndon',
    email: 'gfyndonx@patch.com',
    phone: '801-527-7790',
    address1: '5 Summer Ridge Park',
    address2: null,
    city: 'Salt Lake City',
    state: 'Utah',
    zip: '84125',
    role: 'admin',
    imageSrc: null,
    password: 'gI3Bo1sdfkrex',
    totalPets: 10,
    canFoster: true,
    userName: 'gfyndonx',
  },
  {
    firstName: 'Shaun',
    lastName: 'Morter',
    email: 'smortery@bizjournals.com',
    phone: '-746-4052',
    address1: '87328 Lakewood Gardens Drive',
    address2: '67647',
    city: 'Pittsburgh',
    state: 'Pennsylvania',
    zip: '15266',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/dddddd/000000',
    password: 'axL9dCYVLdr9',
    totalPets: 10,
    canFoster: false,
    userName: 'smortery',
  },
  {
    firstName: 'Xerxes',
    lastName: 'Andrejs',
    email: 'xandrejsz@netscape.com',
    phone: '508-491-1330',
    address1: '995 Transport Point',
    address2: '53063',
    city: 'New Bedford',
    state: 'Massachusetts',
    zip: '02745',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/dddddd/000000',
    password: 'Z6yimhk754Ak',
    totalPets: 3,
    canFoster: true,
    userName: 'xandrejsz',
  },
  {
    firstName: 'Stephenie',
    lastName: 'Carden',
    email: 'scarden10@cbsnews.com',
    phone: '203-866-4292',
    address1: '6646 Carberry Drive',
    address2: null,
    city: 'Bridgeport',
    state: 'Connecticut',
    zip: '06673',
    role: 'user',
    imageSrc: null,
    password: 'vcsnp5gcshYUzE',
    totalPets: 1,
    canFoster: true,
    userName: 'scarden10',
  },
  {
    firstName: 'June',
    lastName: 'Kless',
    email: 'jkless11@phpbb.com',
    phone: '573-437-9115',
    address1: '2312 Red Cloud Alley',
    address2: null,
    city: 'Columbia',
    state: 'Missouri',
    zip: '65218',
    role: 'admin',
    imageSrc: null,
    password: 'DIE2sd824gdS8',
    totalPets: 4,
    canFoster: false,
    userName: 'jkless11',
  },
  {
    firstName: 'Edik',
    lastName: 'Kleinsinger',
    email: 'ekleinsinger12@hhs.gov',
    phone: '202-752-8691',
    address1: '1378 Dawn Place',
    address2: null,
    city: 'Washington',
    state: 'District of Columbia',
    zip: '20238',
    role: 'user',
    imageSrc: null,
    password: 'CUi0ezQ40f3',
    totalPets: 8,
    canFoster: true,
    userName: 'ekleinsinger12',
  },
  {
    firstName: 'Dore',
    lastName: 'Nornable',
    email: 'dnornable13@ihg.com',
    phone: '203-526-0397',
    address1: '0240 Mifflin Point',
    address2: null,
    city: 'New Haven',
    state: 'Connecticut',
    zip: '06520',
    role: 'user',
    imageSrc: null,
    password: 'LCN60oczH',
    totalPets: 9,
    canFoster: false,
    userName: 'dnornable13',
  },
  {
    firstName: 'Bruis',
    lastName: 'Frogley',
    email: 'bfrogley14@webmd.com',
    phone: '205-935-9663',
    address1: '3909 Drewry Crossing',
    address2: null,
    city: 'Birmingham',
    state: 'Alabama',
    zip: '35242',
    role: 'user',
    imageSrc: null,
    password: 'SMhk84rhar63R0',
    totalPets: 1,
    canFoster: true,
    userName: 'bfrogley14',
  },
  {
    firstName: 'Janenna',
    lastName: 'Ferres',
    email: 'jferres15@yahoo.com',
    phone: '678-109-8602',
    address1: '7275 Myrtle Crossing',
    address2: null,
    city: 'Decatur',
    state: 'Georgia',
    zip: '30033',
    role: 'user',
    imageSrc: null,
    password: '9sjWTcHv9',
    totalPets: 1,
    canFoster: true,
    userName: 'jferres15',
  },
  {
    firstName: 'Karrie',
    lastName: 'Love',
    email: 'klove16@tinyurl.com',
    phone: '540-965-3421',
    address1: '3247 Shelley Place',
    address2: '1',
    city: 'Roanoke',
    state: 'Virginia',
    zip: '24020',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    password: 'PtiVGX1Es',
    totalPets: 5,
    canFoster: false,
    userName: 'klove16',
  },
  {
    firstName: 'Della',
    lastName: 'Caistor',
    email: 'dcaistor17@flavors.me',
    phone: '215-147-0150',
    address1: '0 Anzinger Trail',
    address2: null,
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip: '19115',
    role: 'sitter',
    imageSrc: null,
    password: 'OD79jsqnsdNyx',
    totalPets: 10,
    canFoster: true,
    userName: 'dcaistor17',
  },
  {
    firstName: 'Theresina',
    lastName: 'Conaghy',
    email: 'tconaghy18@drupal.org',
    phone: '254-910-3101',
    address1: '95930 Corry Center',
    address2: '8',
    city: 'Waco',
    state: 'Texas',
    zip: '76711',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    password: 'zFaSA0tqD',
    totalPets: 1,
    canFoster: true,
    userName: 'tconaghy18',
  },
  {
    firstName: 'Codie',
    lastName: 'Folke',
    email: 'cfolke19@blogs.com',
    phone: '727-352-3382',
    address1: '58 Springview Lane',
    address2: null,
    city: 'Saint Petersburg',
    state: 'Florida',
    zip: '33742',
    role: 'sitter',
    imageSrc: null,
    password: '8x6eGlqM5J',
    totalPets: 3,
    canFoster: true,
    userName: 'cfolke19',
  },
  {
    firstName: 'Joan',
    lastName: 'McGlade',
    email: 'jmcglade1a@studiopress.com',
    phone: '225-339-3577',
    address1: '41902 Tony Way',
    address2: '92127',
    city: 'Baton Rouge',
    state: 'Louisiana',
    zip: '70883',
    role: 'user',
    imageSrc: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    password: 'xY6lmQYH4',
    totalPets: 7,
    canFoster: true,
    userName: 'jmcglade1a',
  },
  {
    firstName: 'Talbert',
    lastName: 'Marty',
    email: 'tmarty1b@sourceforge.net',
    phone: '423-629-1037',
    address1: '57894 Thompson Park',
    address2: null,
    city: 'Kingsport',
    state: 'Tennessee',
    zip: '37665',
    role: 'sitter',
    imageSrc: null,
    password: 'KwvYtt0Ug',
    totalPets: 9,
    canFoster: false,
    userName: 'tmarty1b',
  },
  {
    firstName: 'Joline',
    lastName: 'Stygall',
    email: 'jstygall1c@rakuten.co.jp',
    phone: '402-187-0979',
    address1: '0866 Kennedy Park',
    address2: '24823',
    city: 'Lincoln',
    state: 'Nebraska',
    zip: '68531',
    role: 'sitter',
    imageSrc: 'http://dummyimage.com/100x100.png/dddddd/000000',
    password: 'i6fMEeR6k',
    totalPets: 8,
    canFoster: true,
    userName: 'jstygall1c',
  },
  {
    firstName: 'Rosemonde',
    lastName: 'Rive',
    email: 'rrive1d@cnet.com',
    phone: '617-197-8281',
    address1: '7925 Mariners Cove Parkway',
    address2: null,
    city: 'Boston',
    state: 'Massachusetts',
    zip: '02109',
    role: 'sitter',
    imageSrc: null,
    password: 'x1E68Nnta',
    totalPets: 8,
    canFoster: true,
    userName: 'rrive1d',
  },
];

// const passwordEdit = users.map((user) => {
//   if (user.password.length < 8) {
//     return user.password;
//   }
// });

// console.log(passwordEdit);

module.exports = users;
