import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === Data.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide]);
  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? Data.length - 1 : prevSlide - 1
  //   );
  // };

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === Data.length - 1 ? 0 : prevSlide + 1
  //   );
  // };

  return (
    <section className="testimonial_container container" id="testimonials">
      <div className="swiper-wrapper">
        {Data.map(({ id, image, title, description }, index) => (
          <div
            key={id}
            className={`swiper-slide testimonial_card ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={image} alt="" />
            <h3 className="testimonial_name">{title}</h3>
            <p className="testimonial_desc">{description}</p>
          </div>
        ))}
      </div>
      {/* <div className="swiper-pagination">
        {Data.map(({ id }, index) => (
          <span
            key={id}
            className={`pagination-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div> */}
    </section>
  );
};

export default Testimonials;
