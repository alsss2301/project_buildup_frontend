import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Join from './components/Join';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/join" exact element={<Join/>} />
    </Routes>
  );
}

export default App;
