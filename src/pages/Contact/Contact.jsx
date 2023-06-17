import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-bg">
      <div className="contact-div">
        <img
          src={require("../../assets/contact.png")}
          alt="user-icon"
          className="user-icon"
        />
        <div className="contact-data-div">
          <h1 className="contact-title">Bize Ulaşın</h1>
          <p className="contact-content">
            Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
            irtibata geçin.
          </p>
        </div>
        <button className="btn">Bize Ulaşın</button>
      </div>
    </div>
  );
};

export default Contact;
