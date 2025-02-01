import React from "react";
import Img1 from "../../assets/entryeagleg.png";
import Img2 from "../../assets/ebookstore.png";
import Img3 from "../../assets/coronavirus.png";
import Img4 from "../../assets/e-learning-platf.png";
import Img5 from "../../assets/weatherApp.png";
import Img6 from "../../assets/gymstation.png";
import "./Work.css";
function Work() {
  return (
    <section className="work section container" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Works</span>
      <div className="My_works">
        <div className="work_recent">
          <img src={Img1} alt="" />
          <div className="github">
            <button className="button">
              <a href="https://github.com/seifehab33/entryeagle">
                Check My GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="work_recent">
          <img src={Img2} alt="" />
          <div className="github">
            <button className="button">
              <a href="https://github.com/seifehab33/E-Book.git">
                Check My GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="work_recent">
          <img src={Img3} alt="" />
          <div className="github">
            <button className="button">
              <a href="https://github.com/seifehab33/-Webiste-Covid-19-">
                Check My GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="work_recent">
          <img src={Img4} alt="" />
          <div className="github">
            <button className="button">
              <a href="https://github.com/seifehab33/Movie-hub">
                Check My GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="work_recent">
          <img src={Img5} alt="" />
          <div className="github">
            <button className="button">
              <a href="https://github.com/seifehab33/Weather-App.git">
                Check My GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="work_recent">
          <img src={Img6} alt="" />
          <div className="github">
            <button className="button">
              <a href="https://github.com/seifehab33/E-Learning-Platform">
                Check My GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
