import { useState } from "react";

export function useTheme() {
  // Minimal theme provider stub
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }
  return { theme, toggleTheme };
}
