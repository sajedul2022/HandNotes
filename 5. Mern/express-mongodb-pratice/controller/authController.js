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

let signIn = async (req, res) => {
  const { email, password } = req.body;

  // email and password not empty check
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // email check from databse exist or not try catch
  try {

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Sign in successful", user });

  } 
  
  catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error during sign in", error: err.message });
  }
};

module.exports = {
  signUp,
  signIn,
};
