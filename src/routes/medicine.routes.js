const router = require("express").Router();

const medicineController = require('../controllers/medicine.controller')
const { authenticateUser } = require("../middlewares/authentication")

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
})

router.route('/')
  .post(medicineController.createMedicine)
  .get(medicineController.getAllMedicines)

router.route('/:id')
  .get(medicineController.getMedicineById)
  .put(medicineController.updateMedicineById)
  .delete(medicineController.deleteMedicineById)

module.exports = router