const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

const CategoriesSchema = new Schema({
  label: {
    type: String,
    required: [true, 'label required'],
    unique: true,
  },
  url: {
    type: String,
    required: [true, 'url required'],
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Categories'
  },
  children: [{
    type: Schema.Types.ObjectId,
    ref: 'Categories'
  }]
},
{
  versionKey: false
});

module.exports = mongoose.model('Categories', CategoriesSchema);
