const db = require('../models')
const Users = db.users
const Roles = db.roles
const Op = db.Sequelize.Op
const { v4: uuid } = require('uuid')

exports.signup = async (req, res, next) => {

  const { username,firstname, lastname, telephone, roles } = req.body

  try {
    const userId = uuid()
    // TODO: encrypt password

    const user = await Users.create({
      userId: userId,
      username: username,
      firstname: firstname,
      lastname: lastname,
      telephone: telephone
    })

    if (!user) {
      const respone = {
        status: 'error',
        message: 'User was not registered successfully!'
      }

      console.log(respone)
      res.status(500)
        .json(respone)
    }

    if (!roles) {
      const role = await Roles.findOne({
        where: {
          name: 'pasien'
        }
      })

      const result = await user.setRoles(role)
      if (result) {
        const respone = {
          status: 'success',
          message: 'User was registered successfully!',
          data: {
            userId: user.userId,
            username: user.username,
          }
        }

        console.log(respone)
        res.status(201)
          .json(respone)

        return
      } 
    }

    const allRoles = await Roles.findAll({
      where: {
        name: {
          [Op.or]: Array.isArray(roles) ? roles : [roles]
        }
      }
    })

    const result = user.setRoles(allRoles)
    if (result) {
      const respone = {
        status: 'success',
        message: 'User was registered successfully!',
        data: {
          userId: user.userId,
          username: user.username,
        }
      }

      console.log(respone)
      res.status(201)
        .json(respone)

      return
    }
  } catch (err) {
    const respone = {
      status: 'error',
      message: err.message || 'Some error occurred while creating the User.'
    }

    console.log(respone)

    res.status(500)
      .json(respone)

    return
  }
}

exports.signin = async (req, res, next) => {
  const { username, password } = req.body

  console.log({ username, password })

  await Users.findOne({
    where: {
      username: username
    }
  }).then(Users => {
    if(!Users) {
      const respone = {
        status: 'not found',
        message: `User with username ${username} was not found.`
      }

      console.log(respone)
      
      res.status(404)
        .json(respone)

      return
    }

    const token = 'token' // TODO: generate token

    const respone = {
      status: 'success',
      data: {
        token: token,
        user: {
          userId: Users.userId,
          username: Users.username,
          firstname: Users.firstname,
          lastname: Users.lastname,
          telephone: Users.telephone
        }
      }
    }

    console.log(respone)

    res.status(200)
      .json(respone)

    return
  }).catch(err => {
    const respone = {
      status: 'error',
      message: err.message || `Error retrieving user with username ${username}`
    }

    console.log(respone)

    res.status(500)
      .json(respone)
  })
}
