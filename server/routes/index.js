module.exports = (app) => {
  // api
  app.get('/api', (req, res) => {
    res.json({ message: 'OLX Challenge!' });
  });

  require('./categories')(app);

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
}