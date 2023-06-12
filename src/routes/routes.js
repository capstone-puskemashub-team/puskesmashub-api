const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200)
    .json({
      status: 'success',
      message: 'Hello World! Welcome to the PuskermasHub API'
    })
})

const authRouter = require('./auth.routes')
const userRouter = require('./user.routes')
const doctorRouter = require("./doctor.routes");

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/doctors', doctorRouter)

module.exports = router;