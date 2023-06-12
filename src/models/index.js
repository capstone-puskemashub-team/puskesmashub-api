const { sequelize, Sequelize } = require('../config/db.config')

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('./user.model')(sequelize, Sequelize)
db.role = require('./role.model')(sequelize, Sequelize)
db.doctor = require('./doctor.model')(sequelize, Sequelize)
db.medicine = require('./medicine.model')(sequelize, Sequelize)

db.user.belongsToMany(db.role, {
  through: {
    model: "user_roles",
    attributes: [],
  },
  foreignKey: "userId",
});

db.role.belongsToMany(db.user, {
  through: {
    model: "user_roles",
    attributes: [],
  },
  foreignKey: "roleId"

})

db.ROLES = ['admin'] // Role baru admin

module.exports = db
