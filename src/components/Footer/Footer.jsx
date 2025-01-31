import React from "react";
import "./Footer.css";
import Neha from "../../assets/Neha.jpg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-top-left">
          <img src={Neha} alt="Profile" />
          <p>
            I’m a full-stack web developer with a passion for building dynamic,
            user-friendly applications. I specialize in both front-end and
            back-end.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Neha Sain. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
