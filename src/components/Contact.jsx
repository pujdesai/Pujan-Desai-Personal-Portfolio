import React, { useEffect } from 'react';

function Contact() {
  const handleMailClick = (e) => {
    e.preventDefault();
    const newWindow = window.open("mailto:desaip625@gmail.com", "_blank", "noopener,noreferrer");
    if (!newWindow) {
      alert(
        "It looks like you don't have an email client configured. Please configure one or copy the email address manually."
      );
    }
  };

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactSection.classList.add("contact-section-animation");
          document.getElementById("contact-sub1")?.classList.add("contact-sub1-animation");
          document.getElementById("contact-title")?.classList.add("contact-title-animation");
          document.getElementById("contact-detail1")?.classList.add("contact-detail1-animation");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    
    observer.observe(contactSection);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact">
      <p className="section-text-p1" id="contact-sub1">Get in Touch</p>
      <h1 className="title" id="contact-title">Contact Me</h1>
      <div className="contact-info-upper-container contact-container-hover" id="contact-detail1">
        <div className="contact-info-container">
          <img src="/assets/email.png" alt="Email Icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:desaip625@gmail.com" onClick={handleMailClick}>desaip625@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src="/assets/linkedin.png" alt="LinkedIn Icon" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com/in/pujan-desai" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
