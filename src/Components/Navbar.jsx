import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../CSS/App.css";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar-header">
      <button
        className={`navbar-toggle ${isExpanded ? "expanded" : ""}`}
        onClick={toggleNavbar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`navbar-nav ${isExpanded ? "expanded" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/Intro"
              className={({ isActive }) => (isActive ? "active" : "nav")}
              onClick={toggleNavbar}
            >
              Intro
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Technicals"
              className={({ isActive }) => (isActive ? "active" : "nav")}
              onClick={toggleNavbar}
            >
              Technicals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) => (isActive ? "active" : "nav")}
              onClick={toggleNavbar}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "active" : "nav")}
              onClick={toggleNavbar}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Quiz"
              className={({ isActive }) => (isActive ? "active" : "nav")}
              onClick={toggleNavbar}
            >
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
