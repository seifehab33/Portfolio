import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

function VersionControl() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Version Control</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Git</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">GitHub</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Git Flow</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Branch Management</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Pull Requests</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VersionControl;
