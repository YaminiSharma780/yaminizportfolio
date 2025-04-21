import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useMyTheme() {
  return useContext(ThemeContext);
}
