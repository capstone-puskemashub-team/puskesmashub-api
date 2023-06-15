const router = require("express").Router();

const patientController = require('../controllers/patient.controller')
const { authenticateUser } = require("../middlewares/authentication")

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
})

router.route('/')
  .post(patientController.createPatient)
  .get(patientController.getAllPatients)  

router.route('/:id')
  .get(patientController.getPatientById)
  .put(patientController.updatePatientById)
  .delete(patientController.deletePatientById)

module.exports = router