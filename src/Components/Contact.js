import React from "react";
import "../Styles/Contact.css"; // Add your CSS styles here

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">What’s Next?</h2>
      <h3 className="contact-title">Get In Touch</h3>
      <p className="contact-description">
        I am actively looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="mailto:rohankacheriam@gmail.com" className="contact-button">
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
