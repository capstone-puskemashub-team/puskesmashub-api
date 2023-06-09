const db = require('../models')
const { v4: uuid } = require('uuid')

const roleInit = async () => {
  try {
    const roles = await db.roles.findAll()
    if (roles.length === 0) {
      db.ROLES.forEach(async (role) => {
        await db.roles.create({
          roleId: uuid(),
          name: role
        })
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = roleInit
