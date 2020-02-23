import React from "react";

function Button(props) {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.btnContent}
    </button>
  );
}

export default Button;