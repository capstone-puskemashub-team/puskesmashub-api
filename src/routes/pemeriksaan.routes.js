const router = require("express").Router();

const pemeriksaanController = require('../controllers/pemeriksaan.controller')
const { authenticateUser } = require("../middlewares/authentication")

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
})

router.route('/')
  .post(pemeriksaanController.createPemeriksaan)
  .get(pemeriksaanController.getAllPemeriksaan)

router.route('/:id')
  .get(pemeriksaanController.getPemeriksaanById)
  .put(pemeriksaanController.updatePemeriksaanById)
  .delete(pemeriksaanController.deletePemeriksaanById)
