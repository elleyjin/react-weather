import React from "react";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar d-flex">
      <nav className="navbar">
        <div className="container-fluid navibar">
          <div className="navbar-brand current-location" id="current-loc">
            <i className="fa-solid fa-location-dot" id="location-pin"></i>
            <span id="city">New York</span>
          </div>
          {/* <Search city="New York" /> */}
        </div>
      </nav>{" "}
      <form className="Search d-flex" id="search-form">
        <input
          type="search"
          id="search-input"
          className="form-control me-2"
          placeholder="Search a city"
          autoComplete="off"
        ></input>
        <button className="btn btn-outline-light" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
