const config = require('../config');
const mongoose = require('mongoose');
const chai = require('chai');
const app = require('../index');
const chaiHttp = require('chai-http');

const Categories = require('../models/categories');

let should = chai.should();

chai.use(chaiHttp);

describe('Categories test', function() {
  describe('GET /api/categories', () => {
    describe('status 200', () => {
      it('it should GET all the categories', done => {
        chai
        .request(app)
        .get('/api/categories')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
      });
    });
  });

  describe('POST /api/categories', () => {
    describe('status 200', () => {
      it('it should POST a category', done => {
        let category = {
          label: "Test",
          url: "#/test"
        };
        chai
        .request(app)
        .post('/api/categories')
        .send(category)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
      });
    });

    describe('status 400', () => {
      it('it should not POST a category without url field', done => {
        let category = {
          label: "Test"
        };
        chai
        .request(app)
        .post('/api/categories')
        .send(category)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
      });
      it('it should not POST a category without label field', done => {
        let category = {
          url: "#/test"
        };
        chai
        .request(app)
        .post('/api/categories')
        .send(category)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
      });
      it('It should not POST a category with an existing label', done => {
        let category = {
          label: "Test",
          url: "#/test"
        };
        chai
        .request(app)
        .post('/api/categories')
        .send(category)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
      });
    });
  });

  describe('GET /api/categories/:id', () => {
    describe('status 200', () => {
      it('it should GET a category by the given id', (done) => {
        let category = new Categories({ label: "Test 2017", url: "#/test" });
        category.save((err, category) => {
          chai
          .request(app)
          .get('/api/categories/' + category.id)
          .send(category)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('label');
            res.body.should.have.property('url');
            res.body.should.have.property('_id').eql(category.id);
            done();
          });
        });
      });
    });
  });

  describe('PUT /api/categories/:id', () => {
    describe('status 200', () => {
      it('it should UPDATE a category given the id', (done) => {
        let category = new Categories({ label: "Test +1", url: "#/test" })
        category.save((err, category) => {
          chai
          .request(app)
          .put('/api/categories/' + category.id)
          .send({ label: "Test +2", url: "#/test" })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Categoria atualizada!');
            done();
          });
        });
      });
    });
  });

  describe('DELETE /api/categories/:id', () => {
    describe('status 200', () => {
      it('it should DELETE a category given the id', (done) => {
        let category = new Categories({ label: "Test delete", url: "#/test" })
        category.save((err, category) => {
          chai
          .request(app)
          .delete('/api/categories/' + category.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Categoria excluída!');
            done();
          });
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
