import "./Footer.css";
import React from "react";
import { CiLinkedin, CiTwitter, CiFacebook } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer-div1-bg">
        <ul className="footer-ul">
          <li className="footer-link">
            <a href="#sample" target="_blank" rel="noreferrer">
              Çözüm ve Hizmetler
            </a>
          </li>
          <li className="footer-link">
            <a href="#sample" target="_blank" rel="noreferrer">
              Yazılım Geliştirme
            </a>
          </li>
          <li className="footer-link">
            <a href="#sample" target="_blank" rel="noreferrer">
              Outsourcing
            </a>
          </li>
          <li className="footer-link">
            <a href="#sample" target="_blank" rel="noreferrer">
              Kalite ve Süreç Yönetimi
            </a>
          </li>
          <li className="footer-link">
            <a href="#sample" target="_blank" rel="noreferrer">
              Danışmanlık
            </a>
          </li>
          <li className="footer-link">
            <a href="#sample" target="_blank" rel="noreferrer">
              IoT Destekli Çözümler
            </a>
          </li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-link">Ürünler</li>
          <li className="footer-link">Eğitim Yönetim Sistemi</li>
          <li className="footer-link">İnsan Sermayesi Yönetim Sistemi</li>
          <li className="footer-link">Müşteri İlişkileri Yönetim Sistemi</li>
          <li className="footer-link">İçerik Yönetim Sistemi</li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-link">Kurumsal</li>
          <li className="footer-link">Hakkımızda</li>
          <li className="footer-link">Belge ve Yetkinlikler</li>
          <li className="footer-link">İş Ortakları</li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-link">İletişim</li>
          <li className="footer-link">Bilgi İstek Formu</li>
          <li className="footer-link">Uzman Talep Formu</li>
        </ul>
      </div>
      <div className="footer-div2-bg">
        <div className="copyright-div">
          <p>&#169; Copyright 2010-2021 - Can Çevik </p>
          <br />
          <p> *Made by Ujjwal*</p>
        </div>
        <div className="social-media-div">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="sm-icons"
          >
            <CiLinkedin fontSize="1.5rem" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="sm-icons"
          >
            <CiTwitter fontSize="1.5rem" />
          </a>
          <a
            href="https://www.instgram.com"
            target="_blank"
            rel="noreferrer"
            className="sm-icons"
          >
            <RxInstagramLogo fontSize="1.5rem" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="sm-icons"
          >
            <CiFacebook fontSize="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
