import React from "react";
import "./index.css";
import { Button, ListElement } from "../../Components";

const TopSection = () => {
  const leftList = ["Expected Retirement Age", "Identify Mistakes"];
  const rightList = ["Personalised Road Map", "Tips To Improve"];

  return (
    <div className="top-container">
      <div className="app-heading">Check your financial health</div>
      <div className="desc-text">
        Use WeathoMeter to get a free report card for your finances-within
        minutes!
      </div>
      <Button title="Get Started" />
      <div className="mob-container">
        <div className="left-list">
          {leftList.map((el) => (
            <ListElement title={el} key={el} />
          ))}
        </div>
        <div className="mob-app-container">
          <img src="/images/mobile-app.png" alt="mobile-app" />
        </div>
        <div className="right-list">
          {rightList.map((el) => (
            <ListElement title={el} key={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
