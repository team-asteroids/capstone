const db = require('./database');
const User = require('./models/users');
const Sitter = require('./models/sitter');
const Sitter_Review = require('./models/sitter_review');
const Sitter_Rating = require('./models/sitter_rating');
const Sitter_Pref = require('./models/sitter_pref');
const Sitter_Client = require('./models/sitter_client');
const Pet = require('./models/pets');
const Pet_Detail = require('./models/pet_details');
const Booking = require('./models/bookings');
const { Event, Event_RSVP } = require('./models/events');
const {
  Group,
  Group_Post,
  Group_Member,
  Group_Post_Like,
} = require('./models/groups');
const Chat_Message = require('./models/messages');
const Map = require('./models/maps');
const {
  Post,
  Post_Comment,
  Post_Like,
  Post_Comment_Like,
} = require('./models/posts');
const Access = require('./models/access');
const Payment = require('./models/payments');
const { FavSitter, FavGroup } = require('./models/favs');
const Chat = require('./models/chats');

User.hasMany(Pet);
Pet.belongsTo(User);

Pet.hasOne(Pet_Detail);
Pet_Detail.belongsTo(Pet);

Sitter.hasMany(Booking);
Booking.belongsTo(Sitter);

User.hasMany(Booking);
Booking.belongsTo(User);

Payment.hasMany(Booking);
Booking.belongsTo(Payment);

Pet.belongsToMany(Booking, { through: 'booking_pets' });
Booking.belongsToMany(Pet, { through: 'booking_pets' });

// User.belongsToMany(User, { through: Chat });
// Chat.belongsTo(User);

User.belongsToMany(User, {
  as: 'user1',
  foreignKey: 'user1',
  through: Chat,
});

User.belongsToMany(User, {
  as: 'user2',
  foreignKey: 'user2',
  through: Chat,
});

Chat.hasMany(Chat_Message);
Chat_Message.belongsTo(Chat, { foreignKey: 'chatId' });

// -- put userId on Group table
Group.belongsTo(User, { foreignKey: 'creatorId' });
User.hasMany(Group, { foreignKey: 'creatorId' });

// -- put userId on Group_Post table
Group_Post.belongsTo(User);
User.hasMany(Group_Post);

// -- put groupId on Group_Post table
Group_Post.belongsTo(Group, { onDelete: 'cascade', hooks: true });
Group.hasMany(Group_Post);

// -- group_members
Group.belongsToMany(User, { through: Group_Member });
User.belongsToMany(Group, { through: Group_Member });

// -- fav_groups
Group.belongsToMany(User, { through: FavGroup });
User.belongsToMany(Group, { through: FavGroup });

// -- group_post_likes
Group_Post.belongsToMany(
  User,
  { through: Group_Post_Like },
  { onDelete: 'cascade', hooks: true }
);
User.belongsToMany(Group_Post, { through: Group_Post_Like });

// --event_rsvp
Event.belongsToMany(User, { through: Event_RSVP });
User.belongsToMany(Event, { through: Event_RSVP });

// -- put creator id on table
Event.belongsTo(User, { foreignKey: 'creatorId' });
User.hasMany(Event, { foreignKey: 'creatorId' });

// -- put userId on Post table
Post.belongsTo(User, { foreignKey: 'creatorId' });
User.hasMany(Post, { foreignKey: 'creatorId' });

// -- put postId on Post_Comment table
Post_Comment.belongsTo(Post);
Post.hasMany(Post_Comment);

// -- put userId on Post_Comment table
Post_Comment.belongsTo(User);
User.hasMany(Post_Comment);

// -- post_likes
User.belongsToMany(Post, { through: Post_Like });
Post.belongsToMany(User, { through: Post_Like });

// -- post_comment_likes
User.belongsToMany(Post_Comment, { through: Post_Comment_Like });
Post_Comment.belongsToMany(User, { through: Post_Comment_Like });

// -- put senderId on Message table
Chat_Message.belongsTo(User);
User.hasMany(Chat_Message);

// -- put recepientId on Message table
Chat_Message.belongsTo(User);
User.hasMany(Chat_Message, { foreignKey: 'recipientId' });

// -- message_likes
User.belongsToMany(Chat_Message, { through: 'message_likes' });
Chat_Message.belongsToMany(User, { through: 'message_likes' });

Sitter.hasOne(Sitter_Pref);
Sitter_Pref.belongsTo(Sitter);

// User.belongsToMany(User, { through: Sitter });
// User.belongsToMany(User, { through: Sitter, as: 'client' });

// User.belongsToMany(User, {
//   as: 'petsitter',
//   foreignKey: 'SitterId',
//   through: Sitter,
// });

// User.belongsToMany(User, {
//   as: 'client',
//   foreignKey: 'ClientId',
//   through: Sitter,
// });

User.hasOne(Sitter);
Sitter.belongsTo(User);

Sitter.belongsToMany(User, { through: Sitter_Client });
User.belongsToMany(Sitter, { through: Sitter_Client });

Sitter.belongsToMany(User, { through: FavSitter });
User.belongsToMany(Sitter, { through: FavSitter });

Sitter.hasMany(Sitter_Rating);
Sitter_Rating.belongsTo(Sitter);

User.hasMany(Sitter_Rating);
Sitter_Rating.belongsTo(User);

Sitter.hasMany(Sitter_Review);
Sitter_Review.belongsTo(Sitter);

User.hasMany(Sitter_Review);
Sitter_Review.belongsTo(User);

Access.belongsTo(User);
User.hasOne(Access);

Map.belongsTo(User);
User.hasMany(Map);

User.hasMany(Payment);
Payment.belongsTo(User);

// User.belongsToMany(Sitter, { through: 'fav_sitters' });
// Sitter.belongsToMany(User, { through: 'fav_sitters' });

module.exports = {
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
  Event_RSVP,
  Group,
  Group_Post,
  Group_Member,
  Group_Post_Like,
  Chat_Message,
  Map,
  Post,
  Post_Comment,
  Access,
  Payment,
  FavSitter,
  FavGroup,
  Post_Comment_Like,
  Post_Like,
  Chat,
};
