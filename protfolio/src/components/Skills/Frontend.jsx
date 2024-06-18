import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
function Frontend() {
  return (
    <>
      <div className="skills_content">
        <h3 className="skills_title">Frontend developer</h3>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">HTML</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">CSS</h3>
                <span className="skills_level">Advanced</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">JavaScript</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Tailwind CSS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">BootStrap</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Git</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">React.js</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Redux Toolkit</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontend;
