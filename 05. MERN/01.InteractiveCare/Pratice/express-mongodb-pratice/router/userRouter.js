const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

// get all Like user
router.get("", userController.getAllUser );
// get Single by id  Like user
router.get("/:id", userController.getSingleUser);
// post Create User
router.post("", userController.createNewUser);

// update
router.patch("/:id", userController.updateUser);
// Delete
router.delete("/:id", userController.deleteUser);

module.exports = router;
