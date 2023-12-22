import "../Assets/Nav.css";
import { Link } from "react-router-dom";
import img1 from "../Assets/Img/Logo.png";
const Nav = () => {
  return (
    <body className="ho">
      <header>
        <img
          src={img1}
          style={{ position: "absolute", top: 0, left: 0, height: "100px" }}
        ></img>
        <h2 style={{ color: "white", fontWeight: "40px" }}>Paws</h2>
        <div class="navigation">
          <a className="info-btn">
            <Link style={{ color: "white" }} to="/Login">
              Login
            </Link>
          </a>
          <a className="info-btn">
            <Link style={{ color: "white" }} to="/Register">
              Register
            </Link>
          </a>
        </div>
      </header>
    </body>
  );
};

export default Nav;
