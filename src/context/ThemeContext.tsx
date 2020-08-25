/**
 * Theme context for styling Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { ThemeProvider as Root } from "styled-components";

import useLocalStorage from "@hooks/useLocalStorage";

type ThemeMode = "dark" | "light";

const ThemeContext = React.createContext({
  theme: "dark",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<ThemeMode>("theme", "dark");

  const toggle = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <Root theme={{ mode: theme }}>{children}</Root>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
