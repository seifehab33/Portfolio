import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

function Backend() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Django</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Python</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">PostgreSQL</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
