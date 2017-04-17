const controller = require('../controllers/categories');

module.exports = (app) => {
  app.get('/api/categories', controller.findAll);
  app.get('/api/categories/:id', controller.findById);
  app.post('/api/categories', controller.add);
  app.put('/api/categories/:id', controller.update);
  app.delete('/api/categories/:id', controller.delete);
}
