import React from "react";
// import Search from "./Search";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

export default function Navbar() {
  //   let apiKey = `aed3fabf26t4afa48435e0ea0oed7b6e`;
  //   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
  //   axios.get(apiUrl).then(displayWeatherData);
  //   function displayWeatherData(response) {
  //     alert(
  //       `It is ${Math.round(response.data.temperature.current)} in ${props.city}`
  //     );

  return (
    <nav className="Navbar navbar d-flex container-fluid navibar">
      {/* <nav className="navbar"> */}
      {/* <div className=""> */}
      <div className="navbar-brand current-location" id="current-loc">
        <i className="fa-solid fa-location-dot" id="location-pin"></i>
        <span id="city">New York</span>
        {/* </div> */}
        {/* <Search city="New York" /> */}
      </div>
      {/* </nav>{" "} */}
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
    </nav>
  );
}
