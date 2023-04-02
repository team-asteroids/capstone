const posts = [
  {
    content: `Just adopted a new pup from the NYC animal shelter. Welcome home!`,
    creatorId: 5,
  },
  {
    content: `I love walking my dog through Central Park on sunny days like this!`,
    creatorId: 8,
  },
  {
    content: `I just discovered a new dog-friendly cafe in Brooklyn. So cozy!`,
    creatorId: 14,
  },
  {
    content: `My dog and I just went on a ferry ride to see the Statue of Liberty. So much fun!`,
    creatorId: 7,
  },
  {
    content: `I can't wait for the annual NYC Dog Halloween Parade. My pup's costume is going to be epic!`,
    creatorId: 2,
  },
  {
    content: `I just got back from the West Side Dog Run. It's always a great place to meet other dog owners!`,
    creatorId: 1,
  },
  {
    content: `My dog and I love exploring the dog-friendly shops and cafes in the East Village. So many cute places!`,
    creatorId: 11,
  },
  {
    content: `I just signed up for the NYC Dog Agility Trials. Wish us luck!`,
    creatorId: 19,
  },
  {
    content: `I discovered a new dog-friendly rooftop bar in Manhattan. The views are amazing!`,
    creatorId: 4,
  },
  {
    content: `My dog and I just took a day trip to Coney Island. He loved the beach!`,
    creatorId: 13,
  },
  {
    content: `I just registered my dog for the annual New York City Dog Show. We've been practicing for months!`,
    creatorId: 17,
  },
  {
    content: `I just discovered a new dog park in Queens. It's huge and has lots of amenities!`,
    creatorId: 9,
  },
  {
    content: `I'm so excited to take my dog to the NYC Dog Film Festival next weekend. We love watching movies together!`,
    creatorId: 6,
  },
  {
    content: `My dog and I just went on a tour of some of the famous dog statues around NYC. It was a blast!`,
    creatorId: 12,
  },
  {
    content: `I just signed up for a dog-friendly cooking class in Chelsea. Can't wait to learn some new recipes!`,
    creatorId: 15,
  },
  {
    content: `My dog and I love going on morning runs along the Hudson River. The view is always beautiful!`,
    creatorId: 3,
  },
  {
    content: `I just discovered a new dog-friendly bookstore in Brooklyn. They have a great selection of dog books!`,
    creatorId: 20,
  },
  {
    content: `My dog and I just took a sunset cruise around Manhattan. The city skyline is stunning!`,
    creatorId: 10,
  },
  {
    content: `I'm so excited to attend the annual New York City Dog Expo next month. There will be so many fun activities!`,
    creatorId: 18,
  },
  {
    content: `I just signed up for a dog yoga class in Midtown. It's going to be a great workout for both of us!`,
    creatorId: 16,
  },
];

const postComments = [
  {
    content: "Wow, I'm blown away by this!",
    postId: 3,
    userId: 5,
  },
  {
    content: 'Thanks for sharing such an inspiring post!',
    postId: 4,
    userId: 2,
  },
  {
    content: 'This is fantastic! Keep up the great work!',
    postId: 5,
    userId: 9,
  },
  {
    content: "I love this post! It's so uplifting!",
    postId: 6,
    userId: 12,
  },
  {
    content: "This is amazing! I'm really impressed!",
    postId: 7,
    userId: 7,
  },
  {
    content: 'Thank you for sharing such a positive message!',
    postId: 8,
    userId: 10,
  },
  {
    content: "This is awesome! You're doing great things!",
    postId: 9,
    userId: 18,
  },
  {
    content: "I'm so inspired by this post! Thank you for sharing!",
    postId: 10,
    userId: 4,
  },
  {
    content: 'This is fantastic news! Congratulations!',
    postId: 11,
    userId: 16,
  },
  {
    content: 'This is such an uplifting post! I needed this today. Thank you!',
    postId: 12,
    userId: 19,
  },
];

const postLikes = [
  { userId: 1, postId: 1 },
  { userId: 2, postId: 2 },
  { userId: 3, postId: 3 },
];

const postCommentLikes = [
  { userId: 1, postCommentId: 1 },
  { userId: 2, postCommentId: 2 },
  { userId: 3, postCommentId: 3 },
];

module.exports = { postComments, posts, postLikes, postCommentLikes };
