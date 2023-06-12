const RoleModel = (sequelize, Sequelize) => {
  const Role = sequelize.define('roles', {
    roleId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    }
  })

  return Role
}

module.exports = RoleModel