import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Home_2 from "./Pages/Home_2";
import Profile from "./Pages/Profile";
import MyTasks from "./Pages/MyTasks";
import PageNotFound from "./Pages/PageNotFound";

import { Template } from "./Components/Template";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Box className="App">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route
          path="/temp"
          element={
            <PrivateRoute>
              <Template />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home_2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/task"
          element={
            <PrivateRoute>
              <MyTasks />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
}

export default App;
