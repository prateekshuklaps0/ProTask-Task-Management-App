const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes Import
const { userRoute } = require("./Routes/userRoutes");
const { projectRoute } = require("./Routes/projectRoutes");
const { taskRoute } = require("./Routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", async (req, res) => {
  try {
    res.status(201).json({ msg: "Welcome To HomePage" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went Wrong!" });
  }
});

// Other Routes
app.use("/users", userRoute);
app.use("/project", projectRoute);
app.use("/tasks", taskRoute);

app.listen(8080, async () => {
  try {
    await mongoose.connect(process.env.DB_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected and Listening to Port : 8080");
  } catch (error) {
    console.log("Connection Error : ", error);
  }
});
