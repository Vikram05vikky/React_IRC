import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Shine from "./Components/Shine";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
