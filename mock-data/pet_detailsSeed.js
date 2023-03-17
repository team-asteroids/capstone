const pet_details = [
  {
    about:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '4+',
    walkDuration: '30',
    walkDetails:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    medications: 'topical',
    medicationDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    additionalDetails:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    vetInfo: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    petId: 1,
  },
  {
    about:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'unsure',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '3',
    walkDuration: '30',
    walkDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    medications: 'pill',
    medicationDetails:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    additionalDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    vetInfo:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    petId: 2,
  },
  {
    about:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'unsure',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    medications: 'pill',
    medicationDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    additionalDetails:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    vetInfo:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    petId: 3,
  },
  {
    about:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'depends',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '3',
    walkDuration: '60',
    walkDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    medications: 'topical',
    medicationDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    additionalDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    vetInfo:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    petId: 4,
  },
  {
    about:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'yes',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    walkSchedule: '3',
    walkDuration: '60',
    walkDetails:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    medications: 'injection',
    medicationDetails:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    additionalDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    vetInfo:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    petId: 5,
  },
  {
    about:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    walkSchedule: '1',
    walkDuration: '15',
    walkDetails:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    medications: 'topical',
    medicationDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    additionalDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    vetInfo:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    petId: 6,
  },
  {
    about:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'unsure',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    medications: 'injection',
    medicationDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    additionalDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    vetInfo:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    petId: 7,
  },
  {
    about: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'depends',
    energyLevels: 'high',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    medications: 'topical',
    medicationDetails:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    additionalDetails:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    vetInfo:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    petId: 8,
  },
  {
    about:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'custom',
    foodDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    walkSchedule: '3',
    walkDuration: '30',
    walkDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    medications: 'topical',
    medicationDetails:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    additionalDetails:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    vetInfo:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    petId: 9,
  },
  {
    about: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'depends',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    walkSchedule: '3',
    walkDuration: '30',
    walkDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    medications: 'injection',
    medicationDetails:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    additionalDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    vetInfo:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    petId: 10,
  },
  {
    about:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    walkSchedule: '1',
    walkDuration: '30',
    walkDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    medications: 'injection',
    medicationDetails:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    additionalDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    vetInfo:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    petId: 11,
  },
  {
    about:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'depends',
    energyLevels: 'low',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    walkSchedule: '1',
    walkDuration: '15',
    walkDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    medications: 'topical',
    medicationDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    additionalDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    vetInfo:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    petId: 12,
  },
  {
    about:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'unsure',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    walkSchedule: '1',
    walkDuration: '30',
    walkDetails:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    medications: 'pill',
    medicationDetails:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    additionalDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    vetInfo:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    petId: 13,
  },
  {
    about:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    medications: 'topical',
    medicationDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    additionalDetails:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    vetInfo:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    petId: 14,
  },
  {
    about:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    walkSchedule: '3',
    walkDuration: '30',
    walkDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    medications: 'pill',
    medicationDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    additionalDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    vetInfo:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    petId: 15,
  },
  {
    about:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'no',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    walkSchedule: '1',
    walkDuration: '15',
    walkDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    medications: 'topical',
    medicationDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    additionalDetails:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    vetInfo:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    petId: 16,
  },
  {
    about:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'yes',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    medications: 'topical',
    medicationDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    additionalDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    vetInfo:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    petId: 17,
  },
  {
    about:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'no',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    walkSchedule: '4+',
    walkDuration: '15',
    walkDetails:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    medications: 'pill',
    medicationDetails:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    additionalDetails:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    vetInfo:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    petId: 18,
  },
  {
    about:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'no',
    energyLevels: 'high',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    walkSchedule: '4+',
    walkDuration: '30',
    walkDetails:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    medications: 'topical',
    medicationDetails:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    additionalDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    vetInfo:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    petId: 19,
  },
  {
    about:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'yes',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    walkSchedule: '4+',
    walkDuration: '60',
    walkDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    medications: 'topical',
    medicationDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    additionalDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    vetInfo:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    petId: 20,
  },
  {
    about:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'twice a day',
    foodDetails: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    walkSchedule: '4+',
    walkDuration: '60',
    walkDetails: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    medications: 'injection',
    medicationDetails:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    additionalDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    vetInfo:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    petId: 21,
  },
  {
    about:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'yes',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    walkSchedule: '4+',
    walkDuration: '30',
    walkDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    medications: 'pill',
    medicationDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    additionalDetails:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    vetInfo:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    petId: 22,
  },
  {
    about:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'depends',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    walkSchedule: '3',
    walkDuration: '60',
    walkDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    medications: 'injection',
    medicationDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    additionalDetails:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    vetInfo:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    petId: 23,
  },
  {
    about:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'unsure',
    energyLevels: 'high',
    feedingSchedule: 'morning',
    foodDetails: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    walkSchedule: '4+',
    walkDuration: '15',
    walkDetails:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    medications: 'pill',
    medicationDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    additionalDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    vetInfo:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    petId: 24,
  },
  {
    about:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    walkSchedule: '1',
    walkDuration: '30',
    walkDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    medications: 'topical',
    medicationDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    additionalDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    vetInfo:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    petId: 25,
  },
  {
    about:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'yes',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    walkSchedule: '2',
    walkDuration: '30',
    walkDetails:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    medications: 'topical',
    medicationDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    additionalDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    vetInfo:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    petId: 26,
  },
  {
    about:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'depends',
    energyLevels: 'low',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '4+',
    walkDuration: '30',
    walkDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    medications: 'injection',
    medicationDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    additionalDetails:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    vetInfo:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    petId: 27,
  },
  {
    about:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'depends',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    medications: 'topical',
    medicationDetails:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    additionalDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    vetInfo:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    petId: 28,
  },
  {
    about: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'depends',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    medications: 'topical',
    medicationDetails:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    additionalDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    vetInfo:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    petId: 29,
  },
  {
    about:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    medications: 'injection',
    medicationDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    additionalDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    vetInfo:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    petId: 30,
  },
  {
    about:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'unsure',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '4+',
    walkDuration: '15',
    walkDetails:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    medications: 'injection',
    medicationDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    additionalDetails:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    vetInfo:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    petId: 31,
  },
  {
    about:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'yes',
    energyLevels: 'high',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    walkSchedule: '1',
    walkDuration: '60',
    walkDetails:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    medications: 'topical',
    medicationDetails:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    additionalDetails:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    vetInfo:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    petId: 32,
  },
  {
    about:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    walkSchedule: '2',
    walkDuration: '30',
    walkDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    medications: 'topical',
    medicationDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    additionalDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    vetInfo:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    petId: 33,
  },
  {
    about: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    walkSchedule: '1',
    walkDuration: '60',
    walkDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    medications: 'injection',
    medicationDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    additionalDetails:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    vetInfo:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    petId: 34,
  },
  {
    about:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'depends',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    walkSchedule: '1',
    walkDuration: '30',
    walkDetails: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    medications: 'injection',
    medicationDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    additionalDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    vetInfo:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    petId: 35,
  },
  {
    about:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'no',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    walkSchedule: '4+',
    walkDuration: '60',
    walkDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    medications: 'topical',
    medicationDetails: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    additionalDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    vetInfo:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    petId: 36,
  },
  {
    about:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'depends',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    walkSchedule: '3',
    walkDuration: '60',
    walkDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    medications: 'topical',
    medicationDetails:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    additionalDetails:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    vetInfo: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    petId: 37,
  },
  {
    about:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'unsure',
    energyLevels: 'high',
    feedingSchedule: 'morning',
    foodDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    walkSchedule: '4+',
    walkDuration: '30',
    walkDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    medications: 'pill',
    medicationDetails:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    additionalDetails:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    vetInfo:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    petId: 38,
  },
  {
    about:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '2',
    walkDuration: '15',
    walkDetails:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    medications: 'pill',
    medicationDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    additionalDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    vetInfo:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    petId: 39,
  },
  {
    about:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'custom',
    foodDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    walkSchedule: '1',
    walkDuration: '60',
    walkDetails:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    medications: 'pill',
    medicationDetails:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    additionalDetails:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    vetInfo:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    petId: 40,
  },
  {
    about:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'yes',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    walkSchedule: '4+',
    walkDuration: '60',
    walkDetails:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    medications: 'injection',
    medicationDetails:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    additionalDetails:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    vetInfo:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    petId: 41,
  },
  {
    about:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'depends',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    walkSchedule: '2',
    walkDuration: '15',
    walkDetails: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    medications: 'injection',
    medicationDetails:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    additionalDetails:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    vetInfo:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    petId: 42,
  },
  {
    about:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'no',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    walkSchedule: '1',
    walkDuration: '15',
    walkDetails: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    medications: 'injection',
    medicationDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    additionalDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    vetInfo:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    petId: 43,
  },
  {
    about:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'yes',
    energyLevels: 'high',
    feedingSchedule: 'morning',
    foodDetails:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    walkSchedule: '4+',
    walkDuration: '15',
    walkDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    medications: 'injection',
    medicationDetails:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    additionalDetails:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    vetInfo:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    petId: 44,
  },
  {
    about:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'depends',
    energyLevels: 'high',
    feedingSchedule: 'morning',
    foodDetails:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    walkSchedule: '2',
    walkDuration: '15',
    walkDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    medications: 'pill',
    medicationDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    additionalDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    vetInfo:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    petId: 45,
  },
  {
    about:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'yes',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    walkSchedule: '2',
    walkDuration: '15',
    walkDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    medications: 'topical',
    medicationDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    additionalDetails:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    vetInfo:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    petId: 46,
  },
  {
    about:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'no',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    walkSchedule: '3',
    walkDuration: '30',
    walkDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    medications: 'topical',
    medicationDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    additionalDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    vetInfo:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    petId: 47,
  },
  {
    about:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'no',
    energyLevels: 'high',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    walkSchedule: '2',
    walkDuration: '30',
    walkDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    medications: 'injection',
    medicationDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    additionalDetails:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    vetInfo:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    petId: 48,
  },
  {
    about:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'yes',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    walkSchedule: '2',
    walkDuration: '30',
    walkDetails: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    medications: 'injection',
    medicationDetails:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    additionalDetails:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    vetInfo:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    petId: 49,
  },
  {
    about:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'no',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    walkSchedule: '1',
    walkDuration: '30',
    walkDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    medications: 'injection',
    medicationDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    additionalDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    vetInfo:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    petId: 50,
  },
  {
    about: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'yes',
    energyLevels: 'moderate',
    feedingSchedule: 'custom',
    foodDetails: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    medications: 'pill',
    medicationDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    additionalDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    vetInfo:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    petId: 51,
  },
  {
    about:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'yes',
    energyLevels: 'moderate',
    feedingSchedule: 'custom',
    foodDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    medications: 'pill',
    medicationDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    additionalDetails:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    vetInfo:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    petId: 52,
  },
  {
    about:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    walkSchedule: '1',
    walkDuration: '60',
    walkDetails:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    medications: 'injection',
    medicationDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    additionalDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    vetInfo:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    petId: 53,
  },
  {
    about: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'unsure',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    medications: 'pill',
    medicationDetails:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    additionalDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    vetInfo: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    petId: 54,
  },
  {
    about:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'depends',
    energyLevels: 'high',
    feedingSchedule: 'morning',
    foodDetails: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    walkSchedule: '4+',
    walkDuration: '30',
    walkDetails:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    medications: 'pill',
    medicationDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    additionalDetails:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    vetInfo:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    petId: 55,
  },
  {
    about: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'yes',
    energyLevels: 'low',
    feedingSchedule: 'twice a day',
    foodDetails: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    medications: 'injection',
    medicationDetails:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    additionalDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    vetInfo:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    petId: 56,
  },
  {
    about:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    walkSchedule: '3',
    walkDuration: '30',
    walkDetails:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    medications: 'topical',
    medicationDetails:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    additionalDetails:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    vetInfo:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    petId: 57,
  },
  {
    about: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'no',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    walkSchedule: '4+',
    walkDuration: '60',
    walkDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    medications: 'topical',
    medicationDetails:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    additionalDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    vetInfo:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    petId: 58,
  },
  {
    about:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'yes',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    walkSchedule: '1',
    walkDuration: '15',
    walkDetails:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    medications: 'injection',
    medicationDetails:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    additionalDetails:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    vetInfo:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    petId: 59,
  },
  {
    about:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    medications: 'topical',
    medicationDetails: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    additionalDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    vetInfo:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    petId: 60,
  },
  {
    about:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'yes',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    walkSchedule: '4+',
    walkDuration: '15',
    walkDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    medications: 'pill',
    medicationDetails:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    additionalDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    vetInfo:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    petId: 61,
  },
  {
    about:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'custom',
    foodDetails:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    walkSchedule: '1',
    walkDuration: '30',
    walkDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    medications: 'pill',
    medicationDetails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    additionalDetails:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    vetInfo:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    petId: 62,
  },
  {
    about:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'unsure',
    energyLevels: 'high',
    feedingSchedule: 'morning',
    foodDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    walkSchedule: '4+',
    walkDuration: '15',
    walkDetails:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    medications: 'topical',
    medicationDetails:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    additionalDetails:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    vetInfo:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    petId: 63,
  },
  {
    about:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'depends',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    walkSchedule: '4+',
    walkDuration: '30',
    walkDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    medications: 'injection',
    medicationDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    additionalDetails:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    vetInfo:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    petId: 64,
  },
  {
    about:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'depends',
    energyLevels: 'high',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    walkSchedule: '2',
    walkDuration: '15',
    walkDetails:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    medications: 'topical',
    medicationDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    additionalDetails:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    vetInfo: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    petId: 65,
  },
  {
    about:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'no',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    walkSchedule: '3',
    walkDuration: '60',
    walkDetails:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    medications: 'pill',
    medicationDetails:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    additionalDetails:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    vetInfo:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    petId: 66,
  },
  {
    about:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'yes',
    energyLevels: 'moderate',
    feedingSchedule: 'morning',
    foodDetails: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    walkSchedule: '2',
    walkDuration: '60',
    walkDetails:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    medications: 'injection',
    medicationDetails:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    additionalDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    vetInfo: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    petId: 67,
  },
  {
    about:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'depends',
    energyLevels: 'high',
    feedingSchedule: 'morning',
    foodDetails:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    walkSchedule: '4+',
    walkDuration: '15',
    walkDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    medications: 'pill',
    medicationDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    additionalDetails:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    vetInfo:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    petId: 68,
  },
  {
    about:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    microchipped: false,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    walkSchedule: '3',
    walkDuration: '30',
    walkDetails:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    medications: 'topical',
    medicationDetails:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    additionalDetails:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    vetInfo:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    petId: 69,
  },
  {
    about:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: false,
    reactivity:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'no',
    friendlyWithChildren: 'depends',
    energyLevels: 'high',
    feedingSchedule: 'custom',
    foodDetails:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    walkSchedule: '2',
    walkDuration: '30',
    walkDetails: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    medications: 'topical',
    medicationDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    additionalDetails: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    vetInfo:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    petId: 70,
  },
  {
    about:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    microchipped: false,
    housetrained: true,
    cratetrained: 'no',
    spayedOrNeutered: true,
    reactivity:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    friendlyWithDogs: 'unsure',
    friendlyWithCats: 'yes',
    friendlyWithChildren: 'unsure',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    walkSchedule: '4+',
    walkDuration: '60',
    walkDetails:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    medications: 'pill',
    medicationDetails:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    canBeLeftAlone: '1-4 hours',
    canBeLeftAloneDetails:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    additionalDetails:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    vetInfo:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    petId: 71,
  },
  {
    about:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'yes',
    spayedOrNeutered: true,
    reactivity:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    friendlyWithDogs: 'no',
    friendlyWithCats: 'unsure',
    friendlyWithChildren: 'no',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '1',
    walkDuration: '15',
    walkDetails:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    medications: 'pill',
    medicationDetails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    additionalDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    vetInfo:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    petId: 72,
  },
  {
    about:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    microchipped: true,
    housetrained: false,
    cratetrained: 'no',
    spayedOrNeutered: false,
    reactivity:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'depends',
    energyLevels: 'low',
    feedingSchedule: 'custom',
    foodDetails:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    medications: 'injection',
    medicationDetails:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    additionalDetails:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    vetInfo:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    petId: 73,
  },
  {
    about:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: true,
    reactivity:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    friendlyWithDogs: 'depends',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'no',
    energyLevels: 'moderate',
    feedingSchedule: 'twice a day',
    foodDetails: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    walkSchedule: '3',
    walkDuration: '60',
    walkDetails:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    medications: 'topical',
    medicationDetails:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    canBeLeftAlone: '<1 hour',
    canBeLeftAloneDetails:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    additionalDetails:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    vetInfo:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    petId: 74,
  },
  {
    about:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    microchipped: true,
    housetrained: true,
    cratetrained: 'n/a',
    spayedOrNeutered: false,
    reactivity:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    friendlyWithDogs: 'yes',
    friendlyWithCats: 'depends',
    friendlyWithChildren: 'depends',
    energyLevels: 'low',
    feedingSchedule: 'morning',
    foodDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    walkSchedule: '3',
    walkDuration: '15',
    walkDetails:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    medications: 'pill',
    medicationDetails:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    canBeLeftAlone: 'custom',
    canBeLeftAloneDetails:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    additionalDetails:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    vetInfo:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    petId: 75,
  },
];

module.exports = pet_details;
