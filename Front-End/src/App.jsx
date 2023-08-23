import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Box className="App">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
