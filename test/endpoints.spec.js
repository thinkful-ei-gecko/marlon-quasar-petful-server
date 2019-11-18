'use strict';

const app = require('../src/app');
const helpers = require('./test-helpers');
const Cats = require('../utility/Cats');
const Dogs = require('../utility/Dogs');
const People = require('../utility/People');

describe('Cat endpoints', () => {
  describe('GET /api/cat', () => {
    context('Given there are cats', () => {
      it('Responds with 200 and the array of cats', () => {
        return supertest(app)
          .get('/api/cat')
          .expect(200, Cats.getAllAsArray());
      });
    });
  });
  describe('Delete /api/cat', () => {
    context('Given there are cats', () => {
      it('Responds with 204 and the updated store of cats', () => {
        return supertest(app)
          .delete('/api/cat')
          .expect(204)
          .then(res => 
            supertest(app)
              .get('/api/cat')
              .expect(helpers.makeCatsDelete())
          );
      });
    });
  });
});

describe('Dog endpoints', () => {
  describe('GET /api/dog', () => {
    context('Given there are dogs', () => {
      it('Responds with 200 and the array of dogs', () => {
        return supertest(app)
          .get('/api/dog')
          .expect(200, Dogs.getAllAsArray());
      });
    });
  });

  describe('Delete /api/dog', () => {
    context('Given there are dogs', () => {
      it('Responds with 204 and the updated store of dogs', () => {
        return supertest(app)
          .delete('/api/dog')
          .expect(204)
          .then(res => 
            supertest(app)
              .get('/api/dog')
              .expect(helpers.makeDogsDelete())
          );
      });
    });
  });
});

describe('People endpoints', () => {
  describe('GET /api/people', () => {
    context('Given there are people', () => {
      it('Responds with 200 and the array of people', () => {
        return supertest(app)
          .get('/api/people')
          .expect(200, People.getAllAsArray());
      });
    });
  });

  describe('POST /api/people', () => {
    const newPerson = {
      name: 'Test'
    };
    it('Responds with a 201 and the updated queue of people', () => {
      return supertest(app)
        .post('/api/people')
        .send(newPerson)
        .expect(201)
        .then(res => {
          return supertest(app)
            .get('/api/people')
            .expect(200, ['Test']);
        });
    });
  });
});