const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/getAllusers/" , userController.getAllUsers);

router.post("/signup/", userController.signup);

router.post("/login/", userController.login);

module.exports = router;