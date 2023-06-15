const { sequelize, Sequelize } = require('../config/db.config')

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.users = require('./users.model')(sequelize, Sequelize)
db.roles = require('./roles.model')(sequelize, Sequelize)

db.roles.belongsToMany(db.users, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId'
})

db.users.belongsToMany(db.roles, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId'
})

db.ROLES = ['pasien']

module.exports = db
