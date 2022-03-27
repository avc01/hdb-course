// Imports
const express = require("express");

const {
  loginForm,
  registerForm,
  registerUser,
  confirmAccount,
  loginUser,
} = require("../controllers/authController");

// Routes
const router = express.Router();

router.get("/login", loginForm);
router.post("/login", loginUser);

router.get("/register", registerForm);
router.post("/register", registerUser);

router.get("/accountConfirmation/:token", confirmAccount);

// Exports
module.exports = router;
