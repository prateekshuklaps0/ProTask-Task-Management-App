const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  note: { type: String },
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = { ProjectModel };
