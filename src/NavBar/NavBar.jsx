import React from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="navBar">
      <div className="logo">
        <p onClick={handleNavigate}>
          EVOKE <span>studio</span>
        </p>
      </div>
      <div className="nav-links">
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
