import "./App.css";
import MyCursor from "./components/MyCursor";
import Portfolio from "./components/Portfolio";
import MyThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <MyThemeProvider>
        <MyCursor />
        <Portfolio />
      </MyThemeProvider>
    </div>
  );
}

export default App;
