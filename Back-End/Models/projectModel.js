const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = { ProjectModel };
