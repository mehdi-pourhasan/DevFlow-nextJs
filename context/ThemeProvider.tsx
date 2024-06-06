"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// DEFINE TYPES
interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

// 1 - define and create CONTEXT
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2 - create context function
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState("");

  // # Context handler => do what you need
  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // 3 -  use useEffect to handle trigger function
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  //   4 Create context provider that pass arguments that you create in context and will wrap the body
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 5 Export funciton that allow you really easily utilize the context you created
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
