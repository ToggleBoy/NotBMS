import { useAppContext } from "../context/AppContext";
import './ToggleSwitch.css'

export const ToggleSwitch = () => {
  const { isDarkMode, toggleTheme } = useAppContext();

  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode()} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};
