const mongoose = require("mongoose");

// UserModel
const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
  },
  { versionKey: false }
);
const UserModel = mongoose.model("User", UserSchema);

// Token BlackListing Model
const BlacklistSchema = mongoose.Schema(
  {
    token: { type: String, required: true },
  },
  { versionKey: false }
);
const BlackListModel = mongoose.model("Blacklist", BlacklistSchema);

module.exports = { UserModel, BlackListModel };
