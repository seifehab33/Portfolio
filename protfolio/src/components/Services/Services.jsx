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
              FullStack <br /> Developer
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
              <h3 className="services_modal-title">Full Stack Developer</h3>
              <p className="services_modal-desc">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop user interface
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page development.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Secure Web pages.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Developing <br /> Servers
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
              <h3 className="services_modal-title">Developing Servers</h3>
              <p className="services_modal-desc">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop user interface
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page development.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Secure Web pages.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Visual <br /> Designer
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
              <h3 className="services_modal-title">Visual Designer</h3>
              <p className="services_modal-desc">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop user interface
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page development.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Secure Web pages.</p>
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
