const express = require('express');
const path = require('path');

const peopleRouter = express.Router();
const bodyParser = express.json();

peopleRouter
  .route('/') // prettier-ignore
  .get((req, res) => {
  })
  .delete((req, res, next) => {
    
  })
  .post(bodyParser, (req, res, next) => {

  });
  
module.exports = peopleRouter;