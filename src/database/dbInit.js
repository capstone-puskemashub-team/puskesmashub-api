const db = require('../models')
const { v4: uuid } = require('uuid')

const roleInit = async () => {
  try {
    const role = await db.role.findAll()
    if (role.length === 0) {
      db.ROLES.forEach(async (role) => {
        await db.role.create({
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