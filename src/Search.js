import React from "react";
import axios from "axios";

export default function Search(props) {
  let apiKey = `aed3fabf26t4afa48435e0ea0oed7b6e`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWeatherData);

  function displayWeatherData(response) {
    alert(
      `It is ${Math.round(response.data.temperature.current)} in ${props.city}`
    );
  }

  return (
    <form className="d-flex" id="search-form">
      <input
        type="search"
        id="search-input"
        className="form-control me-2"
        placeholder="Search a city"
        autocomplete="off"
      ></input>
      <button className="btn btn-outline-light" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
