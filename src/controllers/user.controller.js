const { where } = require('sequelize')
const db = require('../models')
const User = db.user
const Role = db.role

const getAllUsers = async (req, res, next) => {
  const user = await User.findAll({
    attributes: ['username', 'firstname', 'lastname']
  })
  
  const respone = {
    status: 'success',
    message: 'Get all users success',
    data: {
      total_users: user.length,
      users: user
    }
  }
  
  res.status(200).json(respone)
}

const getAllStaff = async (req, res, next) => {
  const user = await User.findAll({
    attributes: ["username", "firstname", "lastname", "telephone"],
    include: {
      model: Role,
      attributes: ["name"],
      where: {
        name: "staff",
      },
      through: {
        attributes: [],
      },
    },
  });

  const respone = {
    status: 'success',
    message: 'Get all staff success',
    data: {
      total_staff: user.length,
      staff: user
    }
  }

  res.status(200).json(respone)
}

const getAllDoctor = async (req, res, next) => {
  const user = await User.findAll({
    attributes: ["username", "firstname", "lastname", "telephone"],
    include: {
      model: Role,
      attributes: ["name"],
      where: {
        name: "doctor",
      },
      through: {
        attributes: [],
      },
    },
  });

  const respone = {
    status: 'success',
    message: 'Get all doctor success',
    data: {
      total_doctor: user.length,
      doctor: user
    }
  }

  res.status(200).json(respone)
}

const getSingleUser = async (req, res, next) => {
  const { id: userId } = req.params
  const user = await User.findOne({
    attributes: ["username", "firstname", "lastname"],
    where: {
      userId: userId,
    },
    include: {
      model: Role,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  if(!user) {
    const error = new Error('User not found')
    error.status = 404
    return next(error)
  }

  const respone = {
    status: 'success',
    message: 'Get single user success',
    data: {
      user: user
    }
  }

  res.status(200).json(respone)
}

const updateUser = async (req, res, next) => {
  const { id: userId } = req.params
  const { username, firstname, lastname } = req.body

  const user = await User.findOne({
    where: {
      userId: userId,
    },
  });

  if(!user) {
    const error = new Error('User not found')
    error.status = 404
    return next(error)
  }

  user.username = username
  user.firstname = firstname
  user.lastname = lastname

  await user.save()

  const respone = {
    status: 'success',
    message: 'Update user success',
    data: {
      user: user
    }
  }

  res.status(200).json(respone)
}


module.exports = {
  getAllUsers,
  getAllStaff,
  getAllDoctor,
  getSingleUser
}