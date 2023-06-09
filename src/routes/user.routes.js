const router = require('express').Router();

const userController = require("../controllers/user.controller");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

router.route("/").get(userController.getAllUsers);
router.route("/staff").get(userController.getAllStaff);
router.route("/doctor").get(userController.getAllDoctor);
// router.route('/showme').get(userController.showMe)
// router.route("/:id").get(userController.getSingleUser);
// router.route("/:id").put(userController.updateUser);
// router.route("/:id/password").put(userController.updateUserPassword);
// router.route("/:id").delete(userController.deleteUser);

module.exports = router;