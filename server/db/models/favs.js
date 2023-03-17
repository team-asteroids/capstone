const Sequelize = require('sequelize');
const db = require('../database');

const FavSitter = db.define('fav_sitter');

const FavGroup = db.define('fav_group');

module.exports = { FavSitter, FavGroup };
