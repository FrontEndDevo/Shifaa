"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleDarkModeHandler = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button aria-label="Toggle theme" onClick={toggleDarkModeHandler}>
      🌓
    </button>
  );
}
