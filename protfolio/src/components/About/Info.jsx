import React from "react";
import { BiSupport } from "react-icons/bi";
function Info() {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="uil uil-award about_icon"></i>
        <h3 className="about_title">Exprience</h3>
        <span className="about_subtitle">2 Years Working</span>
      </div>
      <div className="about_box ">
        <i class="uil uil-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">48 + Projects</span>
      </div>

      <div className="about_box">
        <BiSupport className="about_icon" />
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
