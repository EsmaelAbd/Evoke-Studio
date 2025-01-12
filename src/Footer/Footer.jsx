import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <a href="" target="#">
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100064275182134"
        target="#"
      >
        <FaFacebook />
      </a>
      <a href="@Evoke_studio99" target="#">
        <FaTelegram />
      </a>
    </div>
  );
};

export default Footer;
