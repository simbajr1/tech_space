
// src/pages/WhatWeDo.js
import React from "react";
import "../styles/WhatWeDo.css";

const WhatWeDo = () => {
  const services = [
    {
      title: "IT Support and Technical Assistance",
      description: [
        "Hardware setup and Maintenance",
        "Networking and Monitoring",
        "Troubleshooting",
        "Software Installation",
        "Computer Servicing",
      ],
    },
    {
      title: "Digital Marketing",
      description: [
        "SEO",
        "Social Media Management/Marketing",
        "Advertising",
        "Design",
      ],
    },
    {
      title: "Virtual Assistance",
      description: [
        "Events and Meetings scheduling, planning and management",
        "Calendar management",
        "Research",
        "Travel Arrangements and Planning",
      ],
    },
    {
      title: "Web Design and Development",
      description: [
        "Landing page",
        "Small business website",
        "Ecommerce website",
        "Corporate website",
      ],
    },
  ];

  return (
    <section className="what-we-do" id="what-we-do">
      <h2 className="section-heading">What We Do</h2>
      <h3 className="subheading">Our Services</h3>
      <div className="services">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service ${index % 2 === 0 ? "service-left" : "service-right"}`}
          >
            <h4>{service.title}</h4>
            <ul>
              {service.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="quotation-button">View Quotations</button>
    </section>
  );
};

export default WhatWeDo;
