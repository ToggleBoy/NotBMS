import { DateSelector, TimeSelector } from "../../components/DateTimeSelector";
import SeatSelection from "../../components/SeatSelection";
import { cinemas } from "../../data/Data";
import { A, useParams } from "@solidjs/router";
import { useAppContext } from "../../context/AppContext";

const Theater = () => {
  const params = useParams();
  const cinema = cinemas.find((m) => m.id === Number(params.id));
  const { isButtonDisabled } = useAppContext();

  return (
    <div class="theater">
      <div class="theater-details">
        <h2>Cinemas</h2>
        <hr />
        <h3>{cinema.cinemaName}</h3>
        <p>{cinema.description}</p>
        <h6>{cinema.location}</h6>
      </div>
      <div class="theater-movie">
        <h2>Movies</h2>
        <hr />
        <h3>{cinema.movie_name}</h3>
        <h4>Date :-</h4>
        <DateSelector />
        <h4>Show Time :-</h4>
        <TimeSelector />
        <SeatSelection />
        <A href={`/bookticket/${cinema.id}`}>
          <button disabled={isButtonDisabled()}>Book Ticket</button>
        </A>
      </div>
    </div>
  );
};

export default Theater;
