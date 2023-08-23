import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";

import SideBar from "./Components/SideBar";
import { Template } from "./Components/Template";


function App() {
  return (
    <Box className="App">

      <Navbar />
      <SideBar />


      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/temp" element={<Template />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
