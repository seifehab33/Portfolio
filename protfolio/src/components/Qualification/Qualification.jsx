import React from "react";
import "./Qualification.css";
import { useState } from "react";
function Qualification() {
  const [toggle, setToggle] = useState(1);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey </span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggle === 1
                ? "qualification_button qualification_active button--flex"
                : " qualification_button button--flex"
            }
            onClick={() => {
              setToggle(1);
            }}
          >
            <i class="uil uil-graduation-cap qualification_icon"></i> Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => {
              setToggle(2);
            }}
          >
            <i class="uil uil-briefcase-alt qualification_icon"></i> Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggle === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Engineering Development</h3>
                <span className="qualification_subtitle">
                  Egyptian Chinese University
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Software Development</h3>
                <span className="qualification_subtitle">
                  Egyptian Chinese University
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Web Development & Software Development
                </h3>
                <span className="qualification_subtitle">
                  Egyptian Chinese University
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Embedded System Development & Software Development
                </h3>
                <span className="qualification_subtitle">
                  Egyptian Chiense University
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineering</h3>
                <span className="qualification_subtitle">
                  Egyptian Chinese University
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> 2024 - 2025
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggle === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Frontend Developer</h3>
                <span className="qualification_subtitle">
                  Ulemt, Cairo, Egypt
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> March 2025 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Teaching Assistant</h3>
                <span className="qualification_subtitle">
                  Egyptian Chinese University, Cairo, Egypt
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> Oct 2024 - March 2025
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Full Stack Developer</h3>
                <span className="qualification_subtitle">
                  The Egyptian Stock Exchange, Cairo, Egypt
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> July 2023 - Aug 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Software Engineer</h3>
                <span className="qualification_subtitle">
                  Egypt Air, Cairo, Egypt
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">UI/UX Designer</h3>
                <span className="qualification_subtitle">
                  Egypt Air, Cairo, Egypt
                </span>
                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
