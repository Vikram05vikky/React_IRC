import "../Assets/Sidebar.css";
import { Link } from "react-router-dom";

import img1 from "../Assets/Img/Logo.png";
function PPNav() {
  return (
    <div>
      <link href="path/to/font-awesome/css/font-awesome.min.css"></link>
      <div className="button-container">
        <nav className="n1"></nav>
        <img
          src={img1}
          style={{ position: "absolute", top: -15, left: 0, height: "100px" }}
        ></img>
        <button className="button">
          <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </button>
        <button className="button">
          <Link
            to="/Stories"
            style={{ textDecoration: "none", color: "white" }}
          >
            Stories
          </Link>
        </button>
        {/* <button className="button">
          <Link to="/About" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </button> */}
        <button className="button">
          <Link
            to="/Contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact
          </Link>
        </button>
        <button className="button" style={{ color: "black" }}>
          ...
        </button>
      </div>
    </div>
  );
}

export default PPNav;
