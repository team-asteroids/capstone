// import mock data and models to seed db
const {
  db,
  User,
  Sitter,
  Sitter_Review,
  Sitter_Rating,
  Sitter_Pref,
  Sitter_Client,
  Pet,
  FavSitter,
  Pet_Detail,
  Booking,
  Event,
  Payment,
  Group,
  Group_Post,
  Message,
  Map,
  Post,
  Post_Comment,
  Access,
  FavGroup,
} = require('./server/db/index');
const user = require('./mock-data/userSeed');
const { events } = require('./mock-data/eventSeed');
const sitterList = require('./mock-data/sitterSeed');
const sitterRatingList = require('./mock-data/sitterRatingSeed');
const sitterReviewList = require('./mock-data/sitterReviewSeed');
const sitterClientList = require('./mock-data/sitterClient');
const sitterPrefsList = require('./mock-data/sitterPrefs');
const pets = require('./mock-data/petSeed');
const pet_details = require('./mock-data/pet_detailsSeed');
const payments = require('./mock-data/paymentSeed');
const { bookings } = require('./mock-data/bookingSeed');
const groups = require('./mock-data/groupSeed');
const groupPosts = require('./mock-data/groupPostSeed');
const messages = require('./mock-data/messageSeed');
const { posts, postComments } = require('./mock-data/postSeed');
const maps = require('./mock-data/mapSeed');
const accessList = require('./mock-data/accessSeed');
const { favSitters, favGroups } = require('./mock-data/favSeeds');

const init = async () => {
  try {
    await db.sync({ force: true });
    console.log('syncing the db');

    console.log('seeding users...');
    const seedUsers = await User.bulkCreate(user, {
      validate: true,
      individualHooks: true,
    });
    console.log('User seeding successful!');

    console.log('seeding events...');
    const seedEvents = await Event.bulkCreate(events, {
      validate: true,
    });
    console.log('Event seeding successful!');

    console.log('seeding sitters...');
    const seedSitters = await Sitter.bulkCreate(sitterList, {
      validate: true,
    });
    console.log('Sitter seeding successful!');

    console.log('seeding sitter ratings...');
    const seedSitterRatings = await Sitter_Rating.bulkCreate(sitterRatingList, {
      validate: true,
    });
    console.log('Sitter ratings seeding successful!');

    console.log('seeding sitter reviews...');
    const seedSitterReviews = await Sitter_Review.bulkCreate(sitterReviewList, {
      validate: true,
    });
    console.log('Sitter reviews seeding successful!');

    console.log('seeding sitter clients...');
    const seedSitterClients = await Sitter_Client.bulkCreate(sitterClientList, {
      validate: true,
    });
    console.log('Sitter clients seeding successful!');

    console.log('seeding sitter prefs...');
    const seedSitterPrefs = await Sitter_Pref.bulkCreate(sitterPrefsList, {
      validate: true,
    });
    console.log('Sitter prefs seeding successful!');

    console.log('seeding pets...');
    const seedPets = await Pet.bulkCreate(pets, {
      validate: true,
    });
    console.log('Pet seeding successful!');
    const seed_petDetails = await Pet_Detail.bulkCreate(pet_details, {
      validate: true,
    });
    console.log('Pet_details seeding successful!');

    console.log('seeding payments...');
    const seedPayments = await Payment.bulkCreate(payments, {
      validate: true,
    });
    console.log('Payment seeding successful!');

    console.log('seeding bookings...');
    const seedBookings = await Booking.bulkCreate(bookings, {
      validate: true,
    });
    console.log('Booking seeding successful!');

    console.log('seeding groups...');
    const seedGroups = await Group.bulkCreate(groups, {
      validate: true,
    });
    console.log('Group seeding successful!');

    console.log('seeding messages...');
    const seedMessages = await Message.bulkCreate(messages, {
      validate: true,
    });
    console.log('Message seeding successful!');

    console.log('seeding posts...');
    const seedPosts = await Post.bulkCreate(posts, {
      validate: true,
    });
    console.log('Post seeding successful!');

    console.log('seeding groupPosts...');
    const seedGroupPosts = await Group_Post.bulkCreate(groupPosts, {
      validate: true,
    });
    console.log('Group_Post seeding successful!');

    console.log('seeding postComments...');
    const seedPostComments = await Post_Comment.bulkCreate(postComments, {
      validate: true,
    });
    console.log('Post_Comment seeding successful!');

    console.log('seeding maps...');
    const seedMaps = await Map.bulkCreate(maps, {
      validate: true,
    });
    console.log('Map seeding successful!');

    console.log('seeding access...');
    const seedAccess = await Access.bulkCreate(accessList, {
      validate: true,
    });
    console.log('Access seeding successful!');

    console.log('seeding fav_sitters...');
    const seedFavSitters = await FavSitter.bulkCreate(favSitters, {
      validate: true,
    });
    console.log('fav_sitters seeding successful!');

    console.log('seeding fav_groups...');
    const seedFavGroups = await FavGroup.bulkCreate(favGroups, {
      validate: true,
    });
    console.log('fav_groups seeding successful!');

    console.log('seeding group members associations...');
    const massGroupMembers = await Promise.all(
      seedGroups.map((group) =>
        group.addUser(Math.floor(Math.random() * 50) + 1)
      )
    );
    const secondMassGroupMembers = await Promise.all(
      seedGroups.map((group) =>
        group.addUser(Math.floor(Math.random() * 50) + 1)
      )
    );
    console.log('Group members seeding worked');

    // post_comment_likes
    console.log('seeding postCommentLikes associations...');
    const massPostCommentLikes = await Promise.all(
      seedPostComments
        .filter((postComment) => {
          return postComment.id % 2 !== 0;
        })
        .map((postComment) =>
          postComment.addUser(Math.floor(Math.random() * 40) + 1)
        )
    );
    console.log('postCommentLikes seeding worked');

    // post_likes
    console.log('seeding postLikes associations...');
    const massPostComments = await Promise.all(
      seedPosts
        .filter((post) => {
          return post.id % 2 !== 0;
        })
        .map((post) => post.addUser(Math.floor(Math.random() * 40) + 1))
    );
    console.log('postLikes seeding worked');

    // group_post_likes
    console.log('seeding group_post_likes associations...');
    const massGroupPostLikes = await Promise.all(
      seedGroupPosts
        .filter((groupPost) => {
          return groupPost.id % 2 !== 0;
        })
        .map((groupPost) =>
          groupPost.addUser(Math.floor(Math.random() * 40) + 10)
        )
    );
    console.log('group_post_likes seeding worked');

    console.log('seeding newBookingPets...');
    const newBookingPets = await seedBookings[0]
      .addPet(1)
      .then(await seedBookings[1].addPet(2))
      .then(await seedBookings[2].addPet(5))
      .then(await seedBookings[3].addPet(7))
      .then(await seedBookings[4].addPet(8))
      .then(await seedBookings[5].addPet(12))
      .then(await seedBookings[6].addPet(11))
      .then(await seedBookings[7].addPet(23))
      .then(await seedBookings[8].addPet(40))
      .then(await seedBookings[9].addPet(30))
      .then(await seedBookings[10].addPet(60))
      .then(await seedBookings[11].addPet(70))
      .then(await seedBookings[12].addPet(15))
      .then(await seedBookings[13].addPet(25))
      .then(await seedBookings[14].addPet(26))
      .then(await seedBookings[15].addPet(35))
      .then(await seedBookings[16].addPet(45))
      .then(await seedBookings[17].addPet(55))
      .then(await seedBookings[18].addPet(65))
      .then(await seedBookings[19].addPet(75))
      .then(await seedBookings[20].addPet(23))
      .then(await seedBookings[21].addPet(33))
      .then(await seedBookings[22].addPet(43))
      .then(await seedBookings[22].addPet(53))
      .then(await seedBookings[21].addPet(63))
      .then(await seedBookings[20].addPet(73));

    console.log('newBookingPets seeding worked');
    // fav_groups
    // fav_sitters

    // event_rsvps
    console.log('seeding event_rsvps...');
    const massEventRsvps = await Promise.all(
      seedEvents
        .filter((event) => {
          return event.id % 2 !== 0;
        })
        .map((event) => event.addUser(Math.floor(Math.random() * 40) + 10))
    );
    console.log('event_rsvps seeding worked');

    // message_likes
    console.log('seeding message_likes...');
    const massMessageLikes = await Promise.all(
      seedMessages
        .filter((message) => {
          return message.id % 2 !== 0;
        })
        .map((message) => message.addUser(Math.floor(Math.random() * 40) + 10))
    );
    console.log('message_likes seeding worked');

    db.close();
  } catch (err) {
    console.log(err);
    db.close();
  }
};

init();
