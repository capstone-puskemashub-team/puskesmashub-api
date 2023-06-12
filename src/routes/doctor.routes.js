const router = require("express").Router();

const doctorController = require('../controllers/doctor.controller')
const { authenticateUser } = require("../middlewares/authentication");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

router.route('/')
  .post(doctorController.createDoctor)

router.route('/')
  .get(doctorController.getAllDoctors)

router.route('/:id')
  .get(doctorController.getDoctorById)

router.route('/:id')
  .put(doctorController.updateDoctorById)

router.route('/:id')
  .delete(doctorController.deleteDoctorById)

module.exports = router