import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="main-weather-container">
      <img
        id="icon"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/811/original/sun.png?1695302792"
        alt=""
        className="main-weather-img"
      ></img>
      <div>
        <span className="current-temp" id="temperature">
          27
        </span>
        <span className="units">
          {/* <a href="#" id="celsius-link" className="active"> */}
          °C
          {/* </a>{" "} */}| {/* <a href="" id="farenheit-link"> */}
          °F
          {/* </a> */}
        </span>
      </div>
      <p className="weather-description" id="description"></p>
      <p className="today-temp">
        <strong>
          {" "}
          l: <span id="low-temp"></span> h: <span id="high-temp"></span>
        </strong>
      </p>
      <p>
        <span id="date"></span>
        <span id="time"></span>
        <span id="suffix"></span>
      </p>
    </div>
  );
}
