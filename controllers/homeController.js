// Imports
const { nanoid } = require("nanoid");

const Url = require("../models/Url");

// Controller Methods
const readUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean();
    res.render("home", { urls });
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const postUrl = async (req, res) => {
  try {
    const { origin } = req.body;

    const url = new Url({
      origin,
      shortURL: nanoid(10),
    });

    await url.save();

    res.redirect("/");
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;

    await Url.findByIdAndDelete(id);

    res.redirect("/");
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const editUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await Url.findById(id).lean();
    res.render("home", { url });
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const postEditedUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const { origin } = req.body;

    await Url.findByIdAndUpdate(id, { origin });

    res.redirect("/");
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { url } = req.params;

    const dbUrl = await Url.findOne({ shortURL: url });

    res.redirect(dbUrl.origin);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

// Exports
module.exports = {
  readUrls,
  postUrl,
  deleteUrl,
  editUrl,
  postEditedUrl,
  redirectUrl,
};
