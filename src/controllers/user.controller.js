const db = require('../models')
const { hashPassword, comparePassword } = require("../utils/password");
const { createTokenUser, attachCookieToRespone, dettachCookieFromRespone } = require('../utils/token')

const User = db.user
const Role = db.role

const getAllUsers = async (req, res, next) => {
  const users = await User.findAll({
    include: {
      model: Role,
      attributes: ['name'],
      through: {
        attributes: []
      }
    },
    attributes: ['username', 'firstname', 'lastname']
  })
  
  const response = {
    status: 'success',
    message: 'Get all users success',
    data: {
      total_users: users.length,
      users: users
    }
  }
  
  res.status(200).json(response)
}

const getAllStaff = async (req, res, next) => {
  const users = await User.findAll({
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

  const response = {
    status: "success",
    message: "Get all staff success",
    data: {
      total_staff: users.length,
      staff: users,
    },
  };

  res.status(200).json(response)
}

const getAllDoctor = async (req, res, next) => {
  const users = await User.findAll({
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

  const response = {
    status: "success",
    message: "Get all doctor success",
    data: {
      total_doctor: users.length,
      doctor: users,
    },
  };

  res.status(200).json(response)
}

const getCurrentUser = async (req, res, next) => {
  const response = {
    status: "success",
    message: "Get current user success",
    data: {
      user: req.user,
    },
  };

  res.status(200).json(response);
};

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

  const response = {
    status: 'success',
    message: 'Get single user success',
    data: {
      user: user
    }
  }

  res.status(200).json(response)
}

const updateUser = async (req, res, next) => {
  const { username, firstname, lastname } = req.body
  const userId = req.user.userId

  if (!username || !firstname || !lastname) {
    const error = new Error('Username or firstname or lastname is empty')
    error.status = 400
    return next(error)
  }

  const user = await User.findOne({
    include: {
      model: Role,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    where: {
      userId: userId,
    },
  });

  user.username = username
  user.firstname = firstname
  user.lastname = lastname

  await user.save()

  const tokenUser = createTokenUser(user, user.roles);
  const token = attachCookieToRespone({ res, user: tokenUser })

  const response = {
    status: "success",
    message: "Update user success",
    data: {
      user: tokenUser,
      token: token
    },
  };

  res.status(200).json(response)
}

const updateUserPassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body

  if (!oldPassword || !newPassword) {
    const error = new Error('Old password or new password is empty')
    error.status = 400
    return next(error)
  }

  const user = await User.findOne({
    include: {
      model: Role,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    where: {
      userId: req.user.userId,
    },
  });

  const passwordIsCorrect = comparePassword(oldPassword, user.password);

  if (!passwordIsCorrect) {
    const error = new Error("Old password is invalid");
    error.status = 400;
    return next(error);
  }

  user.password = hashPassword(newPassword)

  await user.save()

  const response = {
    status: "success",
    message: "Update user password success",
  };

  res.status(200).json(response)
}

const deleteUser = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      userId: req.user.userId,
    },
  });

  if(!user) {
    const error = new Error('User not found')
    error.status = 404
    return next(error)
  }

  await user.destroy()

  const response = {
    status: 'success',
    message: 'Delete user success'
  }

  dettachCookieFromRespone(req, res)
  res.status(200).json(response)
}

module.exports = {
  getAllUsers,
  getAllStaff,
  getAllDoctor,
  getCurrentUser,
  getSingleUser,
  updateUser,
  updateUserPassword,
  deleteUser
}