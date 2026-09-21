import { useState } from "react";
import { NavLink } from "react-router-dom";
import profilePhoto from "../assets/profile/Me.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-wrapper">
      <nav className="reference-navbar">

        {/* BRAND */}
        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <div className="brand-photo-wrapper">

            <img
              src={profilePhoto}
              alt="Lance Andre"
              className="brand-photo"
            />

            <span className="brand-online-dot"></span>

          </div>

          <div className="brand-text">

            <strong>
              Lance Andre
            </strong>

            <span>
              GHL Specialist • Web Developer
            </span>

          </div>
        </NavLink>


        {/* MOBILE BUTTON */}
        <button
          className={
            menuOpen
              ? "mobile-menu-button menu-open"
              : "mobile-menu-button"
          }
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          type="button"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>


        {/* NAVIGATION */}
        <div
          className={
            menuOpen
              ? "reference-links mobile-links-open"
              : "reference-links"
          }
        >

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            About
          </NavLink>


          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Projects
          </NavLink>


          <NavLink
            to="/skills"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Skills & Tools
          </NavLink>


          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Contact
          </NavLink>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;