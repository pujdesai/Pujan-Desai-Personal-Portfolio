import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const footerSection = document.getElementById("footer");
    if (!footerSection) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footerSection.classList.add("footer-section-animation");
          document.getElementById("footer-links")?.classList.add("footer-links-animation");
          document.getElementById("footer-text")?.classList.add("footer-text-animation");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.33 });
    
    observer.observe(footerSection);
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer">
      <nav>
        <div className="nav-links-container" id="footer-links">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p id="footer-text">
        Copyright &#169; 2025 Pujan Desai. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
