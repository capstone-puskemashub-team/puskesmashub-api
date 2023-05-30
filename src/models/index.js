const { sequelize, Sequelize } = require('../config/db.config');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users.model')(sequelize, Sequelize);

module.exports = db;