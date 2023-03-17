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
  Pet_Detail,
  Booking,
  Event,
  Group,
  Group_Post,
  Message,
  Map,
  Post,
  Post_Comment,
  // Access,
  // Payment,
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
// const { favGroups, favSitters } = require('./mock-data/favSeeds');
const groups = require('./mock-data/groupSeed');
// const groupMembers = require('./mock-data/groupMemSeed');
const groupPosts = require('./mock-data/groupPostSeed');
const messages = require('./mock-data/messageSeed');
const { posts, postComments } = require('./mock-data/postSeed');

const init = async () => {
  try {
    await db.sync({ force: true });
    console.log('syncing the db');

    console.log('seeding users...');
    const seedUsers = await User.bulkCreate(user, {
      validate: true,
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
  } catch (err) {
    console.log(err);
    db.close();
  }
};

init();
