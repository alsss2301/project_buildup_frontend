import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Join from "./components/Join";
import Main from "./components/Main";
import Login from "./components/Logins/Login";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/join" exact element={<Join />} />
      <Route path="/Main" exact element={<Main />} />
    </Routes>
  );
}

export default App;
