import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Shine from "./Components/Shine";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="" element={<Landing />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
