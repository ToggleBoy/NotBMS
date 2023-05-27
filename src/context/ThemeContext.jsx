import { createContext, createSignal, useContext } from "solid-js";

// Create the theme context
export const ThemeContext = createContext();

// Create a provider component to wrap the components that need access to the theme state
export const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = createSignal(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode());
  };

  // Provide the theme state and toggle function to the child components
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext)
} 