const sequelize = require('../config/database');
const Product = require('./Product');
const User = require('./User');

const models = {
  Product,
  User
};

module.exports = {
  sequelize,
  ...models
}; 