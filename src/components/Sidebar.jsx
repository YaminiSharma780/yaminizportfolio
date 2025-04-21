import { Link } from "react-scroll";

const sections = [
  "Home",
  "Experience",
  "Skills",
  "Projects",
  "Services",
  "Contact",
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <nav className="sidebar-nav">
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => setSidebarOpen(false)}
            className="sidebar-link"
            activeClass="active"
          >
            {section}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
