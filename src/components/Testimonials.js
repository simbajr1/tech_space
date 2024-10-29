// src/pages/Testimonials.js
import React, { useState } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Doe",
      description: "TechSpace transformed our business with their top-notch IT support and innovative solutions. Highly recommend!",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "John Smith",
      description: "Incredible service! The team at TechSpace goes above and beyond to meet client needs.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Emma Brown",
      description: "Professional and reliable. Our go-to for all digital marketing needs.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-heading">Testimonials</h2>
      <div className="testimonial-card">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="testimonial-image"
        />
        <h4>{testimonials[currentIndex].name}</h4>
        <p>{testimonials[currentIndex].description}</p>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevious}>&#10094; Prev</button>
        <button onClick={handleNext}>Next &#10095;</button>
      </div>
    </section>
  );
};

export default Testimonials;
