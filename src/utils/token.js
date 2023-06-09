const jwt = require('jsonwebtoken');

const createTokenUser = (user, role) => {
  return { userId: user.userId, username: user.username, roles: (role.map((item) => item.name)) };
}

const generateToken = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })

  return token
}

const isTokenValid = ({ token }) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (err) {
    console.log(err)
    return false
  }
}

const attachCookieToRespone = ({ res, user }) => {
  const token = generateToken({ payload: user })
  const oneDay = 1000 * 60 * 60 * 24

  res.cookie("puskesmashubToken", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });

  return token
}

module.exports = {
  createTokenUser,
  generateToken,
  isTokenValid,
  attachCookieToRespone
}