import React from "react";

export default function Search() {
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
