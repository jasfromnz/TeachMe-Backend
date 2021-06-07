const cors = require('cors');
var express = require('express');
var logger = require('morgan');
var postsRouter = require('./routes/posts');

require('dotenv').config();
require('./config/database');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/posts', postsRouter);

module.exports = app;
