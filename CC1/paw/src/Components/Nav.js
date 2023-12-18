import "../Assets/Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <body className="ho">
      <header>
        <h1>
          <a className="logo">Paws</a>
        </h1>
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
