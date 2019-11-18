'use strict';

const express = require('express');
const path = require('path');
const People = require('../../utility/People');

const peopleRouter = express.Router();
const bodyParser = express.json();

peopleRouter
  .route('/') // prettier-ignore
  .get((req, res) => {
    let peoplearray = People.getAllAsArray();
    res.json(peoplearray);
  })
  .post(bodyParser, (req, res, next) => {
    const { name } = req.body;
    // console.log(name);
    People.enqueue(name);
    res.status(201).end();
    
    // prettier-ignore
  });

module.exports = peopleRouter;
