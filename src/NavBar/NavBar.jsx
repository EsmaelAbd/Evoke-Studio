import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navBar">
      <div className="logo">
        <p onClick={handleNavigate}>
          EVOKE <span>studio</span>
        </p>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuOpen ? "open" : "nav-links"}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Overview
        </NavLink>
        <NavLink
          to="/portrait"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portrait
        </NavLink>
        <NavLink
          to="/wedding"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Weddings
        </NavLink>
        <NavLink
          to="/grad"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Graduation
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
