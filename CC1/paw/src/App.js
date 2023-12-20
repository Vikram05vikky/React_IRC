import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
// import { Bird, Cat, Dog } from "lucide-react";
import Dog from "./Components/Card/Dog";
import Cat from "./Components/Card/Cat";

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {screenLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="" element={<Landing />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Dog" element={<Dog />} />
          <Route path="/Cat" element={<Cat />} />
          {/* <Route path="/Bird" element={<Bird />} /> */}
        </Routes>
      )}
    </div>
  );
}

export default App;
