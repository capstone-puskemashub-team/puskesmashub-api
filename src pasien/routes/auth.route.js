const router = require('express').Router();
const authController = require('../controllers/auth.controller')

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  )

  next()
})

router.route('/test')
  .get((req, res) => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Test /api/auth/test route success',
        data: {
          username: req.body.username,
          password: req.body.password
        }
      })
  })

router.route('/signup')
  .post(authController.signup) // TODO: add signup validation

router.route('/signin')
  .post(authController.signin) // TODO: add signin validation


module.exports = router;
