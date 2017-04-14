const express = require('express');
const bodyParser  = require('body-parser');
const app = express();

const db = require('./db');
const categoriesRoutes = require('./routes/categories')
const port = process.env.PORT || 3000;
const consign = require('consign');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

consign({cwd: 'server'})
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app)
;

// Routes
// api
app.get('/api', (req, res) => {
  res.json({ message: 'OLX Challenge!' });
});

// categories routes
categoriesRoutes.routes(app);

app.all('/api/*', (req, res) => {
  res.json({ message: `Recurso não encontrado!` });
});

// Angular Route
app.get('/angular/*', (req, res) => {
  next();
});

// 404
app.use((req, res, next) => {
  res.json({ message: `Página não encontrada` });
  next();
});

// Listen
const server = app.listen(port, "127.0.0.1", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server running on http://${host}:${port}`);
});

module.exports = app;
