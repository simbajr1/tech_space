// src/pages/Home.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import actual images
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.webp";
import "../styles/HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="mySwiper"
      >
        {[image1, image2, image3].map((image, index) => (
          <SwiperSlide key={index}>
         <div
              className="hero-slide"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="hero-content">
                <h1>Your Digital Universe in One Place</h1>
                <p>
                  We believe in the power of technology to transform lives and
                  businesses.
                </p>
              </div>
         </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
