const router = require('express').Router();
const authRouter = require('./auth.route')

router.get('/', (req, res) => {
  res.status(200)
    .json({
      status: 'success',
      message: 'Hello World! Welcome to the PuskermasHub API'
    })
})

// const user = require('./user.route')

router.use('/auth', authRouter)

module.exports = router;