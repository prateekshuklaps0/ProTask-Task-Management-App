const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel, BlackListModel } = require("../Models/userModel");

const userRoute = express.Router();

// SignUp
userRoute.post("/signup", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const found = await UserModel.findOne({ email });
    if (found) {
      return res.status(400).json({ message: "Email Already Registered!" });
    }

    const hashed = await bcrypt.hash(pass, 10);

    const UserData = UserModel({ ...req.body, pass: hashed });
    await UserData.save();

    res.status(201).json({
      msg: "User Registered Sucessfully!",
      RegisteredUser: UserData,
    });
  } catch (error) {
    console.error("SignUp Error :", error);
    res.status(500).json({ msg: "SignUp Error" });
  }
});

// LogIn
userRoute.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const found = await UserModel.findOne({ email });
    if (!found) {
      return res.status(404).json({ msg: "User Doesn't Exists!" });
    }

    const Matched = await bcrypt.compare(pass, found.pass);
    if (!Matched) {
      return res.status(401).json({ msg: "Wrong Password!" });
    }

    const token = jwt.sign({ id: found._id }, "pro-task");

    res.status(200).json({
      msg: "User LogIn Succesfull",
      token,
    });
  } catch (error) {
    console.error("LogIn Error :", error);
    res.status(500).json({ msg: "LogIn Error" });
  }
});

// LogOut
userRoute.post("/logout", async (req, res) => {
  try {
    const userToken = req.headers.authorization;
    if (!userToken) {
      return res.status(401).json({ msg: "Provide User Token!" });
    }

    const BlacklistedToken = BlackListModel({ token: userToken });
    await BlacklistedToken.save();

    res.status(200).json({
      msg: "User Logged Out!",
      BlacklistedToken: userToken,
    });
  } catch (error) {
    console.error("LogOut Error :", error);
    res.status(500).json({ msg: "LogOut Error" });
  }
});

module.exports = { userRoute };
