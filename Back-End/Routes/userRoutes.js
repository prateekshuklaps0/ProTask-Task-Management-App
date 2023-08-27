const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { Auth } = require("../Middlewares/Auth");
const { UserModel, BlackListModel } = require("../Models/userModel");

const userRoute = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "harshittechi9@gmail.com",
    pass: "xbtgiqyuzchtwpvv",
  },
});

// transporter
//   .sendMail({
//     from: "harshittechi9@gmail.com",
//     // to:"prateekshuklaps0@gmail.com",
//     subject: "This is Harshit from backend",
//     text: "Hey i am from Harshit backend application",
//     text: `Your OTP for the password reset process is ${OtpNo}`,
//   })
//   .then(() => {
//     console.log(`Mail sent sucessfully  ${OtpNo}`);
//     console.log(OtpNo);
//   })
//   .catch(() => {
//     console.log("Transporter Mail Error :", err);
//   });

// SignUp
userRoute.post("/signup", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const found = await UserModel.findOne({ email });
    if (found) {
      res.json({ message: "Email Already Registered!" });
    }
    else{
      const hashed = await bcrypt.hash(pass, 10);

      const UserData = UserModel({ ...req.body, pass: hashed });
      await UserData.save();
  
      res.status(201).json({
        msg: "User Registered Sucessfully!",
        RegisteredUser: UserData,
      });
    }

   
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
      userDetails: found,
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

// Get All Users List - for Task Assigning Purpose - Authenticated Route
userRoute.get("/", Auth, async (req, res) => {
  try {
    const AllUsers = await UserModel.find();

    res.status(201).json(AllUsers);
  } catch (error) {
    console.error("Getting All Users Error :", error);
    res.status(500).json({ msg: "Getting All Users Error" });
  }
});

// Get a Single User Data  Authenticated Route
userRoute.get("/single/:userId", Auth, async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(401).json({ msg: "Invalid userId params." });
    }

    const User = await UserModel.findOne({ _id: userId });

    res.status(201).json(User);
  } catch (error) {
    console.error("Getting All Users Error :", error);
    res.status(500).json({ msg: "Getting All Users Error" });
  }
});

module.exports = { userRoute };

// Otp Generator
function otpGenerator() {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return Number(otp);
}
