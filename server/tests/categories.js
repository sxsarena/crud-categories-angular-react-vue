const config = require('../config');
const mongoose = require('mongoose');
const expect   = require('chai').expect;
const supertest = require('supertest');
const app = require('../index');
const request = supertest(app);

const Categories = app.models.categories;

describe('My test', function() {
  describe('POST /api/categories', () => {
    describe('status 200', () => {
      it('returns a list of categories', done => {
        let category = {
          label: "Rings",
          url: "J.R.R. Tolkien"
        };
        request.post('/api/categories')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .send(category)
          .expect(200)
          .end((err, res) => {
            done();
          });
      });
    });
  });
});

// You can put one ‘after()’ statement above all else that will run when all tests are finished
after(done => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => {
      done();
    });
  });
});
