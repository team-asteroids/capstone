// import mock data and models to seed db
const {
  db,
  User,
  // Sitter,
  // Sitter_Review,
  // Sitter_Rating,
  // Sitter_Pref,
  // Sitter_Client,
  Pet,
  Pet_Detail,
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
const pets = require('./mock-data/petSeed');
const pet_details = require('./mock-data/pet_detailsSeed');

const init = async () => {
  try {
    await db.sync({ force: true });
    console.log('syncing the db');

    console.log('seeding users...');
    const seedUsers = await User.bulkCreate(user, {
      validate: true,
    });
    console.log('User seeding successful!');
    console.log('seeding pets...');
    const seedPets = await Pet.bulkCreate(pets, {
      validate: true,
    });
    console.log('Pet seeding successful!');
    const seed_petDetails = await Pet_Detail.bulkCreate(pet_details, {
      validate: true,
    });
    console.log('Pet_details seeding successful!');
  } catch (err) {
    console.log(err);
    db.close();
  }
};

init();
