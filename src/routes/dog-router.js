const express = require('express');
const path = require('path');
const Dogs = require('../../utility/Dogs');

const dogRouter = express.Router();

dogRouter
  .route('/') // prettier-ignore
  .get((req, res) => {
    let dogarray = Dogs.getAllAsArray();
    res.json(dogarray);
  });

module.exports = dogRouter;
