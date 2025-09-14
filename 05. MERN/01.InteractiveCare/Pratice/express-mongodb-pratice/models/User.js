const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Enter an Email"],
    trim: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: "Enter a Valid Email",
    },
  },

  password: {
    type: String,
    required: [true, "Enter a password"],
    trim: true,
  },

  confirmPassword: {
    type: String,
    required: [true, "Enter a confirm password"],
    trim: true,
    validate: {
      validator: function () {
        console.log(this.password === this.confirmPassword);
        return this.password === this.confirmPassword;
      },
      message: "Password doesn't match",
    },
  },

  role: {
    type: String,
    enum: ["admin", "manager", "stuff", "user"],
    default: 'user',
  },

});

UserSchema.pre("save", async function (next) {
  try {
    console.log("this: " + this);
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    this.confirmPassword = hashedPassword;
  } catch (err) {
    console.log(err);
  }
  next();
});



UserSchema.methods.comparePassword = async function (userPassword, hashPassword) {
  const result = await bcrypt.compare(userPassword, hashPassword);
  return result;
}

const User = mongoose.model("User", UserSchema);
module.exports = User;
