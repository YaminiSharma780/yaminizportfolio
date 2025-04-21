import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import useMyTheme from "../hooks/useMyTheme";

export default function Header(props) {
  const { sidebarOpen, setSidebarOpen } = props;
  const [mode, setMode] = useMyTheme();
  return (
    <header className={`header ${mode ? "dark" : ""}`}>
      <div className="header-name">
        <h3 style={{ fontSize: "30px", margin: "12px" }}>Yamini Sharma</h3>
      </div>
      <div className="header-buttons">
        <FaSun
          style={{ display: `${mode ? "block" : "none"}` }}
          onClick={() => setMode(false)}
          size={30}
        />
        <FaMoon
          style={{ display: `${mode ? "none" : "block"}` }}
          onClick={() => setMode(true)}
          size={30}
        />
        <FaBars size={30} onClick={(e) => setSidebarOpen(!sidebarOpen)} />
      </div>
    </header>
  );
}
