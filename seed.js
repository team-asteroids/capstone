// import mock data and models to seed db
const {
  db,
  User,
  Sitter,
  Sitter_Review,
  Sitter_Rating,
  // Sitter_Pref,
  // Sitter_Client,
  // Pet,
  // Pet_Detail,
  // Booking,
  // Event,
  // Group,
  // Group_Post,
  // Message,
  // Map,
  // Post,
  // Post_Comment,
  // Access,
} = require('./server/db/index');
const user = require('./mock-data/userSeed');
const sitterList = require('./mock-data/sitterSeed');
const sitterRatingList = require('./mock-data/sitterRatingSeed');
const sitterReviewList = require('./mock-data/sitterReviewSeed');

const init = async () => {
  try {
    await db.sync({ force: true });
    console.log('syncing the db');

    console.log('seeding users...');
    const seedUsers = await User.bulkCreate(user, {
      validate: true,
    });
    console.log('User seeding successful!');

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
  } catch (err) {
    console.log(err);
    db.close();
  }
};

init();
