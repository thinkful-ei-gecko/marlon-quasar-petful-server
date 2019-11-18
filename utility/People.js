'use strict';

const Queue = require('./Queue');

let People = new Queue;

let person = {
  name: 'name',
  dog: true,
  cat: false
};

People.enqueue('Marlon');
People.enqueue('Quasar');

module.exports = People;