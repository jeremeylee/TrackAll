const express = require('express');
const bodyParser = require('body-parser');
const listsRouter = require('./controllers/lists');

const app = express();

app.use(bodyParser.json());
app.use('/api/lists', listsRouter);
module.exports = app;
