const express = require("express");
const postController = require("../controller/postController");
const authController = require("../controller/authController");


const router = express.Router();

router.get("/index", authController.protect, authController.permitedTo(["admin"]), postController.index);

module.exports = router;
