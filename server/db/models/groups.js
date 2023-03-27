const Sequelize = require('sequelize');
const db = require('../database');

const Group = db.define('group', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  topic: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  imageSrc: {
    type: Sequelize.STRING,
    defaultValue:
      'https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMTcyNzc1MzYzNzA5/homeward-bound-ftr.jpg',
    allowNull: true,
  },
});

const Group_Post = db.define('group_post', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

const Group_Member = db.define('group_members');
const Group_Post_Like = db.define('group_post_likes');

module.exports = {
  Group,
  Group_Post,
  Group_Member,
  Group_Post_Like,
};

/* 
-- put userId on Group table
Group.belongsTo(User)
User.hasMany(Group, {foreignKey: 'groupCreatorId'})

-- put userId on Group_Post table
Group_Post.belongsTo(User)
User.hasMany(Group_Post)

-- put groupId on Group_Post table
Group_Post.belongsTo(Group)
Group.hasMany(Group_Post)

-- group_members
Group.belongsToMany(User, {through: 'group_member'})
User.belongsToMany(Group, {through: 'group_member'})

-- fav_groups
Group.belongsToMany(User, {through: 'fav_group'})
User.belongsToMany(Group, {through: 'fav_group'})

-- group_post_likes
Group_Post.belongsToMany(User, {through: 'group_post_like'})
User.belongsToMany(Group_Post, {through: 'group_post_like'})
*/
