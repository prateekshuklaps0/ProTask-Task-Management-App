import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Box className="App">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
