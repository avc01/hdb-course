// Imports
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

// Schema
const userSchema = new Schema({
  userName: {
    type: String,
    unique: false,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokenConfirm: {
    type: String,
    default: null,
  },
  accountVerified: {
    type: Boolean,
    default: false,
  },
});

// Pre processors - this one is to hash the password before adding it
userSchema.pre("save", async function (next) {
  try {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    next();
  } catch (error) {
    res.json({ error });
    next();
  }
});

// Methods - this one is to validate the password before login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;
