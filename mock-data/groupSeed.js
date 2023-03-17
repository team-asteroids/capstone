const groups = [
  {
    name: 'Blacksmith plover',
    topic: 'recommendations',
    description:
      'maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem',
    imageSrc: 'http://dummyimage.com/201x100.png/ff4444/ffffff',
  },
  {
    name: 'Kookaburra, laughing',
    topic: 'playdates',
    description:
      'aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia',
    imageSrc: 'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
  },
  {
    name: 'Pine squirrel',
    topic: 'playdates',
    description:
      'amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus',
    imageSrc: 'http://dummyimage.com/175x100.png/ff4444/ffffff',
  },
  {
    name: 'Prairie falcon',
    topic: 'exotic pets',
    description:
      'justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat',
    imageSrc: 'http://dummyimage.com/158x100.png/dddddd/000000',
  },
  {
    name: 'Catfish, blue',
    topic: 'neighborhood',
    description:
      'sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla',
    imageSrc: 'http://dummyimage.com/171x100.png/dddddd/000000',
  },
  {
    name: 'Camel, dromedary',
    topic: 'neighborhood',
    description:
      'tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula',
    imageSrc: 'http://dummyimage.com/123x100.png/ff4444/ffffff',
  },
  {
    name: "Denham's bustard",
    topic: 'exotic pets',
    description:
      'donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies',
    imageSrc: 'http://dummyimage.com/222x100.png/ff4444/ffffff',
  },
  {
    name: 'Red-legged pademelon',
    topic: 'exotic pets',
    description:
      'sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis',
    imageSrc: 'http://dummyimage.com/190x100.png/5fa2dd/ffffff',
  },
  {
    name: 'Racer snake',
    topic: 'neighborhood',
    description:
      'cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non',
    imageSrc: 'http://dummyimage.com/101x100.png/5fa2dd/ffffff',
  },
  {
    name: 'Goliath heron',
    topic: 'neighborhood',
    description:
      'in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit',
    imageSrc: 'http://dummyimage.com/180x100.png/ff4444/ffffff',
  },
  {
    name: "Verreaux's sifaka",
    topic: 'neighborhood',
    description:
      'odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit',
    imageSrc: 'http://dummyimage.com/119x100.png/ff4444/ffffff',
  },
  {
    name: 'Heron, black-crowned night',
    topic: 'recommendations',
    description:
      'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus',
    imageSrc: 'http://dummyimage.com/112x100.png/ff4444/ffffff',
  },
  {
    name: 'Cormorant, pied',
    topic: 'playdates',
    description:
      'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc',
    imageSrc: 'http://dummyimage.com/237x100.png/cc0000/ffffff',
  },
  {
    name: 'Blackish oystercatcher',
    topic: 'recommendations',
    description:
      'nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede',
    imageSrc: 'http://dummyimage.com/113x100.png/5fa2dd/ffffff',
  },
  {
    name: 'Nubian bee-eater',
    topic: 'recommendations',
    description:
      'dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer',
    imageSrc: 'http://dummyimage.com/203x100.png/5fa2dd/ffffff',
  },
  {
    name: 'Wagtail, african pied',
    topic: 'playdates',
    description:
      'praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel',
    imageSrc: 'http://dummyimage.com/154x100.png/ff4444/ffffff',
  },
  {
    name: 'White-throated toucan',
    topic: 'recommendations',
    description:
      'nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum',
    imageSrc: 'http://dummyimage.com/234x100.png/dddddd/000000',
  },
  {
    name: 'Creeper, black-tailed tree',
    topic: 'exotic pets',
    description:
      'luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus',
    imageSrc: 'http://dummyimage.com/141x100.png/5fa2dd/ffffff',
  },
  {
    name: 'Marshbird, brown and yellow',
    topic: 'playdates',
    description:
      'quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt',
    imageSrc: 'http://dummyimage.com/189x100.png/cc0000/ffffff',
  },
  {
    name: 'Phalarope, red',
    topic: 'playdates',
    description:
      'vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor',
    imageSrc: 'http://dummyimage.com/210x100.png/cc0000/ffffff',
  },
];

module.exports = groups;
