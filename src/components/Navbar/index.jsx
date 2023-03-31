import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
// import { logout } from '../../services/AuthService';
import "./index.css";
const Navbar = ({onLogout }) => {
  const { currentUser, isAuthLoaded } = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid ">
        <Link className="navbar-brand nav-color" to="/">
        𝙋𝙡𝙖𝙣𝙞𝙛𝙮
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item li">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}  `
                }
                to="/login"
            
              >
                {currentUser ? "Logout" : "Login"}
              </NavLink>
            </li>
            <li className="nav-item li">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}  `
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;