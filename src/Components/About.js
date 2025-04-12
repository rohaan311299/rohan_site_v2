import React from 'react';
import '../Styles/About.css';
import profileImage from './Profile.jpg'; // Replace with your image path

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Hero Section */}
      <div className="hero-intro-section">
        <p className="hero-intro">Hello World !!</p>
        <h1 className="hero-name">I'm Rohan Kacheria.</h1>
        <h2 className="hero-tagline">I build scalable and efficient software solutions for a living.</h2>
        <p className="hero-description">
          I’m a software engineer specializing in delivering seamless digital experiences. Currently, I’m developing software at <a target="_blank" href="https://www.servicelink.com/">ServiceLink</a>.
        </p>
        {/* Contact Me Button */}
        <div className="contact-me">
          <a href="#contact" className="contact-button">Contact Me</a>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
                Hello! My name is Rohan and I am a Goal-oriented and Innovative software developer 
                with expertise in building scalable systems, writing high-quality code,
                and leveraging software to create impactful solutions. 
                With a problem-solving expertise and a product-first mindset, 
                I aim to deliver software that meets business requirements. 
                I thrive in fast-paced environments and collaborate effectively with cross-functional teams to continuously improve performance, 
                enhance workspace efficiency, and deliver cost-effective solutions.
            </p>
            <p>Here are a some of the services I provide:</p>
            <ul className="tech-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Data Analytics</li>
              <li>Predictive Analytics</li>
              <li>Consulting</li>
              <li>Product Development</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={profileImage} alt="Brittany" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
