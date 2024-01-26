import React from "react";
import "./index.css";

const Button = ({
  width = "265px",
  height = "68px",
  bgColor = "#FB7306",
  title = "",
  borderRadius = "32px"
}) => (
  <div
    className="btn-box"
    style={{ width, height, backgroundColor: bgColor, borderRadius }}
  >
    <p>{title}</p>
  </div>
);

export default Button;
