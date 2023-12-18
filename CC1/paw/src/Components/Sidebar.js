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

function Sidebar() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="path/to/font-awesome/css/font-awesome.min.css"
      ></link>
      <div class="button-container">
        <nav className="n1">
          <i class="paw" style={{ position: "absolute", top: 2, left: 10 }}>
            <PawPrint size={50} />
          </i>
        </nav>
        <button class="button">
          <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </button>
        <button class="button">
          <Link to="/About" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </button>
        <button class="button">
          <Link
            to="/Contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact
          </Link>
        </button>
        <button class="button">
          <Link to="/Info" style={{ textDecoration: "none", color: "white" }}>
            Info
          </Link>
        </button>
        {/* <button class="button">About</button>
        <button class="button">Contact</button>

        <button class="button">Info</button> */}
      </div>
      <nav className="lnav">
        <a href="#" className="item" data-text="Dog">
          <Dog size={48} />
        </a>
        <a href="#" className="item" data-text="Bird">
          {/* <i class="fas fa-chart-line"></i> */}
          <Bird size={48} />
        </a>
        <a href="#" className="item" data-text="Cat">
          {/* <i class="fas fa-comments"></i> */}
          <Cat size={48} />
        </a>
        <a href="#" className="item" data-text="Rabbit">
          {/* <i class="fas fa-user-alt"></i> */}
          <Rabbit size={48} />
        </a>
        <a href="#" className="item" data-text="Logout">
          <Link to="/Login">
            <LogOut size={48} />
          </Link>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
