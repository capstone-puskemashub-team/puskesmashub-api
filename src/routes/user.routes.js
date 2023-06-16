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

router.route("/").get(userController.getAllUsers);

// router.route("/staff").get(authenticateUser, userController.getAllStaff);

// router.route("/doctor").get(authenticateUser, userController.getAllDoctor);

// router.route("/current_user").get(userController.getCurrentUser);

// router.route("/:id").get(authenticateUser, userController.getSingleUser);

// router.route("/update_user").put(authenticateUser, userController.updateUser);

// router.route("/update_password").put(userController.updateUserPassword);

// router.route("/delete").delete(userController.deleteUser);

// this route is for testing not using auth
router.route("/:id").get(userController.getUserById);

router.route("/:id").put(userController.updateUserById);

router.route("/:id").put(userController.updateUserPasswordById);

router.route("/:id").post(userController.deleteUserById);

module.exports = router