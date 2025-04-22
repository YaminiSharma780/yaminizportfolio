import { useEffect, useState } from "react";
import Wave from "react-wavify";

const mainSkills = ["React", "Redux", "Node.js", "JavaScript", "HTML", "CSS"];
const secondarySkills = [
  "React Router",
  "React Query",
  "MicroFrontend",
  "Lodash",
  "Postman",
];
const otherSkills = ["AWS", "Docker", "Kubernetes", "Database", "Github"];

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const renderWave = () => (
    <Wave mask="url(#mask)" fill="#1277b0" paused={isMobile}>
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0" stopColor="white" />
          <stop offset="0.3" stopColor="black" />
        </linearGradient>
        <mask id="mask">
          <rect x="0" y="0" width="2000" height="500" fill="url(#gradient)" />
        </mask>
      </defs>
    </Wave>
  );

  return (
    <div className="skills-container">
      <h1>Skills</h1>

      <div className="main-skills">
        <div className="skills-list">
          {mainSkills.map((skill, id) => (
            <div key={id} className="skill-card">
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
        <div className="skills-water-waves">{renderWave()}</div>
      </div>

      <div className="secondary-skills">
        <div className="skills-list">
          {secondarySkills.map((skill, id) => (
            <div key={id} className="skill-card">
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
        <div className="skills-water-waves">{renderWave()}</div>
      </div>

      <div className="other-skills">
        <div className="skills-list">
          {otherSkills.map((skill, id) => (
            <div key={id} className="skill-card">
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
        <div className="skills-water-waves">{renderWave()}</div>
      </div>
    </div>
  );
}
