const User = require("../models/User");
const jwt = require("jsonwebtoken");

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

  // email check from database exist or not try catch
  try {
    let user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Use the comparePassword method from the user instance
    let result = await user.comparePassword(password, user.password);

    if (result) {
      // create jwt token
      const token = jwt.sign({ id: user._id }, "my-secret-key", {
        expiresIn: "1d",
      });
      return res
        .status(200)
        .json({ message: "JWT with Sign in successful", token });
      // console.log(token);
    } else {
      return res.status(401).json({ message: "Invalid Password" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Error during sign in", error: err.message });
  }
};

// middleware to protect routes
let protect = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, "my-secret-key", async (err, data) => {
    if (err) {
      return res
        .status(401)
        .json({ ststus: "Failed", message: "Unauthorized" });
    }
    try {
      const user = await User.findById(data.id);
      if (!user) {
        return res
          .status(404)
          .json({ status: "Failed", message: "User not found" });
      }
      req.user = user;
      next();
    } catch (err) {
      console.error(err);
    }
  });
};

let permitedTo = (roles) => {
  return (req, res, next) => {

    if (!roles.includes(req.user?.role)) {
      return res
        .status(403)
        .json({ status: "Failed", message: "Permission Denied" });
    }

    next();
  };
};

module.exports = {
  signUp,
  signIn,
  protect,
  permitedTo,
};
