const express = require('express');
const app = express();
const winston = require('winston'); 
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

const port = process.env.PORT || 5555;
const server = app.listen(port, () => {
  winston.info(`${port}-portni eshitishni boshladim`);
});

module.exports = server;