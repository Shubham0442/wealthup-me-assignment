import React from "react";
import "./index.css";
import { Button } from "../../Components";

const MiddleSection = () => {
  return (
    <div className="mid-container">
      <div className="wave-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1502"
          height="1050"
          viewBox="0 0 1502 790"
          fill="none"
        >
          <path
            d="M1007 172C689 62 449 124 295 282C178.954 401.06 51.4328 419.449 -7 413.383V790H1509V0C1275.4 187.2 1077 192.667 1007 172Z"
            fill="#0A5783"
          />
        </svg>
        <div className="content-box">
          <div className="text-heading">How it works?</div>
          <div className="diagram-box">
            <img src="/images/how-it-works.png" alt="diagram" />
          </div>
          <div className="content-description">
            <div className="ans-box">Answer few questions</div>
            <div className="reg-box">Register using phone and OTP</div>
            <div className="report-box">Get report and personal roadmap</div>
          </div>
          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
