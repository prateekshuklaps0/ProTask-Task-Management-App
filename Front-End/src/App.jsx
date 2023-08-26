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

function App() {
  return (
    <Box className="App">
      <Navbar />
      {/* <SideBar /> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/temp" element={<Template />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/home" element={<Home_2 />} />
        <Route path="/task" element={<MyTasks />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        
      </Routes>
    </Box>
  );
}

export default App;
