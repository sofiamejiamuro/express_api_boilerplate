require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const index = require('./routes/index');
app.use('/', index);
//const Lista = require('./routes/Lista');
//app.use('/Api', Lista);
app.use('/Api', require('./routes/Lista'));

module.exports = app; 