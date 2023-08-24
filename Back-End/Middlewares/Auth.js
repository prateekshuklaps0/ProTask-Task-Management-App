const jwt = require("jsonwebtoken");

const { BlackListModel } = require("../Models/userModel");

const Auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ msg: "Token Missing!" });
  }

  const CheckBlackList = await BlackListModel.findOne({ token });
  if (CheckBlackList) {
    return res.status(401).json({ msg: "Invalid Token, LogIn Again" });
  }

  jwt.verify(token, "pro-task", async (err, verified) => {
    if (err) {
      return res.status(401).json({ msg: "Invalid Token Provided" });
    }

    req.body.userId = verified.id;

    next();
  });
};

module.exports = { Auth };
