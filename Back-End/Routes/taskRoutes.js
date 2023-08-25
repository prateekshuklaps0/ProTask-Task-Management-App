const express = require("express");

const { Auth } = require("../Middlewares/Auth");
const { ProjectIDInserter } = require("../Middlewares/ProjectIDInserter");
const { TaskModel } = require("../Models/taskModel");

const taskRoute = express.Router();

// Add Task
taskRoute.post("/addtask", Auth, ProjectIDInserter, async (req, res) => {
  try {
    const TaskData = TaskModel(req.body);
    await TaskData.save();

    res.status(201).json({ msg: "Task Created Successfully", TaskData });
  } catch (error) {
    console.error("Adding Task Error :", error);
    res.status(500).json({ msg: "Adding Task Error" });
  }
});

// Get Tasks
taskRoute.get("/", Auth, ProjectIDInserter, async (req, res) => {
  try {
    const { projectId } = req.body;

    const TasksData = await TaskModel.find({ projectId });

    res.status(201).json(TasksData);
  } catch (error) {
    console.error("Getting Tasks Error :", error);
    res.status(500).json({ msg: "Getting Tasks Error" });
  }
});

// Update a Task
taskRoute.patch(
  "/update/:taskId",
  Auth,
  ProjectIDInserter,
  async (req, res) => {
    try {
      const { taskId } = req.params;

      const FoundTask = await TaskModel.findByIdAndUpdate(taskId, req.body, {
        new: true,
      });

      if (!FoundTask) {
        return res.status(204).json({ msg: "Task not found" });
      }

      res.status(200).json({ msg: "Task Updated" });
    } catch (error) {
      console.error("Task Updating Error :", error);
      res.status(500).json({ msg: "Task Updating Error" });
    }
  }
);

// Delete a Task
taskRoute.delete("/delete/:taskId", Auth, async (req, res) => {
  try {
    const { taskId } = req.params;

    const FoundAndDelete = await TaskModel.findByIdAndDelete(taskId);

    if (!FoundAndDelete) {
      return res.status(204).json({ msg: "Task not found" });
    }

    res.status(200).json({ msg: "Task Deleted" });
  } catch (error) {
    console.error("Task Deletion Error :", error);
    res.status(500).json({ msg: "Task Deletion Error" });
  }
});

module.exports = { taskRoute };
