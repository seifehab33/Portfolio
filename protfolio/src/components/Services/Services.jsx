import React, { useState } from "react";
import "./Services.css";
function Services() {
  const [toggle, setToggle] = useState(0);
  const toggletab = (index) => {
    setToggle(index);
  };
  return (
    <section className="services section" id="service">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">My Offers</span>
      <div className="services_container container grid">
        <div className="services content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Frontend <br /> Development
            </h3>
          </div>
          <span
            className="services_button"
            onClick={() => {
              toggletab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggle === 1 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => {
                  toggletab(0);
                }}
              ></i>
              <h3 className="services_modal-title">Frontend Development</h3>
              <p className="services_modal-desc">
                Modern and responsive web applications with cutting-edge
                technologies
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    React.js (Hooks, Context API)
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Vue.js</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    HTML5, CSS3, JavaScript (ES6+), TypeScript
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Tailwind CSS, Bootstrap</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Redux Toolkit, React Query
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">React Hook Form, Zod</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Pinia</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Web Performance (Code Splitting, Lazy Loading)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Backend <br /> Development
            </h3>
          </div>
          <span
            className="services_button"
            onClick={() => {
              toggletab(2);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggle === 2 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggletab(0)}
              ></i>
              <h3 className="services_modal-title">Backend Development</h3>
              <p className="services_modal-desc">
                Robust and scalable server-side solutions with modern frameworks
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Nest.js</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">RESTful APIs</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">MySQL, SQLite</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">TypeORM</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">JWT, Passport.js</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services content">
          <div>
            <i className="uil uil-users-alt services_icon"></i>
            <h3 className="services_title">
              Personal <br /> Qualities
            </h3>
          </div>
          <span
            className="services_button"
            onClick={() => {
              toggletab(3);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggle === 3 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => {
                  toggletab(0);
                }}
              ></i>
              <h3 className="services_modal-title">Personal Qualities</h3>
              <p className="services_modal-desc">
                Key attributes that drive success in collaborative development
                environments
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Quick learner</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Creativity</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Adaptability</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Leadership</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Collaboration & Team Work
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
