import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export default function MyThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  return (
    <ThemeContext.Provider value={[mode, setMode]}>
      {children}
    </ThemeContext.Provider>
  );
}
