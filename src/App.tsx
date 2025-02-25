import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Input from "./pages/input"

const RouteFile: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Input />} />
      </Routes>
    </Router>
  );
};

export default RouteFile;
