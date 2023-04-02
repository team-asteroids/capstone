const events = [
  {
    zip_code: 11215,
    event_start: '2023-05-11 10:00:00',
    event_end: '2023-05-13 20:00:00',
    topic: 'Woofstock',
    imageSrc:
      'http://moderndogmagazine.com/sites/default/files/styles/slidehsow-banner/public/images/articles/top_images/WoofstockHeader.jpg?itok=rmKhV89F',
    description:
      "This annual festival is a celebration of all things dog, featuring live music, food trucks, vendors, and dog-friendly activities. Located in the heart of Brooklyn's Prospect Park, Woofstock is a must-attend event for dog lovers. Address: 95 Prospect Park West, Brooklyn, NY 11215.",
    creatorId: 1,
  },
  {
    zip_code: 10021,
    event_start: '2023-05-15 10:00:00',
    event_end: '2023-05-15 13:30:00',
    topic: 'Central Park Paws',
    imageSrc:
      'https://www.rover.com/blog/wp-content/uploads/2013/06/central-park-dogs.jpg',
    description:
      'This monthly gathering brings together dog owners and their furry friends for a fun-filled morning in Central Park. Activities include dog yoga, agility training, and socializing with other pups. Address: 5th Ave & E 72nd St, New York, NY 10021.',
    creatorId: 2,
  },
  {
    zip_code: 10009,
    event_start: '2023-10-31 10:00:00',
    event_end: '2023-10-31 20:00:00',
    topic: 'Halloween Dog Parade',
    imageSrc:
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2014/October/141006/2D274906947226-dog9.jpg',
    description:
      "Every October, Tompkins Square Park hosts a Halloween Dog Parade where pups and their owners dress up in costume and strut their stuff. It's a hilarious and heartwarming event that's sure to put a smile on your face. Address: 500 E 9th St, New York, NY 10009.",
    creatorId: 3,
  },
  {
    zip_code: 10025,
    event_start: '2023-07-01 10:00:00',
    event_end: '2023-07-03 20:00:00',
    topic: 'Dog Film Festival',
    imageSrc:
      'https://nationaltoday.com/wp-content/uploads/2022/07/28-Dog-Film-Festival-640x514.jpg',
    description:
      'This two-day event showcases films made by and about dogs. The festival takes place at Symphony Space on the Upper West Side and includes screenings, Q&A sessions with filmmakers, and even an adoptable dog lounge. Address: 2537 Broadway, New York, NY 10025.',
    creatorId: 4,
  },
  {
    zip_code: 11224,
    event_start: '2023-07-01 10:00:00',
    event_end: '2023-07-03 20:00:00',
    topic: 'Bark in the Park',
    imageSrc:
      'https://weezevent.com/wp-content/uploads/2019/08/27143613/woof-run-evenement-canin-1000x640.jpg',
    description:
      'Presented by the Brooklyn Cyclones minor league baseball team, Bark in the Park allows fans to bring their dogs to the stadium for a game. The event includes dog-friendly vendors, a pre-game parade, and even a special seating section just for pups. Address: 1904 Surf Ave, Brooklyn, NY 11224.',
    creatorId: 5,
  },
  {
    zip_code: 10013,
    event_start: '2023-06-15 13:00:00',
    event_end: '2023-06-15 17:00:00',
    topic: 'Strut Your Mutt',
    imageSrc:
      'https://img.freepik.com/free-photo/sportive-dog-performing-during-lure-coursing-competition_155003-42931.jpg?w=996&t=st=1680379502~exp=1680380102~hmac=171991560f3b90dcdfbbcc31c3c13b2de91fe24c94e181e926a9224e0c8bb993',
    description:
      'This annual event is a fundraiser for Best Friends Animal Society, a national animal welfare organization. Participants walk their dogs and raise money for homeless pets. The event also includes vendors, food trucks, and dog-friendly activities. Address: Hudson River Park, Pier 26, New York, NY 10013.',
    creatorId: 6,
  },
  {
    zip_code: 10009,
    event_start: '2023-04-28 13:00:00',
    event_end: '2023-04-28 18:00:00',
    topic: 'Corgi Con',
    imageSrc:
      'https://images.squarespace-cdn.com/content/v1/56d0eb1e07eaa0756ae14d33/a84ad437-2370-4d79-baaf-94df5b3ee237/154371640_3705116639523704_2345728458202704538_n.jpeg',
    description:
      'This bi-annual gathering brings together corgi owners and enthusiasts for a day of corgi-related activities and fun. Located in the East Village, the event includes a corgi costume contest, a corgi parade, and vendors selling corgi-themed merchandise. Address: Tompkins Square Park, 500 E 9th St, New York, NY 10009.',
    creatorId: 7,
  },
  {
    zip_code: 10002,
    event_start: '2023-04-12 14:30:00',
    event_end: '2023-04-28 18:00:00',
    topic: 'Canine Cruise',
    imageSrc: 'https://media.timeout.com/images/105911496/750/422/image.jpg',
    description:
      'This summer event allows dog owners to take their pups on a boat ride around the New York Harbor. Dogs ride for free, and the cruise includes a narration of NYC history and landmarks. Address: Pier 36, 299 South St, New York, NY 10002.',
    creatorId: 8,
  },
  {
    zip_code: 11102,
    event_start: '2023-07-01 12:30:00',
    event_end: '2023-07-01 18:00:00',
    topic: 'Dog Days of Summer Festival',
    imageSrc:
      'https://images.ctfassets.net/sfnkq8lmu5d7/2LUZAR1nyO0sZJC0nqL5cU/80275803d53b895ebe46cd57fb983e9d/2021-11-18_Is_Your_Dog-s_Rough_Play_Appropriate_.jpg',
    description:
      'This annual festival is a celebration of all things dog, featuring dog-friendly vendors, food trucks, and activities. Located in Astoria, the event also includes a doggie fashion show and a best trick contest. Address: Astoria Park, 19th St &, Hoyt Ave N, Queens, NY 11102.',
    creatorId: 9,
  },
  {
    zip_code: 10178,
    event_start: '2023-07-01 12:30:00',
    event_end: '2023-07-01 18:00:00',
    topic: 'Pooch Party',
    imageSrc:
      'https://images.ctfassets.net/sfnkq8lmu5d7/2LUZAR1nyO0sZJC0nqL5cU/80275803d53b895ebe46cd57fb983e9d/2021-11-18_Is_Your_Dog-s_Rough_Play_Appropriate_.jpg',
    description:
      'This event is hosted by the American Kennel Club and includes dog-friendly activities such as lure coursing, agility, and obedience demonstrations. The event also includes vendors, food trucks, and adoptable dogs. Address: AKC Museum of the Dog, 101 Park Ave, New York, NY 10178.',
    creatorId: 10,
  },
  {
    zip_code: 10024,
    event_start: '2023-07-02 12:30:00',
    event_end: '2023-07-02 18:00:00',
    topic: "Bideawee's Annual Walk for Animals",
    imageSrc: 'https://a-z-animals.com/media/2022/05/dogbreeds-1024x768.jpg',
    description:
      'This fundraising event is hosted by Bideawee, one of the oldest animal welfare organizations in the country. Participants walk with their dogs in Central Park to raise money for homeless pets. The event also includes vendors, food trucks, and activities for dogs and their owners. Address: Central Park, New York, NY 10024.',
    creatorId: 11,
  },
  {
    zip_code: 10019,
    event_start: '2023-04-15 12:30:00',
    event_end: '2023-04-15 18:00:00',
    topic: 'Westminster Kennel Club Dog Show',
    imageSrc:
      'https://www.akc.org/wp-content/uploads/2020/02/WKCWK-2020-02-11-21.13.31-DSC06980.jpg',
    description:
      'This annual event is one of the most prestigious dog shows in the world, featuring top dogs from around the country competing in various categories. The event also includes vendors selling dog-related merchandise and accessories. Address: The Piers, 711 12th Ave, New York, NY 10019.',
    creatorId: 13,
  },
  {
    zip_code: 10019,
    event_start: '2023-08-05 19:30:00',
    event_end: '2023-08-05 21:00:00',
    topic: 'My Dog Loves Central Park Fair',
    imageSrc:
      'https://img.freepik.com/free-photo/sportive-dog-performing-during-lure-coursing-competition_155003-42931.jpg?w=996&t=st=1680379502~exp=1680380102~hmac=171991560f3b90dcdfbbcc31c3c13b2de91fe24c94e181e926a9224e0c8bb993',
    description:
      'This free event is hosted by Central Park Paws, a volunteer group dedicated to improving the lives of dogs and their owners in Central Park. The fair includes vendors, games, and activities for dogs and their owners. Address: Central Park, 59th St and 5th Ave, New York, NY 10022.',
    creatorId: 14,
  },
  {
    zip_code: 11804,
    event_start: '2023-09-07 09:30:00',
    event_end: '2023-09-07 13:30:00',
    topic: 'K9 Mudder',
    imageSrc:
      'https://ruffmudder.ca/wp-content/uploads/2022/07/ruff-mudder-2017_07-1024x682.jpg',
    description:
      'This annual event is a 5k race that participants run with their dogs, featuring various obstacles along the way. The event also includes vendors and activities for dogs and their owners. Address: Old Bethpage Village Restoration, 1303 Round Swamp Rd, Old Bethpage, NY 11804.',
    creatorId: 15,
  },
];

const eventRsvp = [
  {
    eventId: 1,
    userId: 10,
  },
  {
    eventId: 2,
    userId: 17,
  },
  {
    eventId: 3,
    userId: 16,
  },
  {
    eventId: 4,
    userId: 20,
  },
  {
    eventId: 4,
    userId: 1,
  },
  {
    eventId: 4,
    userId: 1,
  },
  {
    eventId: 5,
    userId: 18,
  },
  {
    eventId: 5,
    userId: 4,
  },
  {
    eventId: 7,
    userId: 10,
  },
  {
    eventId: 8,
    userId: 1,
  },
  {
    eventId: 8,
    userId: 6,
  },
  {
    eventId: 9,
    userId: 4,
  },
  {
    eventId: 9,
    userId: 9,
  },
  {
    eventId: 10,
    userId: 4,
  },
  {
    eventId: 10,
    userId: 2,
  },
  {
    eventId: 10,
    userId: 11,
  },
  {
    eventId: 11,
    userId: 3,
  },
  {
    eventId: 11,
    userId: 4,
  },
  {
    eventId: 11,
    userId: 3,
  },
  {
    eventId: 12,
    userId: 2,
  },
  {
    eventId: 12,
    userId: 3,
  },
  {
    eventId: 12,
    userId: 4,
  },
  {
    eventId: 12,
    userId: 8,
  },
  {
    eventId: 13,
    userId: 14,
  },
  {
    eventId: 13,
    userId: 5,
  },
  {
    eventId: 13,
    userId: 1,
  },
  {
    eventId: 13,
    userId: 6,
  },
  {
    eventId: 14,
    userId: 5,
  },
  {
    eventId: 14,
    userId: 4,
  },
  {
    eventId: 14,
    userId: 4,
  },
  {
    eventId: 14,
    userId: 8,
  },
  {
    eventId: 14,
    userId: 16,
  },
  {
    eventId: 14,
    userId: 14,
  },
  {
    eventId: 1,
    userId: 17,
  },
  {
    eventId: 1,
    userId: 17,
  },
  {
    eventId: 1,
    userId: 18,
  },
  {
    eventId: 2,
    userId: 8,
  },
  {
    eventId: 2,
    userId: 6,
  },
  {
    eventId: 2,
    userId: 4,
  },
  {
    eventId: 3,
    userId: 6,
  },
  {
    eventId: 3,
    userId: 3,
  },
  {
    eventId: 3,
    userId: 9,
  },
  {
    eventId: 3,
    userId: 18,
  },
  {
    eventId: 4,
    userId: 9,
  },
  {
    eventId: 4,
    userId: 8,
  },
  {
    eventId: 5,
    userId: 7,
  },
  {
    eventId: 5,
    userId: 3,
  },
  {
    eventId: 5,
    userId: 12,
  },
  {
    eventId: 5,
    userId: 18,
  },
  {
    eventId: 6,
    userId: 11,
  },
  {
    eventId: 6,
    userId: 12,
  },
  {
    eventId: 7,
    userId: 10,
  },
  {
    eventId: 7,
    userId: 10,
  },
  {
    eventId: 7,
    userId: 2,
  },

  {
    eventId: 7,
    userId: 9,
  },
  {
    eventId: 8,
    userId: 5,
  },

  {
    eventId: 8,
    userId: 1,
  },
  {
    eventId: 9,
    userId: 20,
  },
  {
    eventId: 9,
    userId: 8,
  },
  {
    eventId: 9,
    userId: 8,
  },
  {
    eventId: 9,
    userId: 8,
  },
  {
    eventId: 9,
    userId: 12,
  },
  {
    eventId: 10,
    userId: 11,
  },
  {
    eventId: 10,
    userId: 17,
  },
  {
    eventId: 10,
    userId: 12,
  },
  {
    eventId: 10,
    userId: 7,
  },
  {
    eventId: 11,
    userId: 7,
  },
  {
    eventId: 12,
    userId: 6,
  },
  {
    eventId: 12,
    userId: 6,
  },
  {
    eventId: 12,
    userId: 6,
  },
  {
    eventId: 13,
    userId: 5,
  },
  {
    eventId: 13,
    userId: 5,
  },
  {
    eventId: 13,
    userId: 7,
  },
  {
    eventId: 14,
    userId: 18,
  },
  {
    eventId: 14,
    userId: 14,
  },
  {
    eventId: 15,
    userId: 13,
  },
  {
    eventId: 15,
    userId: 12,
  },
  {
    eventId: 15,
    userId: 12,
  },
  {
    eventId: 15,
    userId: 15,
  },
  {
    eventId: 15,
    userId: 12,
  },
  {
    eventId: 1,
    userId: 3,
  },
  {
    eventId: 1,
    userId: 2,
  },
  {
    eventId: 1,
    userId: 2,
  },
  {
    eventId: 1,
    userId: 1,
  },
  {
    eventId: 2,
    userId: 1,
  },
  {
    eventId: 2,
    userId: 1,
  },
];

module.exports = { events, eventRsvp };
