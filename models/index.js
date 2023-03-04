// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// one-to-many: category with many products
Product.belongsTo(Category, {
  foreignKey: "category_id"
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});

// many-to-many: ProductTag
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};