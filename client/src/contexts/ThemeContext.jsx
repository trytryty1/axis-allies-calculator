"use client";

import { createContext, useEffect, useState, useContext } from "react";
import themes from "../../themes.json";

export const ThemeContext = createContext({});

export default function ThemeContextProvider({ children, serverTheme }) {
  const [theme, setTheme] = useState(serverTheme);

  const getBackgroundImage = () => {
    return `/${theme}-background.jpg`;
  };

  useEffect(() => {
    setTheme(serverTheme);
  }, [serverTheme]);

  return (
    <ThemeContext.Provider value={{ theme, getBackgroundImage, setTheme }}>
      <div className={`w-full h-full bg-pink-300 ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
