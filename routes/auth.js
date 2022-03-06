// Imports
const express = require("express");

// Routes
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

// Exports
module.exports = router;
