import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { logout } from "../../stores/AccssTokenStore";

import "./index.css";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
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
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}  `
                }
                to="/login"
                onClick={() => {
                  if (currentUser) {
                    logout();
                  }
                }}
              >
                {currentUser ? "Logout" : "Login"}
              </NavLink>
            </li>
            <li className="nav-item ">
              {!currentUser && (
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}  `
                  }
                  to="/signup"
                >
                  SignUp
                </NavLink>
              )}
            </li>
            {currentUser &&
            <><li className="nav-item ">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}  `}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li><li>
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}  `}
                    to="/create-post"
                  >
                    Post
                  </NavLink>

                </li></>
              }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
