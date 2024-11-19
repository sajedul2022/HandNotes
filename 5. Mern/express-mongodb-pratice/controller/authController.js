const User = require("../models/User");

let signUp = (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  user
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).json({
        message: "User created successfully",
        data,
      });
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error creating user", error: err.message });
    });
};

let signIn = (req, res) => {};

module.exports = {
  signUp,
  signIn,
};
