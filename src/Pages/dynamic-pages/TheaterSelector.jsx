import { A, useParams } from "@solidjs/router";
import { cinemas, movies_list } from "../../data/Data";
import { DateSelector } from "../../components/DateTimeSelector";
import { TimeSelector } from "../../components/DateTimeSelector";
import SeatSelection from "../../components/SeatSelection";
import { useAppContext } from "../../context/AppContext";

const TheaterSelector = () => {
  const params = useParams();
  const movie = movies_list.find((m) => m.id === Number(params.id));
  const theater = cinemas.find((c) => c.movie_name === movie.movie_name);
  const { isButtonDisabled } = useAppContext();

  return (
    <div class="theaterSelector">
      <div class="theater-movie">
        <h2>Movies</h2>
        <hr />
        <h3>{movie.movie_name}</h3>
        <p>{movie.description}</p>
        <h6>{movie.date_of_release}</h6>
      </div>
      <div class="theater-details">
        <h2>Cinemas</h2>
        <hr />
        <h3>{theater.cinemaName}</h3>
        <p>{theater.location}</p>
        <h5>Date :-</h5>
        <DateSelector />
        <h5>Time:-</h5>
        <TimeSelector />
        <SeatSelection />
        <A href={`/bookticket/${theater.id}`}>
          <button disabled={isButtonDisabled()}>Book Ticket</button>
        </A>
      </div>
    </div>
  );
};

export default TheaterSelector;
