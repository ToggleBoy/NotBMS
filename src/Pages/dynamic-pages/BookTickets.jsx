import { useParams } from "@solidjs/router";
import { cinemas } from "../../data/Data";
import { useAppContext } from "../../context/AppContext";

const BookTicket = () => {
  const params = useParams();
  const cinema = cinemas.find((c) => c.id === Number(params.id));
  const { selectedDate, selectedTime, selectedSeats } = useAppContext();
  const date = selectedDate();

  return (
    <div class="bookticket">
      <h2>Cinemas</h2>
      <hr />
      <h3>{cinema.cinemaName}</h3>
      <h3>{cinema.movie_name}</h3>
      <h6>{cinema.location}</h6>

      <div class="date-container">
        <h3>Date :- </h3>
        <div>{date.getDate()}</div>
        <div>{date.toLocaleString("default", { month: "long" })}</div>
        <div>{date.getFullYear()}</div>
      </div>
      <h3>Time:- {selectedTime()}</h3>
      <h3>Seat:- </h3>
      {Array.from(selectedSeats()).map((value) => <p>{value}</p>)}
    </div>
  );
};

export default BookTicket;
