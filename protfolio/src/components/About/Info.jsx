import React from "react";
import { HiOutlineFolderOpen } from "react-icons/hi";

function Info() {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="uil uil-award about_icon"></i>
        <h3 className="about_title">Current Role</h3>
        <span className="about_subtitle">Frontend Developer at Ulemt</span>
      </div>
      <div className="about_box ">
        <i className="uil uil-briefcase-alt about_icon"></i>
        <h3 className="about_title">Education</h3>
        <span className="about_subtitle">
          B.Sc. Software Engineering
        </span>
      </div>

      <div className="about_box">
        <HiOutlineFolderOpen className="about_icon" />
        <h3 className="about_title">Projects</h3>
        <span className="about_subtitle">
          5 selected frontend and full-stack projects
        </span>
      </div>
    </div>
  );
}

export default Info;
