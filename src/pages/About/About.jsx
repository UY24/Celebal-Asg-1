import "./About.css";
import React from "react";

const About = () => {
  return (
    <div className="about-bg">
      <div className="about-div">
        <div className="about-details-div">
          <h1 className="title">Kalite ve Süreç Yönetimi</h1>
          <p className="about-div-content">
            Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
            sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
            Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz
            alanları güçlendirmek, uluslararası geçerliliği olan PMI®
            metodolojisini şirketinizde uygulamak ve geliştirmek için
            yanınızdayız.
          </p>
          <button className="btn">Keşfet</button>
        </div>
        <div className="about-img-div">
          <img
            src={require("../../assets/Illustration1.jpg")}
            alt=""
            className="illustration-img"
          />
        </div>
      </div>

      <div className="about-div">
        <div className="about-details-div">
          <h1 className="title">Test Yönetimi ve Analizi</h1>
          <p className="about-div-content">
            Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek
            amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya
            da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test
            ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile
            baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi
            sunmaktadır.
          </p>
          <button className="btn">Keşfet</button>
        </div>
        <div className="about-img-div">
          <img
            src={require("../../assets/Illustration2.jpg")}
            alt=""
            className="illustration-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
