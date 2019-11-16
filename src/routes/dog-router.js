'use strict';

const express = require('express');
const path = require('path');
const Dogs = require('../../utility/Dogs');
const People = require('../../utility/People');

const dogRouter = express.Router();

dogRouter
  .route('/') // prettier-ignore
  .get((req, res) => {
    let dogarray = Dogs.getAllAsArray();
    res.json(dogarray);
  })
  .delete((req, res, next) => {
    let dog = Dogs.dequeue();
    dog.adopter = People.dequeue();
    Dogs.enqueue(dog);
    res.status(204).end();
  });

module.exports = dogRouter;
