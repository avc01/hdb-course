// Imports
const User = require("../models/User");
const { nanoid } = require("nanoid");

// Controller Methods
const loginForm = (req, res) => {
  res.render("login");
};

const registerForm = (req, res) => {
  res.render("register");
};

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const isEmailRepeated = await User.findOne({ email });

    if (isEmailRepeated)
      throw new Error("Theres an account already using that same email");

    const user = new User({
      userName,
      email,
      password,
      tokenConfirm: nanoid(6),
    });

    await user.save();

    res.redirect("/auth/login");
  } catch (error) {
    res.json({ error: error.message });
  }
};

const confirmAccount = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({ tokenConfirm: token });

    if (!user) throw new Error("The token is not matching");

    user.accountVerified = true;
    user.tokenConfirm = null;

    await user.save();
    res.redirect("/auth/login");
  } catch (error) {
    res.json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) throw new Error("this email dont exist");

    if (!user.accountVerified) throw new Error("this account isnt verified");

    if (!(await user.comparePassword(password)))
      throw new Error("this password is invalid");

    res.redirect("/");
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Exports
module.exports = {
  loginForm,
  registerForm,
  registerUser,
  confirmAccount,
  loginUser,
};
