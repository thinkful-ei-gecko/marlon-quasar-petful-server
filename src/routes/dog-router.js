const express = require('express');
const path = require('path');
const Dogs = require('../../utility/Dogs');

const dogRouter = express.Router();

dogRouter
  .route('/') // prettier-ignore
  .get((req, res) => {
    let dogarray = Dogs.getAllAsArray();
    res.json(dogarray);
  })
  .delete((req, res, next) => {
    Dogs.dequeue();
    res.status(204).end();
  });

module.exports = dogRouter;
