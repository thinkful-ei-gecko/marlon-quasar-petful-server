'use strict';

const Queue = require('./Queue');

let People = new Queue;

People.enqueue('Marlon');
People.enqueue('Quasar');

module.exports = People;