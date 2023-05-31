
import "./SeatSelection.css";
import { useAppContext } from "../context/AppContext";

const SeatSelection = () => {
  const { selectedSeats, setSelectedSeats } = useAppContext();

  const handleSeatClick = (seat) => {
    const updatedSeats = new Set(selectedSeats());
    if (updatedSeats.has(seat)) {
      updatedSeats.delete(seat);
    } else {
      updatedSeats.add(seat);
    }
    setSelectedSeats(updatedSeats);
  };

  return (
    <div class="seat-selection">
      <h2>Seat Selection</h2>
      <div class="seat-grid">
        {Array.from({ length: 100 }, (_, index) => {
          const seat = `Seat ${index + 1}`;
          const isSelected = selectedSeats().has(seat);
          return (
            <div
              classList={{
                seat: true,
                selected: isSelected,
              }}
              onClick={() => handleSeatClick(seat)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <div class="screen">Screen Direction</div>
    </div>
  );
};

export default SeatSelection;
