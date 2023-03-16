// import models and associations
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
const Event = require('./models/events');
const { Group, Group_Post } = require('./models/groups');
const Message = require('./models/messages');
const Map = require('./models/maps');
const { Post, Post_Comment } = require('./models/posts');
const Access = require('./models/access');
const Payment = require('./models/payments');
