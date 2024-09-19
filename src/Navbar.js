import React from "react";
import Search from "./Search";
// import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navibar">
        <div className="navbar-brand current-location" id="current-loc">
          <i className="fa-solid fa-location-dot" id="location-pin"></i>
          <span id="city"></span>
        </div>
        <Search />
      </div>
    </nav>
  );
}
