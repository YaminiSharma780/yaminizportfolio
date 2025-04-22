import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useMyTheme from "../hooks/useMyTheme";

const WorkIcon = () => <></>;

export default function MyVerticalTimeline() {
  const [mode] = useMyTheme();
  return (
    <div className="my-vertical-timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">HCL Technologies</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Noida, Uttar Pradesh
          </h5>
          <p>
            Contributed to Europe region Bank Project. Experienced in tools like
            Jira, Git, GitHub, Bitbucket, and Confluence. Writing clean and
            efficient code using React and JavaScript. Implementing user
            interfaces and developing reusable React components. Integrating
            front-end components with back-end services. Identifying and fixing
            bugs in the code with the help of browser developer tools and
            debugging techniques.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">HCL Technologies</h4>
          <h5 className="vertical-timeline-element-subtitle">Remote</h5>
          <p>
            Developed an Android e-commerce app using Flutter with database
            connectivity. Integrated APIs and ensured a user-friendly interface.
            APIs have been connected to the app showing the view of the app
            according to the user specifications. Implemented user
            authentication with wish list and cart functionality.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">HCL Technologies</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Noida, Uttar Pradesh
          </h5>
          <p>
            Designed and Developed application based on server technology in the
            area of Cryptography using relevant algorithms. Built the
            connectivity with the database to make the application properly
            functional. Used Eclipse Integrated Development Environment to
            maintain the components. Used Apache Tomcat as the application
            server. Used MySQL as the database and XAMPP server for maintenance.
            Presented the project and documented specifications.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
