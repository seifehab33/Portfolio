import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

function Frontend() {
  return (
    <>
      <div className="skills_content">
        <h3 className="skills_title">Frontend</h3>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">React.js</h3>
                <span className="skills_level">Hooks, Context API</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Next.js</h3>
                <span className="skills_level">Frontend framework</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Vue.js</h3>
                <span className="skills_level">Used at Ulemt</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">HTML5, CSS3</h3>
                <span className="skills_level">Core frontend fundamentals</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">JavaScript, TypeScript</h3>
                <span className="skills_level">ES6+ and typed development</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Tailwind CSS, Bootstrap</h3>
                <span className="skills_level">Styling and responsive UI</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Jest, React Testing Library</h3>
                <span className="skills_level">Frontend testing</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Redux Toolkit, React Query, Pinia</h3>
                <span className="skills_level">State and data management</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">React Hook Form, Zod</h3>
                <span className="skills_level">Forms and validation</span>
              </div>
            </div>
            <div className="skills_data">
              <HiCheckBadge />
              <div>
                <h3 className="skills_name">Code Splitting, Lazy Loading</h3>
                <span className="skills_level">Web performance basics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontend;
