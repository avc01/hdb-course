// Imports

// Controller Methods
const loginForm = (req, res) => {
  res.render("login");
};

const registerForm = (req, res) => {
  res.render("register");
};

const registerUser = async (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

// Exports
module.exports = {
  loginForm,
  registerForm,
  registerUser,
};
