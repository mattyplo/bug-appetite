const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const bugs = require('./routes/api/Bugs');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/bugs', bugs)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));