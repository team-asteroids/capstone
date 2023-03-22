const Sequelize = require('sequelize');
const db = require('../database');

const Access = db.define('access', {
  phone: {
    type: Sequelize.BIGINT,
    unique: true,
    allowNull: true,
    validate: {
      len: [10],
      notEmpty: true,
    },
  },
  address1: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
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
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true,
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
  accessCode: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  emergencyContactName: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  emergencyContactPhone: {
    type: Sequelize.BIGINT,
    allowNull: true,
    validate: {
      len: [10],
      notEmpty: true,
    },
  },
  wifi: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  additionalNotes: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Access;
