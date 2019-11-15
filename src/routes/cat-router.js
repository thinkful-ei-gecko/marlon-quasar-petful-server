const express = require('express');
const path = require('path');
const Cats = require('../../utility/Cats');

const catRouter = express.Router();



catRouter
  .route('/') // prettier-ignore
  .get((req, res) => {
    let catarray = Cats.getAllAsArray();
    res.json(catarray);
  })
  .delete((req, res, next) => {
    
  });

module.exports = catRouter;
