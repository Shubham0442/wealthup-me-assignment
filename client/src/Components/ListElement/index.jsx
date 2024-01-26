import React from "react";
import "./index.css";
import { TfiCheckBox } from "react-icons/tfi";

const ListElement = ({ title = "" }) => {
  return (
    <div className="list-ele-container">
      <div>
        <TfiCheckBox />
      </div>
      <div className="text-container">
        <div>{title}</div>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default ListElement;
