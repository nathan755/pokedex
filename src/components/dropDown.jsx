import React from "react";
// is this how you make a reusable component..
function DropDown(props) {
  return (
    <div>
      <label>{props.label}</label>

      <select onChange = {props.handleChange}  >
       {props.children}
      </select>
    </div>
  );
}

export default DropDown;