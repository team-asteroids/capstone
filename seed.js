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
  // Map,
  Post,
  Post_Comment,
  // Access,
} = require('./server/db/index');

// const { favGroups, favSitters } = require('./mock-data/favSeeds');
const groups = require('./mock-data/groupSeed');
// const groupMembers = require('./mock-data/groupMemSeed');
const groupPosts = require('./mock-data/groupPostSeed');
const messages = require('./mock-data/messageSeed');
const { posts, postComments } = require('./mock-data/postSeed');

/*
    console.log('seeding groups...');
    const seedGroups = await Group.bulkCreate(group, {
      validate: true,
    });
    console.log('Group seeding successful!');

    console.log('seeding groupPosts...');
    const seedGroupPosts = await Group_Post.bulkCreate(groupPost, {
      validate: true,
    });
    console.log('Group_Post seeding successful!');

    console.log('seeding messages...');
    const seedMessages = await Message.bulkCreate(message, {
      validate: true,
    });
    console.log('Message seeding successful!');

    console.log('seeding posts...');
    const seedPosts = await Post.bulkCreate(post, {
      validate: true,
    });
    console.log('Post seeding successful!');

     console.log('seeding postComments...');
    const seedPostComments = await Post_Comment.bulkCreate(postComment, {
      validate: true,
    });
    console.log('Post_Comment seeding successful!');
    
*/

const init = async () => {
  try {
    db.sync({ force: true });
    console.log('syncing the db');
  } catch (err) {
    console.log(err);
    db.close();
  }
};

init();
