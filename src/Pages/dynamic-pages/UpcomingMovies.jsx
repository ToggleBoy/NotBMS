import { useParams } from "@solidjs/router";
import { upcoming_movies } from "../../data/Data";

const UpcomingMovies = () => {
  const params = useParams();
  const movie = upcoming_movies.find((m) => m.id === Number(params.id));

  return (
    <div class="movies">
      <div class="movies-image">Image</div>
      <div class="movies-content">
        <h3>{movie.movie_name}</h3>
        <p>{movie.description}</p>
        <h6>{movie.date_of_release}</h6> 
      </div>
    </div>
  );
};

export default UpcomingMovies;
