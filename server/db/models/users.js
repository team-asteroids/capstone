const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
      notNull: true,
    },
  },
  phone: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  address1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  address2: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [
        [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Minor Outlying Islands',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'U.S. Virgin Islands',
          'Utah',
          'Vermont',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
      ],
      notEmpty: true,
      notNull: true,
    },
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 5,
      max: 5,
      notEmpty: true,
      notNull: true,
    },
  },
  fullAddress: {
    type: Sequelize.DataTypes.VIRTUAL,
    get() {
      let addressArray = [];
      addressArray.push(this.address1);
      if (this.address2) addressArray.push(this.address2);
      addressArray.push(this.city);
      addressArray.push(this.state);
      addressArray.push(this.zip);
      return addressArray;
    },
    set(value) {
      throw new Error(
        'Field is set automatically, please do not try to change'
      );
    },
  },
  role: {
    type: Sequelize.ENUM({ values: ['user', 'sitter', 'admin'] }),
    defaultValue: 'user',
    validate: {
      notEmpty: true,
    },
  },
  imageSrc: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false,
    validate: {
      is: /^[0-9a-f]{64}$/i,
      min: 10,
      notEmpty: true,
      notNull: true,
    },
  },
  totalPets: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
      notEmpty: true,
      notNull: true,
    },
  },
  canFoster: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = User;
