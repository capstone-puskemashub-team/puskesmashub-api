const db = require('../models')
const User = db.user

const checkUsername = async (req, res, next) => {
  const { username } = req.body

  await User.findOne({
    where: {
      username: username
    }
  }).then(user => {
    if (user) {
      const respone = {
        status: "error",
        message: `User with username ${username} already exists.`,
      };
      console.log(respone);

      res.status(409).json(respone);
      return;
    }

    next()
  })
}

module.exports = checkUsername
