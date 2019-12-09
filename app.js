const express = require('express')
const app = express();

const main = require('./api/routes/main');

app.use('/main',main);


module.exports = app;
