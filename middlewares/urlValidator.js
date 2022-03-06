const { throws } = require("assert");
const { URL } = require("url");

const validateUrl = (req, res, next) => {
  try {
    const { origin } = req.body;

    const urlFrontEnd = new URL(origin);

    if (urlFrontEnd.origin !== "null") {
      return next();
    }

    throw new Error("Incorrect URL Format");
  } catch (error) {
    return res.send("Incorrect URL Format");
  }
};

module.exports = validateUrl;
