const User = require("../models/User");

// // With Database

// // index
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json({
      status: true,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "An error occurred while fetching users",
    });
  }
};

// // // Single index
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
    res.json({
      status: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: false,
      message: "An error occurred while fetching the user",
    });
  }
};

// // create
const createNewUser = (req, res) => {
  // Validate and sanitize inputs
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  // Create a new user instance
  const user = new User({
    name: name.trim(),
    email: email.trim(),
  });

  // Save the user to the database
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

// // // Update

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
    res.json({
      status: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: false,
      message: "An error occurred while updating the user",
    });
  }
};

// // //  Delete

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
    res.json({
      status: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: false,
      message: "An error occurred while deleting the user",
    });
  }
};

// // Without Databse

// let users = [
//   {
//     id: 1,
//     name: "Sajedul Islam",
//     email: "s@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Rakib",
//     email: "r@gmail.com",
//   },
// ];

// let getAllUser = (req, res) => {
//   console.log("in user- all");
//   res.json({
//     status: true,
//     users,
//   });
// };

// let getSingleUser = (req, res) => {
//   const { id } = req.params;
//   let result;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id == id) {
//       result = users[i];
//       break;
//     }
//   }

//   res.json({
//     status: true,
//     result,
//   });
// };

module.exports = {
  getAllUser,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser

};
