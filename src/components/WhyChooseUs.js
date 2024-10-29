// src/pages/WhyChooseUs.js
import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Expertise and Innovation",
      description: "Our team of skilled professionals is dedicated to delivering cutting-edge solutions that drive your business forward.",
      icon: "⚙️", // Using emoji as a placeholder for SVG
    },
    {
      title: "Personalized Services",
      description: "We understand every client’s unique needs, thus offering tailor-made solutions.",
      icon: "🤝",
    },
    {
      title: "Reliability and Trust",
      description: "Count on us for reliable and efficient services you can trust.",
      icon: "🔒",
    },
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <h2 className="section-heading">Why Choose Us</h2>
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <span className="icon">{benefit.icon}</span>
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

// src/pages/WhyChooseUs.js
import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Expertise and Innovation",
      description: "Our team of skilled professionals is dedicated to delivering cutting-edge solutions that drive your business forward.",
      icon: "⚙️", // Using emoji as a placeholder for SVG
    },
    {
      title: "Personalized Services",
      description: "We understand every client’s unique needs, thus offering tailor-made solutions.",
      icon: "🤝",
    },
    {
      title: "Reliability and Trust",
      description: "Count on us for reliable and efficient services you can trust.",
      icon: "🔒",
    },
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <h2 className="section-heading">Why Choose Us</h2>
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <span className="icon">{benefit.icon}</span>
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
