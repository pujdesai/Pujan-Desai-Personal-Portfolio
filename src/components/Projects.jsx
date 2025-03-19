import React, { useEffect } from 'react';

function openImagesNewTab(projectId, projectName) {
  const projectDemoImages = {
    project1: ["/assets/GUIDemo.png"],
    project2: [
      "/assets/chess1.png",
      "/assets/chess2.png",
      "/assets/chess3.png",
      "/assets/chess4.png",
      "/assets/chess5.png",
    ],
    project5: [
      "/assets/health1.png",
      "/assets/health2.png",
      "/assets/health3.png",
      "/assets/health4.png",
      "/assets/health5.png",
    ],
  };
  const projectMaxWidths = {
    project1: "95%",
    project2: "47.5%",
    project5: "80%",
  };

  if (projectDemoImages[projectId]) {
    const newWindow = window.open("", "_blank");
    if (!newWindow) {
      alert("Popup blocked! Please allow popups for this site.");
      return;
    }
    newWindow.document.title = `${projectName} Demo Images`;

    const style = newWindow.document.createElement("style");
    style.textContent = `
      body {
        font-family: sans-serif;
        text-align: center;
        margin: 30px;
        background-color: #fefefe;
      }
      img {
        display: block;
        height: auto;
        margin: 30px auto;
        border-radius: 30px;
      }
    `;
    newWindow.document.head.appendChild(style);

    projectDemoImages[projectId].forEach((src) => {
      const img = newWindow.document.createElement("img");
      img.src = src;
      img.alt = "Demo Image";
      img.style.maxWidth = projectMaxWidths[projectId] || "70%";
      newWindow.document.body.appendChild(img);
    });
  } else {
    console.log("No demo images available for this project.");
  }
}

function Projects() {
  useEffect(() => {
    const projectsSection = document.getElementById("projects");
    if (!projectsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          projectsSection.classList.add("project-section-animation");
          document.getElementById("project-sub1")?.classList.add("projects-sub1-animation");
          document.getElementById("projects-title")?.classList.add("projects-title-animation");
          document.getElementById("project-detail1")?.classList.add("projects-detail1-animation");
          document.getElementById("project-detail2")?.classList.add("projects-detail2-animation");
          document.getElementById("project-arrow")?.classList.add("projects-arrow-animation");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    
    observer.observe(projectsSection);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <p className="section-text-p1" id="project-sub1">Browse My Recent</p>
      <h1 className="title" id="projects-title">Projects</h1>
      <div className="skills-details-container project-container" id="project-detail1">
        <div className="about-containers project-3D">
          <div className="details-container color-container project-container-hover">
            <div className="article-container">
              <img src="/assets/project-1.png" alt="Project 1" className="project-img" />
            </div>
            <h2 className="skills-sub-title project-title">Stock Portfolio Application</h2>
            <div className="button-container">
              <button className="button button-color-2 project-button" onClick={() => openImagesNewTab('project1', 'Stock Portfolio Application')}>
                Demo Images
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container-hover">
            <div className="article-container">
              <img src="/assets/project-2.png" alt="Project 2" className="project-img" />
            </div>
            <h2 className="skills-sub-title project-title">PvP Chess</h2>
            <div className="button-container">
              <button className="button button-color-2 project-button" onClick={() => openImagesNewTab('project2', 'PvP Chess')}>
                Demo Images
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container-hover">
            <div className="article-container">
              <img src="/assets/project-3.png" alt="Project 3" className="project-img" />
            </div>
            <h2 className="skills-sub-title project-title">NBA Prediction Model</h2>
            <div className="button-container">
              <button className="button button-color-2 project-button" onClick={() => window.open('https://www.github.com/pujdesai/NBA-Prediction-Model')}>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-details-container project-container" id="project-detail2">
        <div className="about-containers project-3D">
          <div className="details-container color-container project-container-hover">
            <div className="article-container">
              <img src="/assets/project-4.png" alt="Project 4" className="project-img" />
            </div>
            <h2 className="skills-sub-title project-title">Online Bank</h2>
            <div className="button-container">
              <button className="button button-color-2 project-button" onClick={() => window.open('https://www.github.com/pujdesai/Online-Bank')}>
                GitHub
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container-hover">
            <div className="article-container">
              <img src="/assets/project-5.png" alt="Project 5" className="project-img" />
            </div>
            <h2 className="skills-sub-title project-title">Health-Tracker App</h2>
            <div className="button-container">
              <button className="button button-color-2 project-button" onClick={() => openImagesNewTab('project5', 'Health-Tracker App')}>
                Demo Images
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container-hover">
            <div className="article-container">
              <img src="/assets/project-6.png" alt="Project 6" className="project-img" />
            </div>
            <h2 className="skills-sub-title project-title">Weather App</h2>
            <div className="button-container">
              <button className="button button-color-2 project-button" onClick={() => window.open('https://www.github.com/pujdesai/Weather-App')}>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="icon arrow" id="project-arrow" src="/assets/arrow.png" alt="Arrow Icon" onClick={() => window.location.href = './#contact'} />
    </section>
  );
}

export default Projects;
