import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

function VersionControl() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Git & DevOps</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Git & GitHub</h3>
              <span className="skills_level">Version control workflow</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Docker</h3>
              <span className="skills_level">Familiar with container basics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VersionControl;
