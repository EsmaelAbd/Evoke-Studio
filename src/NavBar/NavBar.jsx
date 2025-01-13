import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    /**
     * Close the menu when the user clicks outside of it
     */
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="navBar">
      <div className="logo">
        <p onClick={handleNavigate}>
          EVOKE <span>studio</span>
        </p>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger />
        {/* <span></span>
        <span></span>
        <span></span> */}
      </div>
      <div className={menuOpen ? "open" : "nav-links"} ref={menuRef}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Overview
        </NavLink>
        <NavLink
          to="/portrait"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Portrait
        </NavLink>
        <NavLink
          to="/wedding"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Weddings
        </NavLink>
        <NavLink
          to="/grad"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Graduation
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
