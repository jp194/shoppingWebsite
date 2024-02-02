var express = require("express");

const router = express.Router();
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const { requireSignIn } = require("../middlewares/authMiddleware");

router.post("/register", registerController);

router.post("/login", loginController);

module.exports = router;
