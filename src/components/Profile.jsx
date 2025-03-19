import React from 'react';

function Profile() {
  return (
    <section id="profile">
      <div className="section-pic-container profile-pic-animation">
        <img src="/assets/profile-pic.png" alt="Pujan Desai Profile Pic" />
      </div>
      <div className="section-text">
        <p className="section-text-p1 profile-sub1-animation">Hello, I'm</p>
        <h1 className="title profile-title">Pujan Desai.</h1>
        <p className="section-text-p2 profile-sub2-animation">
          Software Developer & Graphic Designer
        </p>
        <div className="button-container profile-buttons-animation">
          <button
            className="button button-color-2 profile-resume-hover"
            onClick={() => window.open('/assets/Pujan-Desai-Resume.pdf')}
          >
            Resume
          </button>
          <button
            className="button button-color-1 profile-contact-hover"
            onClick={() => window.location.href = './#contact'}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container" className="profile-icons-animation">
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn Profile"
            className="icon linkedin-icon-hover"
            onClick={() => window.open('https://www.linkedin.com/in/pujan-desai')}
          />
          <img
            src="/assets/github.png"
            alt="GitHub Profile"
            className="icon github-icon-hover"
            onClick={() => window.open('https://www.github.com/pujdesai')}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
