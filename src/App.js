import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/Login.js";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
    </Routes>
  );
}

export default App;
