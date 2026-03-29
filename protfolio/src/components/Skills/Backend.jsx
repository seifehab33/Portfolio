import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

function Backend() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">Nest.js</h3>
              <span className="skills_level">Backend framework</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">RESTful APIs</h3>
              <span className="skills_level">API integration and development</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">MySQL, SQLite</h3>
              <span className="skills_level">Database fundamentals</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">TypeORM</h3>
              <span className="skills_level">ORM workflow</span>
            </div>
          </div>
          <div className="skills_data">
            <HiCheckBadge />
            <div>
              <h3 className="skills_name">JWT, Passport.js</h3>
              <span className="skills_level">Authentication basics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
