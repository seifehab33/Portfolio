import React from "react";
import "./Home.css";
import "./Social";
import Social from "./Social";
import Data from "./Data";
function Home() {
  return (
    <section className="section home" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
}

export default Home;
