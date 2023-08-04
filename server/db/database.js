// initialize postgres db

// const { createClient } = require('@supabase/supabase-js');
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();
const config = require('config');

const database = process.env.REACT_APP_DATABASE_URL;

// Create a single supabase client for interacting with your database

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
// console.log('supabaseUrl variable --> ', supabaseUrl);
// console.log('supabaseKey variable --> ', supabaseKey);

// const database = createClient(supabaseUrl, supabaseKey);

// console.log('database variable --> ', database);

const db = new Sequelize(database, {
  dialect: 'mysql',
});

const main = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();

// (async () => {
//   try {
//     const [results, metadata] = await db.query('SELECT NOW()');
//     console.log(results);
//   } catch (err) {
//     console.error('error executing query:', err);
//   } finally {
//     await db.close();
//   }
// })();

// const db = new Sequelize(
//   // loads the correct database url based on NODE_ENV (default / dev / test)
//   database_url || `postgres://localhost:5432/howlr`,
//   {
//     logging: false,
//   }
// );

module.exports = db;
