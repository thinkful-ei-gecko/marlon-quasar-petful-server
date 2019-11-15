require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('./config');

const catRouter = require('./routes/cat-router');
const dogRouter = require('./routes/dog-router');
const peopleRouter = require('./routes/people-router');

const app = express();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' 
}));

app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');

  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({error: 'Unauthorized Request' });
  }
  next();
});

app.use('/api/cat', catRouter);
app.use('/api/dog', dogRouter);
app.use('/api/people', peopleRouter);

// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
