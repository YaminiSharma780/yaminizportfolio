import { Link } from "react-scroll";

export default function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <div className="services-list">
        <div className="service-card">
          <h3>$8 Hour</h3>
          <p>
            I have developed numerous responsive and animated frontend web apps
            using React, leveraging the power of Tailwind, HTML, and CSS. My
            focus is on crafting intuitive web applications that deliver a
            seamless user experience. I consistently follow best practices to
            ensure performance and accessibility projects.
          </p>
          <ul>
            <li>Frontend Development</li>
            <li>WebApp Deployment</li>
            <li>Support after Deployment</li>
          </ul>
          <Link
            className="service-card-link"
            to="Contact"
            smooth={true}
            duration={500}
          >
            <button>Start Project</button>
          </Link>
        </div>
        <div className="service-card selected">
          <h3>$160 Week</h3>
          <p>
            I have built fullstack web applications with a killer frontend using
            React, Redux, and Tailwind, paired with a robust backend powered by
            Node.js and Express. I’ve worked with both SQL and NoSQL databases,
            and developed RESTful APIs to handle seamless communication between
            the frontend and backend.
          </p>
          <ul>
            <li>Fullstack Development</li>
            <li>WebApp Deployment</li>
            <li>Support after Deployment</li>
          </ul>
          <Link
            className="service-card-link"
            to="Contact"
            smooth={true}
            duration={500}
          >
            <button>Start Project</button>
          </Link>
        </div>
        <div className="service-card">
          <h3>$500 Month</h3>
          <p>
            I can bring your web app idea to life by designing intuitive user
            interfaces in Figma and delivering fullstack development using the
            power of React and Node.js. From concept to deployment, I ensure a
            seamless build process and I also provide post-development support
            to keep your app running smoothly.
          </p>
          <ul>
            <li>Fullstack Design & Development</li>
            <li>WebApp Deployment</li>
            <li>Support after Deployment</li>
          </ul>
          <Link
            className="service-card-link"
            to="Contact"
            smooth={true}
            duration={500}
          >
            <button>Start Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
