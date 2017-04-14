const controller = require('../controllers/categories');

module.exports.routes = (app) => {
  app.get('/api/categories', controller.getCategories);
  app.get('/api/categories/:id', controller.getCategory);
  app.post('/api/categories', controller.postCategory);
  app.put('/api/categories/:id', controller.putCategory);
  app.delete('/api/categories/:id', controller.deleteCategory);
}
