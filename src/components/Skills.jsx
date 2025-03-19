import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillsSection.classList.add("skills-section-animation");
          document.getElementById("skills-sub1")?.classList.add("skills-sub1-animation");
          document.getElementById("skills-title")?.classList.add("skills-title-animation");
          document.getElementById("skills-detail1")?.classList.add("skills-detail1-animation");
          document.getElementById("skills-detail2")?.classList.add("skills-detail2-animation");
          document.getElementById("skills-detail3")?.classList.add("skills-detail3-animation");
          document.getElementById("skills-arrow")?.classList.add("skills-arrow-animation");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    
    observer.observe(skillsSection);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <p className="section-text-p1" id="skills-sub1">Explore My</p>
      <h1 className="title" id="skills-title">Skills</h1>
      <div className="skills-details-container">
        <div className="about-containers">
          <div className="details-container skills-container-hover" id="skills-detail1">
            <h2 className="skills-sub-title">Frontend</h2>
            <div className="article-container">
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>HTML</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>CSS</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>JavaScript</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>React</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Next.js</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Tailwind</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Vite</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Java Swing</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Adobe</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Figma</h3></div>
              </article>
            </div>
          </div>
          <div className="details-container skills-container-hover" id="skills-detail2">
            <h2 className="skills-sub-title">Backend</h2>
            <div className="article-container">
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Python</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Java</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>C++</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Node.js</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Django</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>PostgreSQL</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Pinecone</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Docker</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Git</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Unix/Linux</h3></div>
              </article>
            </div>
          </div>
          <div className="details-container skills-container-hover" id="skills-detail3">
            <h2 className="skills-sub-title">Data Science & Machine Learning</h2>
            <div className="article-container">
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Pandas</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>NumPy</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Scikit-learn</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Matplotlib</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Seaborn</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>Vega-Altair</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>D3.js</h3></div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Checkmark Icon" className="icon" />
                <div><h3>SciPy</h3></div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        className="icon arrow"
        id="skills-arrow"
        src="/assets/arrow.png"
        alt="Arrow Icon"
        onClick={() => window.location.href = './#projects'}
      />
    </section>
  );
}

export default Skills;
