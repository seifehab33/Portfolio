import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">S|E Dev</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="#facebook"
            rel="noopener noreferrer"
            target="_blank"
            className="footer_social-link"
          >
            <i class="uil uil-facebook"></i>
          </a>
          <a href="#instgram" target="_blank" className="footer_social-link">
            <i class="uil uil-instagram-alt"></i>
          </a>
          <a href="#twitter" target="_blank" className="footer_social-link">
            <i class="uil uil-twitter-alt"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; MySite. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
