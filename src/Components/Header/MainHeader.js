import "./MainHeader.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>Codentire Technologies</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>Services</li>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            <li>Forms</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
