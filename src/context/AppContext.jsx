import { createEffect } from "solid-js";
import { createContext, createSignal, useContext } from "solid-js";

// Create the theme context
export const AppContext = createContext();

// Create a provider component to wrap the components that need access to the theme state
export const AppProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = createSignal(false);
  const [selectedDate, setSelectedDate] = createSignal(new Date());
  const [selectedTime, setSelectedTime] = createSignal(null);
  const [selectedSeats, setSelectedSeats] = createSignal(new Set());
  const [isButtonDisabled, setIsButtonDisabled] = createSignal(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode());
  };

  createEffect(() => {
    if (selectedDate() && selectedTime() && selectedSeats().size > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  });

  // Provide the theme state and toggle function to the child components
  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        selectedSeats,
        setSelectedSeats,
        isButtonDisabled
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
