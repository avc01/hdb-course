// Imports
const express = require("express");

const {
  loginForm,
  registerForm,
  registerUser,
} = require("../controllers/authController");

// Routes
const router = express.Router();

router.get("/login", loginForm);
router.get("/register", registerForm);
router.post("/register", registerUser);

// Exports
module.exports = router;
