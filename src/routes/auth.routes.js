const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const { signupValidator, signinValidator } = require('../validators/auth');
const checkUsername = require('../middlewares/checkUsername');

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
        message: 'Test /api/auth/test route success'
      })
  })

router.route('/signup')
  .post(signupValidator, checkUsername, authController.signup)

router.route('/signin')
  .post(signinValidator, authController.signin)

router.route('/signout')
  .post(authController.signout)

module.exports = router;