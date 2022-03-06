// Imports
const express = require("express");

// Routes
const router = express.Router();

router.get("/", (req, res) => {
  const urls = [
    {
      origin: "www.google1.com",
      shortCut: "uqiwhoqadss1",
    },
    {
      origin: "www.google2.com",
      shortCut: "uqiwhoq124d",
    },
    {
      origin: "www.google3.com",
      shortCut: "uqiwhoq312",
    },
  ];
  res.render("home", { urls });
});

// Exports
module.exports = router;
