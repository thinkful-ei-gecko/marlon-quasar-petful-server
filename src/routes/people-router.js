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
  .delete((req, res, next) => {
    People.dequeue();
    res.status(204).end();
  })
  .post(bodyParser, (req, res, next) => {
    const { name } = req.body;

    People.enqueue(name);
    res
      .status(201) // prettier-ignore
      .json(name);
  });

module.exports = peopleRouter;
