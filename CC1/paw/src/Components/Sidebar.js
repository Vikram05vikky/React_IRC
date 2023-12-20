import React from "react";
import "../Assets/Sidebar.css";
import { Dog } from "lucide-react";
import { Bird } from "lucide-react";
import { Cat } from "lucide-react";
import { Rabbit } from "lucide-react";
import { PawPrint } from "lucide-react";
import { Home } from "lucide-react";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../Assets/Img/Logo.png";
// import Loader from "./Loader";
function Sidebar() {
  return (
    <div>
      {/* <Loader /> */}
      <link href="path/to/font-awesome/css/font-awesome.min.css"></link>
      <div className="button-container">
        <nav className="n1"></nav>

        <button className="button">
          <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </button>
        <button className="button">
          <Link to="/About" style={{ textDecoration: "none", color: "white" }}>
            Stories
          </Link>
        </button>
        <button className="button">
          <Link
            to="/Contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            About
          </Link>
        </button>
        <button className="button">
          <Link to="/Info" style={{ textDecoration: "none", color: "white" }}>
            Contact
          </Link>
        </button>
        <button className="button" style={{ color: "black" }}>
          ...
        </button>
      </div>
      <nav className="lnav">
        <img
          src={img1}
          style={{ position: "absolute", top: -15, left: 0, height: "100px" }}
        ></img>
        <br></br>
        <a className="item" data-text="Dog">
          <Link to="/Dog">
            <Dog size={48} style={{ textDecoration: "none", color: "white" }} />
          </Link>
        </a>
        <a className="item" data-text="Cat">
          <Link to="/Cat">
            <Cat size={48} style={{ textDecoration: "none", color: "white" }} />
          </Link>
        </a>
        <a className="item" data-text="Bird">
          <Link to="/Bird">
            <Bird
              size={48}
              style={{ textDecoration: "none", color: "white" }}
            />
          </Link>
        </a>
        <a className="item" data-text="Cat">
          <Link to="/Cat">
            <Rabbit
              size={48}
              style={{ textDecoration: "none", color: "white" }}
            />
          </Link>
        </a>

        <a className="item" data-text="Logout">
          <Link to="/Login">
            <LogOut
              size={48}
              style={{ textDecoration: "none", color: "white" }}
            />
          </Link>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
