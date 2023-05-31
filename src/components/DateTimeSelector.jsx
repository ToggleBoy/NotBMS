import { For } from "solid-js";
import { useAppContext } from "../context/AppContext";
import "./DateSelector.css";

export const DateSelector = () => {
  const { selectedDate, setSelectedDate } = useAppContext();
  const initialDate = new Date();
  const dates = [];

  for (let i = 0; i < 8; i++) {
    const date = new Date(initialDate);
    date.setDate(initialDate.getDate() + i);
    dates.push(date);
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div class="date">
      <For each={dates}>
        {(date) => (
          <div
            classList={{
              "date-item": true,
              active:
                selectedDate().setHours(0, 0, 0, 0) ===
                date.setHours(0, 0, 0, 0),
            }}
            onClick={() => handleDateSelect(date)}
          >
            {selectedDate() === date ? (
              <div>
                <div>{date.getDate()}</div>
                <div>{date.toLocaleString("default", { month: "long" })}</div>
                <div>{date.getFullYear()}</div>
              </div>
            ) : (
              <div>
                <div>
                  {date.toLocaleString("default", { weekday: "short" })}
                </div>
                <div>{date.getDate()}</div>
                <div>{date.toLocaleString("default", { month: "short" })}</div>
              </div>
            )}
          </div>
        )}
      </For>
    </div>
  );
};

export const TimeSelector = () => {
  const { selectedTime, setSelectedTime } = useAppContext();

  const time = ["8:30 am", "11:30 am", "2:30 pm ", "7:00 pm ", "10:30 pm"];

  const handleTimeSelect = (t) => {
    setSelectedTime(t);
  };

  return (
    <div class="time">
      <For each={time}>
        {(t) => (
          <div
            classList={{ "per-time": true, active: selectedTime() === t }}
            onClick={() => handleTimeSelect(t)}
          >
            {t}
          </div>
        )}
      </For>
    </div>
  );
};
