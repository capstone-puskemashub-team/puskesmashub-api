const { isTokenValid } = require('../utils/token')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.puskesmashubToken

  if (!token) {
    const response = {
      status: 'error',
      message: 'authentication invalid'
    }

    return res.status(401).json(response)
  }

  try {
    const { userId, username, roles} = isTokenValid({ token })
    req.user = { userId, username, roles }
    next();
  } catch (err) {
    const response = {
      status: 'error',
      message: 'authentication invalid'
    }

    return res.status(401).json(response)
  }
}

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if(!roles.includes(req.user.roles)) {
      const response = {
        status: 'error',
        message: 'Unauthorized to access this route'
      }
    }

    next()
  }
}

module.exports = {
  authenticateUser,
  authorizePermissions
}