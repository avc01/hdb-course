// Imports
const express = require("express");

const {
  readUrls,
  postUrl,
  deleteUrl,
  editUrl,
  postEditedUrl,
  redirectUrl,
} = require("../controllers/homeController");

const validateUrl = require("../middlewares/urlValidator");

// Routes
const router = express.Router();

router.get("/", readUrls);
router.get("/delete/:id", deleteUrl);
router.post("/", validateUrl, postUrl);
router.get("/edit/:id", editUrl);
router.post("/edit/:id", validateUrl, postEditedUrl);
router.get("/:url", redirectUrl);

// Exports
module.exports = router;
