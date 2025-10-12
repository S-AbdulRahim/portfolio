import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// Theme configurations with glass-compatible colors
const themes = [
  {
    key: "default",
    name: "Ocean Blue",
    colors: {
      primary: "#818cf8", // Indigo
      secondary: "#a78bfa", // Purple
      accent: "#f59e0b", // Amber
      dark: "#0f172a", // Slate
    },
  },
  {
    key: "emerald",
    name: "Emerald Forest",
    colors: {
      primary: "#34d399", // Emerald
      secondary: "#10b981", // Green
      accent: "#fbbf24", // Yellow
      dark: "#064e3b", // Dark Green
    },
  },
  {
    key: "sunset",
    name: "Sunset Glow",
    colors: {
      primary: "#f97316", // Orange
      secondary: "#ec4899", // Pink
      accent: "#facc15", // Yellow
      dark: "#18181b", // Zinc
    },
  },
  {
    key: "ocean",
    name: "Deep Ocean",
    colors: {
      primary: "#06b6d4", // Cyan
      secondary: "#3b82f6", // Blue
      accent: "#8b5cf6", // Violet
      dark: "#0c4a6e", // Dark Blue
    },
  },
  {
    key: "rose",
    name: "Rose Garden",
    colors: {
      primary: "#f43f5e", // Rose
      secondary: "#ec4899", // Pink
      accent: "#a855f7", // Purple
      dark: "#1e1b4b", // Dark Indigo
    },
  },
  {
    key: "mint",
    name: "Mint Breeze",
    colors: {
      primary: "#2dd4bf", // Teal
      secondary: "#14b8a6", // Teal-Dark
      accent: "#f59e0b", // Amber
      dark: "#134e4a", // Dark Teal
    },
  },
  {
    key: "lavender",
    name: "Lavender Dreams",
    colors: {
      primary: "#a78bfa", // Violet
      secondary: "#c084fc", // Purple
      accent: "#fbbf24", // Yellow
      dark: "#1e1b4b", // Dark Indigo
    },
  },
  {
    key: "crimson",
    name: "Crimson Night",
    colors: {
      primary: "#dc2626", // Red
      secondary: "#991b1b", // Dark Red
      accent: "#fb923c", // Orange
      dark: "#450a0a", // Very Dark Red
    },
  },
  {
    key: "galaxy",
    name: "Galaxy Purple",
    colors: {
      primary: "#9333ea", // Purple
      secondary: "#7c3aed", // Violet
      accent: "#ec4899", // Pink
      dark: "#1e1b4b", // Dark Indigo
    },
  },
  {
    key: "nature",
    name: "Nature Green",
    colors: {
      primary: "#22c55e", // Green
      secondary: "#16a34a", // Dark Green
      accent: "#eab308", // Yellow
      dark: "#14532d", // Very Dark Green
    },
  },
  {
    key: "monochrome",
    name: "Monochrome Elite",
    colors: {
      primary: "#e5e7eb", // Gray
      secondary: "#9ca3af", // Dark Gray
      accent: "#fbbf24", // Yellow
      dark: "#111827", // Almost Black
    },
  },
  {
    key: "neon",
    name: "Neon Nights",
    colors: {
      primary: "#06b6d4", // Cyan
      secondary: "#ec4899", // Pink
      accent: "#a3e635", // Lime
      dark: "#0a0a0a", // Almost Black
    },
  },
];

export const ThemeProvider = ({ children }) => {
  // Get saved theme from localStorage or use default
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("portfolioTheme") || "default";
  });

  // Apply theme colors to CSS variables
  useEffect(() => {
    const theme = themes.find((t) => t.key === currentTheme);
    if (theme) {
      const root = document.documentElement;

      // Set color variables
      root.style.setProperty("--color-primary", theme.colors.primary);
      root.style.setProperty("--color-secondary", theme.colors.secondary);
      root.style.setProperty("--color-accent", theme.colors.accent);
      root.style.setProperty("--color-dark", theme.colors.dark);

      // Convert hex to RGB for rgba() usage in CSS
      const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
              result[3],
              16
            )}`
          : "129, 140, 248"; // fallback to default blue
      };

      root.style.setProperty(
        "--color-primary-rgb",
        hexToRgb(theme.colors.primary)
      );
      root.style.setProperty(
        "--color-secondary-rgb",
        hexToRgb(theme.colors.secondary)
      );
      root.style.setProperty(
        "--color-accent-rgb",
        hexToRgb(theme.colors.accent)
      );

      // Save to localStorage
      localStorage.setItem("portfolioTheme", currentTheme);
    }
  }, [currentTheme]);

  const changeTheme = (themeKey) => {
    setCurrentTheme(themeKey);
  };

  const getCurrentThemeObject = () => {
    return themes.find((t) => t.key === currentTheme) || themes[0];
  };

  const value = {
    currentTheme,
    themes,
    changeTheme,
    themeName: getCurrentThemeObject().name,
    themeColors: getCurrentThemeObject().colors,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
