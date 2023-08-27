import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import LandingPage from "./Pages/LandingPage";
import PageNotFound from "./Pages/PageNotFound";

import SideBar from "./Components/SideBar";
import { Template } from "./Components/Template";
import Navbar from "./Components/Navbar";
import AfterLoginPage from "./Pages/AfterLoginPage";
import Home_2 from "./Pages/Home_2";
import MyTasks from "./Pages/MyTasks";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Box className="App">
      <Navbar />
      {/* <SideBar /> */}

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
        <Route
          path="/profile"
          element={
            // <PrivateRoute>
              <Profile />
            // </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
}

export default App;
