const groups = [
  {
    name: 'NYC Dog Owners Group',
    topic: 'recommendations',
    description:
      'This group is dedicated to advocating for dog owners in NYC and promoting responsible dog ownership. We host events and meetups throughout the city, and provide resources for dog owners on topics such as training, health, and legal issues.',
    imageSrc: '',
    creatorId: 12,
  },
  {
    name: 'Big Apple Greyhound Adoption',
    topic: 'playdates',
    description:
      'This organization rescues retired racing greyhounds and finds them loving homes in the NYC area. We also provide education and support for adopters, and host events to raise awareness about the breed.',
    imageSrc:
      'https://img.freepik.com/free-photo/greyhound-dog-enjoying-his-walk_52683-102227.jpg?w=900&t=st=1680379838~exp=1680380438~hmac=ff58ca9ecd2c41816d3472632c06538b9388a067a2cf9b1ebc1cea5b83e8abb8',
    creatorId: 1,
  },
  {
    name: 'Pit Bull Rescue Central',
    topic: 'playdates',
    description:
      'This group is dedicated to rescuing and rehabilitating pit bulls and finding them permanent homes. We provide education and resources for owners and advocates, and work to combat stereotypes about the breed.',
    imageSrc:
      'https://img.freepik.com/free-photo/adorable-pitbull-dogs-looking-up_23-2149131461.jpg?w=900&t=st=1680379982~exp=1680380582~hmac=1faf2c0d285629fa789a688685a3a2b77102f312ed5c200c5c329f8d995636d3',
    creatorId: 19,
  },
  {
    name: 'New York City Shiba Inu Meetup Group',
    topic: 'exotic pets',
    description:
      'This group brings together owners of Shiba Inus, a popular breed in NYC, for playdates and socialization. We also provide resources and support for owners on topics such as training and health.',
    imageSrc:
      'https://hellobark.com/wp-content/uploads/shiba-inu-5-1024x683.jpg',
    creatorId: 16,
  },
  {
    name: 'NYC Dachshund Meetup Group',
    topic: 'neighborhood',
    description:
      'This group is for owners of Dachshunds and Dachshund mixes in NYC. We host meetups and events throughout the city, and provide resources and support for owners on topics such as training and health.',
    imageSrc:
      'https://st4.depositphotos.com/1003366/27782/i/600/depositphotos_277821374-stock-photo-tvo-dogs-dachshunds-puppy-dog.jpg',
    creatorId: 5,
  },
  {
    name: 'Animal Haven',
    topic: 'neighborhood',
    description:
      'This animal rescue organization works to find homes for dogs (and cats) who are in need. We also provide support and resources for pet owners in the community, including training and behavior advice.',
    imageSrc:
      'https://www.rover.com/blog/wp-content/uploads/2016/04/costa-rica-dogs-1.jpg',
    creatorId: 4,
  },
  {
    name: 'NYC Pug Meetup Group',
    topic: 'exotic pets',
    description:
      'This group is for owners of Pugs in NYC. We host regular meetups and events where Pug owners can socialize and share tips on raising and caring for their dogs.',
    imageSrc:
      'https://dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/1-multi.jpg',
    creatorId: 5,
  },
  {
    name: 'Badass Brooklyn Animal Rescue',
    topic: 'exotic pets',
    description:
      'This rescue organization specializes in rescuing dogs from high-kill shelters in the South and bringing them to loving homes in the Northeast. TheWey also provide education and resources for pet owners, and advocate for animal welfare.',
    imageSrc:
      'https://www.rover.com/blog/wp-content/uploads/2016/04/costa-rica-dogs-2.jpg',
    creatorId: 12,
  },
  {
    name: 'NYC Schnauzers & Friends Meetup Group',
    topic: 'neighborhood',
    description:
      'This group is for owners of Schnauzers and other small breeds in NYC. We host regular meetups and events where owners can socialize and share tips on raising and caring for their dogs.',
    imageSrc:
      'https://www.schnauzernewyork.com/x/cdn/?https://storage.googleapis.com/production-homestead-v1-0-2/272/203272/5qBPRzhB/3b8a5d5fd0134c308fd7b6bcb9e99667',
    creatorId: 13,
  },
  {
    name: 'NYC Cocker Spaniel Meetup Group',
    topic: 'neighborhood',
    description:
      'This group is for owners of Cocker Spaniels in NYC. We host regular meetups and events where owners can socialize and share tips on raising and caring for their dogs.',
    imageSrc:
      'https://ryglengundogs.com/wp-content/uploads/2019/07/2017-slides-1.jpg',
    creatorId: 17,
  },
  {
    name: 'New York City Rescue Meetup Group',
    topic: 'neighborhood',
    description:
      'odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit',
    imageSrc:
      'https://www.holistapet.com/wp-content/uploads/2021/06/group-of-different-dogs-together.jpg',
    creatorId: 5,
  },
  {
    name: 'Paws and Pals',
    topic: 'recommendations',
    description:
      'This organization provides pet therapy services to hospitals, nursing homes, and other healthcare facilities. We also offer obedience training and other resources for pet owners',
    imageSrc:
      'https://www.science.org/do/10.1126/science.aal1098/abs/GDBP58_16x9.jpg',
    creatorId: 9,
  },
  {
    name: 'NYC Dachshund Meetup Group',
    topic: 'playdates',
    description:
      'This group is for owners of Dachshunds in NYC. ThWeey host regular meetups and events where owners can socialize and share tips on raising and caring for their dogs.',
    imageSrc:
      'https://st4.depositphotos.com/1003366/27782/i/600/depositphotos_277821374-stock-photo-tvo-dogs-dachshunds-puppy-dog.jpg',
    creatorId: 3,
  },
  {
    name: 'The Good Dog Foundation',
    topic: 'recommendations',
    description:
      'This organization provides animal-assisted therapy services to those in need, including hospitals, schools, and disaster relief efforts. We also offer training and certification programs for dogs and their owners.',
    imageSrc:
      'https://cdn.the-scientist.com/assets/articleNo/69962/aImg/45854/dogsrunningmain-o.jpg',
    creatorId: 12,
  },
  {
    name: 'NYC Foster Interest',
    topic: 'recommendations',
    description:
      "We understand that sometimes dogs find themselves in unfortunate situations and need temporary homes to help them get back on their paws. That's where our foster families come in! By opening up their homes and hearts, our members provide a safe and loving environment for dogs to thrive while they wait for their forever homes. Our group is a place where potential foster families can connect with reputable rescues and shelters in their area, and learn about the fostering process. We also provide support and resources for current fosters, including tips for dog care, training, and behavior.In addition, our members share heartwarming stories and photos of the dogs they've fostered, and celebrate when they find their forever homes. We believe that every dog deserves a second chance, and our group is committed to making that a reality, one foster family at a time.Thank you for joining our community and for making a difference in the lives of dogs in need!",
    imageSrc:
      'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/07/nine-dogs-in-grassy-field.jpg',
    creatorId: 9,
  },
];

module.exports = groups;
