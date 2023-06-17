import "./CTA.css";
import React from "react";

const CTA = () => {
  return (
    <div className="cta-bg">
      <img
        src={require("../../assets/ctaBG.png")}
        alt="cta-bg"
        className="cta-bg-img"
      />
      <div className="cta-div1">
        <h2 className="cta-div1-title">Test Yönetimiyle Neler Sağlıyoruz?</h2>
        <p className="cta-div1-content">IoT Destekli Çözümler</p>
      </div>
      <div className="cta-div2">
        <p className="cta-title">
          Yazılım Kalitesini <br />
          Arttırıyoruz
        </p>
        <img
          src={require("../../assets/CaretCircleDoubleRight.png")}
          alt=""
          className="cta-icon"
        />
        <p className="cta-title">
          Olası Hataları Önceden <br />
          Belirliyoruz
        </p>
        <img
          src={require("../../assets/CaretCircleDoubleRight.png")}
          alt=""
          className="cta-icon"
        />
        <p className="cta-title">
          Oluşabilecek Riskleri <br />
          Önlüyoruz
        </p>
        <img
          src={require("../../assets/CaretCircleDoubleRight.png")}
          alt=""
          className="cta-icon"
        />
        <p className="cta-title">
          Zaman ve Maliyetten <br /> Tasarruf Sağlıyoruz
        </p>
      </div>
    </div>
  );
};

export default CTA;
