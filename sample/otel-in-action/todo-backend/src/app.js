const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/todos', routes);

mongoose.connect('mongodb://mongo:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});
