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
const doctorRouter = require('./doctor.routes');
const medicineRouter = require('./medicine.routes')
const diseaseRouter = require('./disease.routes')
const patientRouter = require('./patient.routes')
// route pemeriksaan masih belum. cooming soon ya :D

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/doctors', doctorRouter)
router.use('/medicines', medicineRouter)
router.use('/diseases', diseaseRouter)
router.use('/patients', patientRouter)

module.exports = router;