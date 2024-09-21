import React from "react";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar Navbar">
      <div className="container-fluid navibar">
        <div className="navbar-brand current-location" id="current-loc">
          <i className="fa-solid fa-location-dot" id="location-pin"></i>
          <span id="city">New York</span>
        </div>
        <Search city="New York" />
      </div>
    </nav>
  );
}
