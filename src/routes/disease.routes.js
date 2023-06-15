const router = require("express").Router()

const diseaseController = require('../controllers/disease.controller')
const { authenticateUser } = require('../middlewares/authentication')

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

router.route('/')
  .post(diseaseController.createDisease)
  .get(diseaseController.getAllDisease)

router.route('/:id')
  .get(diseaseController.getDiseaseById)
  .put(diseaseController.updateDiseaseById)
  .delete(diseaseController.deleteDiseaseById)

module.exports = router