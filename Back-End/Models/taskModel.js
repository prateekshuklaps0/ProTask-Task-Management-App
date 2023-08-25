const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  dueDate: { type: String, required: true },
  assignedTo: { type: String },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = { TaskModel };
