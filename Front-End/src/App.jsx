import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <Box className="App">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Box>
  );
}

export default App;
