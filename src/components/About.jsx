import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("about-section-animation");
          document.getElementById("about-sub1")?.classList.add("about-sub1-animation");
          document.getElementById("about-title")?.classList.add("about-title-animation");
          document.getElementById("about-pic-container")?.classList.add("about-pic-animation");
          document.getElementById("about-detail1")?.classList.add("about-detail1-animation");
          document.getElementById("about-detail2")?.classList.add("about-detail2-animation");
          document.getElementById("about-text")?.classList.add("about-text-animation");
          document.getElementById("about-arrow")?.classList.add("about-arrow-animation");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    
    observer.observe(aboutSection);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about">
      <p className="section-text-p1" id="about-sub1">Get To Know More</p>
      <h1 className="title" id="about-title">About Me</h1>
      <div className="section-container">
        <div className="section-pic-container" id="about-pic-container">
          <img src="/assets/about-pic.png" alt="About Picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container about-container-hover" id="about-detail1">
              <img className="icon" src="/assets/experience.png" alt="Experience Icon" />
              <h3 className="about-details-title">Experience</h3>
              <p>
                4+ years - Coding Experience <br />
                6+ years - Graphic Design
              </p>
            </div>
            <div className="details-container about-container-hover" id="about-detail2">
              <img className="icon" src="/assets/education.png" alt="Education Icon" />
              <h3 className="about-details-title">Education</h3>
              <p>
                Pursuing a B.S. in CS & Finance <br />
                Expected Graduation - May 2027
              </p>
            </div>
          </div>
          <div className="text-container" id="about-text">
            <p>
              Hi, I am Pujan Desai, a driven second-year Computer Science and Business Administration student with a concentration in Finance at Northeastern University Honors College. I am passionate about software engineering, AI and machine learning, and data analytics, combining problem-solving and collaboration to create meaningful impact. Beyond academics, I enjoy creative pursuits like graphic design and working on projects that blend technology and innovation. In my free time, I love hanging out with friends, listening to music, playing pickleball and tennis, going to the gym, and cooking. I am always open to connecting, and I would love to discuss ideas and opportunities. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
      <img className="icon arrow" id="about-arrow" src="/assets/arrow.png" alt="Arrow Icon" onClick={() => window.location.href = './#skills'} />
    </section>
  );
}

export default About;
