const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
// const dotenv = require('dotenv').config();
// const config = require('config');
const PORT = process.env.PORT_NUMBER || 8080;
// const db = require('./db');

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// logging middleware - disable during test
app.use(volleyball);
// if (config.util.getEnv('NODE_ENV') !== 'test') {
//   app.use(volleyball);
// }

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start of API routes
app.use('/api', require('./API'));

// Serves HTML file
app.use('*', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// Default error handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

async function init() {
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

// const init = async () => {
//   try {
//     db.sync().then(
//       app.listen(PORT, () => {
//         console.log(`App running on port ${PORT}!`);
//       })
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

init();
