const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/', indexRouter);

module.exports = app
