const Sequelize = require('sequelize-cockroachdb');
const dotenv = require('dotenv').config();

const db = new Sequelize(
  process.env.REACT_APP_DATABASE_URL ||
    'postgresql://root@localhost:26257/howlr',
  {
    dialectOptions: {
      ssl: {
        ca: process.env.COCKROACHDB_CERT,
      },
    },
    logging: false,
  }
);

const main = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();

module.exports = db;
