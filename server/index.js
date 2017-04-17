const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const consign = require('consign');

// database
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

consign({cwd: 'server'})
  .include('models')
  .then('controllers')
  .into(app)
;

// Routes
require('./routes')(app);

// Listen
const server = app.listen(port, "127.0.0.1", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server running on http://${host}:${port}`);
});

module.exports = app;
