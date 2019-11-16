'use strict';

const express = require('express');
const path = require('path');
const Cats = require('../../utility/Cats');
const People = require('../../utility/People');

const catRouter = express.Router();

catRouter
  .route('/') // prettier-ignore
  .get((req, res) => {
    let catarray = Cats.getAllAsArray();
    res.json(catarray);
  })
  .delete((req, res, next) => {
    let cat = Cats.dequeue();
    cat.adopter = People.dequeue();
    Cats.enqueue(cat);
    res.status(204).end();
  });

module.exports = catRouter;
