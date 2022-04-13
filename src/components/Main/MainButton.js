import "./Main.scss";
import React from "react";

function MainButton(props) {
  return <button className={props.buttonStyle}>{props.children}</button>;
}

export default MainButton;
