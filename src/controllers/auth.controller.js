const { v4: uuid } = require("uuid");
const { hashPassword, comparePassword } = require("../utils/password");
const { createTokenUser, attachCookieToRespone, dettachCookieFromRespone } = require("../utils/token");
const db = require("../models");

const User = db.user
const Role = db.role
const Op = db.Sequelize.Op

const signup = async (req, res, next) => {

  const { username, firstname, lastname, telephone, roles } = req.body

  try {
    const userId = uuid()
    const hashedPassword = hashPassword(req.body.password)

    const user = await User.create({
      userId: userId,
      username: username,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
      telephone: telephone,
    });

    const role = await Role.findAll({
      where: {
        name: {
          [Op.or]: !roles ? ["staff"] : Array.isArray(roles) ? roles : [roles],
        },
      },
    });

    const result = await user.setRoles(role);
    const tokenUser = createTokenUser(user, role);
    const token = attachCookieToRespone({ res, user: tokenUser })

    if (result) {
      const respone = {
        status: "success",
        message: "User was registered successfully!",
        data: {
          user: tokenUser,
          token: token
        },
      };

      console.log(respone)
      res.status(201)
        .json(respone)

      return
    }
  } catch (err) {
    const respone = {
      status: 'error',
      message: 'User was not registered successfully! ' + err.message
    }
    console.log(respone)

    res.status(500).json(respone)
    return
  }
}

const signin = async (req, res, next) => {
  const { username } = req.body

  await User.findOne({
    include: {
      model: Role,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    where: {
      username: username
    }
  }).then(user => {
    if (!user) {
      const respone = {
        status: "not found",
        message: `User with username ${username} was not found.`,
      };
      console.log(respone);

      res.status(404).json(respone);
      return;
    }

    const passwordIsCorrect = comparePassword(req.body.password, user.password)

    if (!passwordIsCorrect) {
      const respone = {
        status: "error",
        message: "Login failed! Invalid Password!",
      };
      console.log(respone);

      res.status(401).json(respone);
      return;
    }

    const tokenUser = createTokenUser(user, user.roles)
    const token = attachCookieToRespone({ res, user: tokenUser })

    const respone = {
      status: "success",
      message: "Login successful!",
      data: {
        user: tokenUser,
        token: token
      },
    };

    console.log(respone)

    res.status(200)
      .json(respone)

    return
  }).catch(err => {
    const respone = {
      status: 'error',
      message: 'Login failed! error: ' + err.message
    }

    console.log(respone)

    res.status(500)
      .json(respone)
  })
}

const signout = async (req, res, next) => {
  dettachCookieFromRespone(req, res)

  const respone = {
    status: 'success',
    message: 'User was signed out successfully!'
  }
  console.log(respone)

  res.status(200)
    .json(respone)
}

module.exports = {
  signup,
  signin,
  signout
}