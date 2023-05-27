import { useThemeContext } from "../context/ThemeContext";
import './ToggleSwitch.css'

export const ToggleSwitch = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode()} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};
