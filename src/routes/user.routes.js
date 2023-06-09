const router = require('express').Router();

const userController = require("../controllers/user.controller");
const { authenticateUser } = require('../middlewares/authentication');

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

router.route("/").get(authenticateUser, userController.getAllUsers);

// router.route("/staff").get(authenticateUser, userController.getAllStaff);

// router.route("/doctor").get(authenticateUser, userController.getAllDoctor);

router.route("/current_user").get(authenticateUser, userController.getCurrentUser);

router.route("/:id").get(authenticateUser, userController.getSingleUser);

router.route("/update_user").put(authenticateUser, userController.updateUser);

router.route("/update_password").put(authenticateUser, userController.updateUserPassword);

router.route("/delete").delete(authenticateUser, userController.deleteUser);

module.exports = router