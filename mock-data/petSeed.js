const pets = [
  {
    name: 'Galapagos dove',
    breed: 'American Eskimo Dogs',
    age: 13,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/141x100.png/ff4444/ffffff',
    userId: 24,
  },
  {
    name: 'Common genet',
    breed: 'Silky Terriers',
    age: 3,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/227x100.png/dddddd/000000',
    userId: 37,
  },
  {
    name: 'Goanna lizard',
    breed: 'Bearded Collies',
    age: 27,
    size: 'large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/218x100.png/ff4444/ffffff',
    userId: 38,
  },
  {
    name: 'Eurasian beaver',
    breed: 'Bearded Collies',
    age: 1,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/230x100.png/dddddd/000000',
    userId: 20,
  },
  {
    name: "Cat, miner's",
    breed: 'Bearded Collies',
    age: 18,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/182x100.png/dddddd/000000',
    userId: 33,
  },
  {
    name: 'Radiated tortoise',
    breed: 'Silky Terriers',
    age: 19,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/237x100.png/ff4444/ffffff',
    userId: 7,
  },
  {
    name: "Grant's gazelle",
    breed: 'Belgian Sheepdogs',
    age: 4,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/175x100.png/dddddd/000000',
    userId: 8,
  },
  {
    name: 'Legaan, Monitor (unidentified)',
    breed: 'Silky Terriers',
    age: 18,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/117x100.png/ff4444/ffffff',
    userId: 50,
  },
  {
    name: 'Red phalarope',
    breed: 'Belgian Sheepdogs',
    age: 17,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/220x100.png/ff4444/ffffff',
    userId: 44,
  },
  {
    name: 'Seal, southern elephant',
    breed: 'Parson Russell Terriers',
    age: 25,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/223x100.png/dddddd/000000',
    userId: 44,
  },
  {
    name: 'Red-breasted cockatoo',
    breed: 'Parson Russell Terriers',
    age: 26,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/222x100.png/ff4444/ffffff',
    userId: 46,
  },
  {
    name: 'White-throated toucan',
    breed: 'Bearded Collies',
    age: 26,
    size: 'medium',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/238x100.png/ff4444/ffffff',
    userId: 39,
  },
  {
    name: 'Sidewinder',
    breed: 'Silky Terriers',
    age: 8,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/117x100.png/cc0000/ffffff',
    userId: 47,
  },
  {
    name: 'Blue waxbill',
    breed: 'Belgian Sheepdogs',
    age: 17,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/145x100.png/ff4444/ffffff',
    userId: 24,
  },
  {
    name: 'Australian sea lion',
    breed: 'Belgian Sheepdogs',
    age: 29,
    size: 'medium',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/170x100.png/dddddd/000000',
    userId: 29,
  },
  {
    name: 'African buffalo',
    breed: 'Silky Terriers',
    age: 18,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/248x100.png/5fa2dd/ffffff',
    userId: 38,
  },
  {
    name: 'Wallaroo, common',
    breed: 'Silky Terriers',
    age: 14,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/206x100.png/dddddd/000000',
    userId: 32,
  },
  {
    name: "Bustard, denham's",
    breed: 'Bearded Collies',
    age: 7,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/125x100.png/cc0000/ffffff',
    userId: 5,
  },
  {
    name: 'Gull, dusky',
    breed: 'Parson Russell Terriers',
    age: 5,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/187x100.png/5fa2dd/ffffff',
    userId: 6,
  },
  {
    name: 'Rose-ringed parakeet',
    breed: 'Bearded Collies',
    age: 11,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/109x100.png/5fa2dd/ffffff',
    userId: 5,
  },
  {
    name: 'Sidewinder',
    breed: 'Belgian Sheepdogs',
    age: 27,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/118x100.png/cc0000/ffffff',
    userId: 28,
  },
  {
    name: 'Tenrec, tailless',
    breed: 'American Eskimo Dogs',
    age: 10,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/205x100.png/dddddd/000000',
    userId: 40,
  },
  {
    name: 'Koala',
    breed: 'Belgian Sheepdogs',
    age: 27,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/116x100.png/5fa2dd/ffffff',
    userId: 14,
  },
  {
    name: 'Llama',
    breed: 'Silky Terriers',
    age: 4,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/167x100.png/ff4444/ffffff',
    userId: 45,
  },
  {
    name: 'Mountain lion',
    breed: 'Bearded Collies',
    age: 6,
    size: 'medium',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/190x100.png/5fa2dd/ffffff',
    userId: 9,
  },
  {
    name: 'Canadian tiger swallowtail butterfly',
    breed: 'Parson Russell Terriers',
    age: 19,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/195x100.png/dddddd/000000',
    userId: 44,
  },
  {
    name: 'Red-cheeked cordon bleu',
    breed: 'Bearded Collies',
    age: 5,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/200x100.png/dddddd/000000',
    userId: 34,
  },
  {
    name: 'Gelada baboon',
    breed: 'Silky Terriers',
    age: 22,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
    userId: 18,
  },
  {
    name: 'Yak',
    breed: 'Belgian Sheepdogs',
    age: 5,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/190x100.png/ff4444/ffffff',
    userId: 5,
  },
  {
    name: 'African black crake',
    breed: 'Silky Terriers',
    age: 2,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/216x100.png/cc0000/ffffff',
    userId: 26,
  },
  {
    name: 'Devil, tasmanian',
    breed: 'Parson Russell Terriers',
    age: 6,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/214x100.png/dddddd/000000',
    userId: 16,
  },
  {
    name: 'White-necked stork',
    breed: 'Parson Russell Terriers',
    age: 21,
    size: 'large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/137x100.png/cc0000/ffffff',
    userId: 28,
  },
  {
    name: 'Common brushtail possum',
    breed: 'Belgian Sheepdogs',
    age: 8,
    size: 'large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
    userId: 19,
  },
  {
    name: 'Cape wild cat',
    breed: 'Parson Russell Terriers',
    age: 4,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/140x100.png/cc0000/ffffff',
    userId: 25,
  },
  {
    name: 'Cormorant, flightless',
    breed: 'Parson Russell Terriers',
    age: 2,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/164x100.png/cc0000/ffffff',
    userId: 1,
  },
  {
    name: 'Reindeer',
    breed: 'Parson Russell Terriers',
    age: 5,
    size: 'large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/243x100.png/dddddd/000000',
    userId: 47,
  },
  {
    name: 'Fox, blue',
    breed: 'Bearded Collies',
    age: 10,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/232x100.png/ff4444/ffffff',
    userId: 10,
  },
  {
    name: 'Black bear',
    breed: 'Belgian Sheepdogs',
    age: 21,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
    userId: 47,
  },
  {
    name: 'Boa, columbian rainbow',
    breed: 'Belgian Sheepdogs',
    age: 20,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/186x100.png/ff4444/ffffff',
    userId: 15,
  },
  {
    name: 'Cobra, egyptian',
    breed: 'Silky Terriers',
    age: 18,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/194x100.png/cc0000/ffffff',
    userId: 5,
  },
  {
    name: 'Elegant crested tinamou',
    breed: 'Bearded Collies',
    age: 7,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/122x100.png/ff4444/ffffff',
    userId: 27,
  },
  {
    name: 'Prairie falcon',
    breed: 'Belgian Sheepdogs',
    age: 8,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/122x100.png/cc0000/ffffff',
    userId: 3,
  },
  {
    name: 'Coqui partridge',
    breed: 'Parson Russell Terriers',
    age: 28,
    size: 'large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/193x100.png/ff4444/ffffff',
    userId: 29,
  },
  {
    name: 'Black-crowned crane',
    breed: 'Silky Terriers',
    age: 15,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/174x100.png/ff4444/ffffff',
    userId: 17,
  },
  {
    name: 'Eagle, long-crested hawk',
    breed: 'Bearded Collies',
    age: 2,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/163x100.png/cc0000/ffffff',
    userId: 23,
  },
  {
    name: 'Cape fox',
    breed: 'American Eskimo Dogs',
    age: 3,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/115x100.png/cc0000/ffffff',
    userId: 29,
  },
  {
    name: 'Sheep, red',
    breed: 'Bearded Collies',
    age: 8,
    size: 'medium',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/243x100.png/cc0000/ffffff',
    userId: 31,
  },
  {
    name: 'Galapagos penguin',
    breed: 'American Eskimo Dogs',
    age: 3,
    size: 'medium',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/149x100.png/5fa2dd/ffffff',
    userId: 5,
  },
  {
    name: 'Australian masked owl',
    breed: 'Parson Russell Terriers',
    age: 3,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/223x100.png/ff4444/ffffff',
    userId: 16,
  },
  {
    name: 'Black-footed ferret',
    breed: 'Silky Terriers',
    age: 28,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/177x100.png/ff4444/ffffff',
    userId: 11,
  },
  {
    name: 'Blue waxbill',
    breed: 'Parson Russell Terriers',
    age: 27,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/103x100.png/5fa2dd/ffffff',
    userId: 12,
  },
  {
    name: 'Eurasian badger',
    breed: 'American Eskimo Dogs',
    age: 3,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/159x100.png/5fa2dd/ffffff',
    userId: 21,
  },
  {
    name: 'White-necked raven',
    breed: 'Bearded Collies',
    age: 16,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/103x100.png/dddddd/000000',
    userId: 36,
  },
  {
    name: 'Capuchin, brown',
    breed: 'American Eskimo Dogs',
    age: 12,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/178x100.png/cc0000/ffffff',
    userId: 14,
  },
  {
    name: 'Red meerkat',
    breed: 'Parson Russell Terriers',
    age: 2,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/131x100.png/cc0000/ffffff',
    userId: 46,
  },
  {
    name: 'Bird, secretary',
    breed: 'Bearded Collies',
    age: 11,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/228x100.png/cc0000/ffffff',
    userId: 47,
  },
  {
    name: 'Gull, southern black-backed',
    breed: 'Silky Terriers',
    age: 22,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/163x100.png/cc0000/ffffff',
    userId: 29,
  },
  {
    name: 'Deer, spotted',
    breed: 'American Eskimo Dogs',
    age: 25,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
    userId: 22,
  },
  {
    name: 'Cormorant, flightless',
    breed: 'Parson Russell Terriers',
    age: 2,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/180x100.png/dddddd/000000',
    userId: 5,
  },
  {
    name: 'Monitor, white-throated',
    breed: 'Belgian Sheepdogs',
    age: 24,
    size: 'large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/182x100.png/5fa2dd/ffffff',
    userId: 40,
  },
  {
    name: 'Lizard, frilled',
    breed: 'American Eskimo Dogs',
    age: 8,
    size: 'large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/103x100.png/ff4444/ffffff',
    userId: 1,
  },
  {
    name: 'Jackal, golden',
    breed: 'Belgian Sheepdogs',
    age: 16,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/232x100.png/5fa2dd/ffffff',
    userId: 2,
  },
  {
    name: 'African buffalo',
    breed: 'Silky Terriers',
    age: 21,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/217x100.png/cc0000/ffffff',
    userId: 50,
  },
  {
    name: 'Seal, northern fur',
    breed: 'Bearded Collies',
    age: 18,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/150x100.png/dddddd/000000',
    userId: 1,
  },
  {
    name: 'Red-tailed cockatoo',
    breed: 'Belgian Sheepdogs',
    age: 19,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/174x100.png/dddddd/000000',
    userId: 43,
  },
  {
    name: 'Jabiru stork',
    breed: 'Silky Terriers',
    age: 14,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/111x100.png/ff4444/ffffff',
    userId: 32,
  },
  {
    name: 'Oriental white-backed vulture',
    breed: 'American Eskimo Dogs',
    age: 29,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/115x100.png/cc0000/ffffff',
    userId: 4,
  },
  {
    name: 'Monkey, black spider',
    breed: 'Bearded Collies',
    age: 3,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/187x100.png/cc0000/ffffff',
    userId: 4,
  },
  {
    name: 'Dragon, ornate rock',
    breed: 'Parson Russell Terriers',
    age: 2,
    size: 'small',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/224x100.png/dddddd/000000',
    userId: 33,
  },
  {
    name: "Thomson's gazelle",
    breed: 'Bearded Collies',
    age: 13,
    size: 'medium',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/111x100.png/dddddd/000000',
    userId: 36,
  },
  {
    name: 'Common turkey',
    breed: 'Bearded Collies',
    age: 4,
    size: 'extra-large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/248x100.png/cc0000/ffffff',
    userId: 37,
  },
  {
    name: 'Eastern box turtle',
    breed: 'Parson Russell Terriers',
    age: 14,
    size: 'large',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/221x100.png/dddddd/000000',
    userId: 7,
  },
  {
    name: 'Crab, red lava',
    breed: 'Bearded Collies',
    age: 12,
    size: 'small',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/155x100.png/dddddd/000000',
    userId: 15,
  },
  {
    name: 'Cat, ringtail',
    breed: 'Bearded Collies',
    age: 5,
    size: 'medium',
    sex: 'female',
    imageSrc: 'http://dummyimage.com/184x100.png/ff4444/ffffff',
    userId: 48,
  },
  {
    name: 'White-winged tern',
    breed: 'Silky Terriers',
    age: 9,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'http://dummyimage.com/176x100.png/ff4444/ffffff',
    userId: 50,
  },
];

module.exports = pets;
