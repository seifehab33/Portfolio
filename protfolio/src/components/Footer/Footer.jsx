import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Seif Ehab</h1>
        <p className="footer_tagline">
          Frontend developer based in Cairo, Egypt.
        </p>
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
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://github.com/seifehab33"
            rel="noopener noreferrer"
            target="_blank"
            className="footer_social-link"
            aria-label="GitHub"
          >
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/seif-ehab-2b95481a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_social-link"
            aria-label="LinkedIn"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="mailto:sefehab189@gmail.com"
            className="footer_social-link"
            aria-label="Email"
          >
            <i className="uil uil-envelope"></i>
          </a>
        </div>
        <div className="footer_bottom">
          <span className="footer_note">
            Open to frontend opportunities.
          </span>
          <span className="footer_copy">
            &#169; {new Date().getFullYear()} Seif Ehab. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
