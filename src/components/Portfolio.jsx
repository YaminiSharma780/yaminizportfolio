import { useState } from "react";
import { Link } from "react-scroll";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Services from "../sections/Services";
import Experience from "../sections/Experience";
import Resume from "../sections/Resume";
import Sidebar from "./Sidebar";
import useMyTheme from "../hooks/useMyTheme";

const sections = [
  { id: "Home", Component: Home },
  { id: "Experience", Component: Experience },
  { id: "Skills", Component: Skills },
  { id: "Projects", Component: Projects },
  { id: "Services", Component: Services },
  { id: "Contact", Component: Contact },
];

export default function Portfolio() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mode] = useMyTheme();

  return (
    <div className={`portfolio-container ${mode ? "dark" : ""}`}>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className={`${mode ? "dark" : ""}`}>
        {sections.map(({ id, Component }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
