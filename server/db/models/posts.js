const Sequelize = require('sequelize');
const db = require('../database');

const Post = db.define('post', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

const Post_Comment = db.define('post_comment', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = {
  Post,
  Post_Comment,
};

/* 
-- where are posts being posted?

-- put userId on Post table
Post.belongsTo(User)
User.hasMany(Post, {foreignKey: 'postCreatorId'})

-- put postId on Post_Comment table
Post_Comment.belongsTo(Post)
Post.hasMany(Post_Comment)

-- put userId on Post_Comment table
Post_Comment.belongsTo(User)
User.hasMany(Post_Comment, {foreignKey: 'commenterId'})

-- post_likes
User.belongsToMany(Post, {through: 'post_like'})
Post.belongsToMany(User, {through: 'post_like'})

-- post_comment_likes
User.belongsToMany(Post_Comment, {through: 'post_comment_like'})
Post_Comment.belongsToMany(User, {through: 'post_comment_like'})
*/
