import React from "react";

function SearchBar(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>{props.lable}</label>
      <input onChange={props.handleChange} type="text"></input>
      <input onChange={props.handleChange} type="submit"></input>
    </form>
  );
}

export default SearchBar;
