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
    type: Sequelize.BIGINT,
    unique: true,
    allowNull: false,
    validate: {
      len: [10],
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
      len: [5],
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
    defaultValue: 'http://dummyimage.com/129x100.png/dddddd/000000',
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
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

User.beforeValidate('imageSrc', (user) => {
  if (user.imageSrc === null)
    user.imageSrc = 'http://dummyimage.com/245x100.png/ff4444/ffffff';
});

// User.beforeValidate((user) => {
//   const MIN_PASSWORD_LENGTH = 8;

//   const pw = user.password;
//   if (pw.length < MIN_PASSWORD_LENGTH) {
//     const err = new Error();
//     err.message = `Minimum password requirement not met (${MIN_PASSWORD_LENGTH} characters)`;
//     throw err;
//   }
// });

module.exports = User;
