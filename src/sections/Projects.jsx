const myProjects = [
  {
    id: 1,
    title: "GlobeTrek",
    link: "https://globe-trekk.netlify.app/",
    tech: ["React", "ContextAPI", "Router"],
    image: "../assets/globetrek.png",
    description:
      "Developed a responsive app that allows you to explore data about different countries, providing key insights about geography, economy, population, and more. ",
  },
  {
    id: 2,
    title: "Expenzo",
    link: "https://expenzo-tracker.netlify.app/",
    tech: ["React", "LocalStorage", "CustomHook"],
    image: "../assets/expenzo.png",
    description:
      "Developed an intuitive expense tracking app that helps user to manage  their daily spending with user friendly interface where users can log their purchases.",
  },
  {
    id: 3,
    title: "FocusFlow",
    link: "https://focus-floww.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "../assets/focusflow.png",
    description:
      "Built a simple and minimalist web app built with JavaScript, HTML, and CSS that helps users stay productive without pressure. It limits the user to just 4 tasks per day, encouraging focus and quality over quantity.",
  },
];

export default function Projects() {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {myProjects.map((project) => {
          return (
            <div className="projects-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} />
              </div>
              <div className="project-text">
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((t, i) => {
                    return <div key={i}>{t}</div>;
                  })}
                </div>
                <p>{project.description}</p>
              </div>
              <button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  Link to the Project
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
