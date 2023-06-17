import "./Colaborations.css";
import React from "react";

const Colaborations = () => {
  return (
    <div className="colaborations-bg">
      <div className="cta-div1">
        <h2 className="cta-div1-title">Referanslarımız</h2>
        <p className="cta-div1-content">
          Bize güvenen ve beraber çalıştığımız iş ortaklarımız
        </p>
      </div>
      <div className="companies-bg">
        <div className="companies-div">
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c1.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
        </div>
        <div className="companies-div">
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c2.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c3.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
        </div>
        <div className="companies-div">
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c4.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c5.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c6.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
        </div>
        <div className="companies-div">
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c7.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c8.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
        </div>
        <div className="companies-div">
          <div className="company-sub-div">
            <img
              src={require("../../assets/companies/c9.png")}
              alt="company-icon"
              className="company-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colaborations;
