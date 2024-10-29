const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

// get all Like user
router.get("", userController.getAllUser );
// get Single by id  Like user
router.get("/:id", userController.singleUser);
// post Create User
router.post("", (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;

  const newUser = { id, name, email };
  users.push(newUser);

  res.json({
    status: true,
    users,
  });
});

// update
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i].email = req.body.email;
    }
  }
  res.json({
    message: "User is updated",
    users,
  });
});

// Delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  users = users.filter((user) => user.id != id);

  res.json({
    status: true,
    users,
  });
});

module.exports = router;
