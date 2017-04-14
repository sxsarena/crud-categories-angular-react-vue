const Categories = require('../models/categories');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
  getCategories: (req, res) => {
    Categories
    .find({ parent: null }, { parent: 0 })
    .populate('children', ['_id', 'label', 'url'])
    .exec((err, results) => {
      if(err) {
        return res.status(400).json({ message: err });
      }
      res.json({items: results});
    });
  },
  getCategory: (req, res) => {
    Categories
    .findById(req.params.id)
    .populate('parent', ['_id', 'label', 'url'])
    .populate('children', ['_id', 'label', 'url'])
    .exec((err, result) => {
      if(err) {
        return res.status(400).json({ message: err });
      }
      res.json(result);
    });
  },
  postCategory: (req, res) => {
    const category = new Categories();

    category.label = req.body.label;
    category.url = req.body.url;
    category.parent = req.body.parent ? ObjectID(req.body.parent) : null ;
    category.children = req.body.children && req.body.children.length > 0 ? req.body.children.map(item => ObjectID(item)) : [];

    category.save((err) => {
      if(err) {
        return res.status(400).json({ message: err });
      }
      res.json({ message: 'Categoria criada!' });
    });
  },
  putCategory: (req, res) => {
    Categories.findById(req.params.id, (err, category) => {
      if(err) {
        return res.status(400).json({ message: err });
      }

      category.label = req.body.label;
      category.url = req.body.url;
      category.parent = req.body.parent;
      category.children = category.children;

      category.save((err) => {
        if(err) {
          return res.status(400).json({ message: err });
        }
        res.json({ message: 'Categoria atualizada!' });
      });
    });
  },
  deleteCategory: (req, res) => {
    Categories.remove({ _id: req.params.id }, (err) => {
      if(err) {
        return res.status(400).json({ message: err });
      }
      res.json({ message: 'Categoria excluída!' });
    });
  }
};
