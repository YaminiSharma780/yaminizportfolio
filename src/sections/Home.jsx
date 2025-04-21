import Aurora from "../animations/Aurora";
import SplitText from "../animations/SplitText";

export default function Home() {
  return (
    <Aurora
      // colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      colorStops={["#fbc800", "#FF3232", "#7505fa"]}
      blend={0.5}
      amplitude={1.2}
      speed={1}
    >
      <div className="home-container">
        <div className="home-img-div">
          <div className="home-img-div-div">
            <img className="home-img" src="../assets/profile2.png" />
          </div>
          <div className="home-contact">
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="resume"
              href="https://drive.google.com/file/d/1_rzmhvRuikyN56ebC5_Mg9ijouqeLRmT/view?usp=sharing"
              download
            >
              Resume
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=reachmeout005@gmail.com"
            >
              Email
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="linkedin"
              href="https://www.linkedin.com/in/yamini-sharma-780/"
            >
              Linkedin
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="github"
              href="https://github.com/YaminiSharma780"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/919457961535"
              id="whatsapp"
            >
              Whatsapp
            </a>
          </div>
        </div>
        <div className="home-text-div">
          <SplitText
            text="Yamini Sharma"
            className="home-split-text"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <h3 className="title-headline">
            Software Developer, Frontend and Backend
          </h3>
          <p className="title-description">
            I'm an experienced developer with 4+ years of experience building
            scalable web applications. I specialize in creating responsive and
            user-friendly frontends and handling backend development. I focus on
            writing clean, maintainable code and prioritize UI/UX design
            principles to ensure intuitive and accessible interfaces. Passionate
            about optimizing user experiences, I work to improve performance and
            scalability, and am always committed to delivering high-quality
            solutions.
          </p>
        </div>
      </div>
    </Aurora>
  );
}
