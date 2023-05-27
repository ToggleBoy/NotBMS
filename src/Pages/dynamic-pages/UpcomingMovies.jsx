import { useParams } from "@solidjs/router";
import { upcoming_movies } from "../../data/Data";
import { A } from "@solidjs/router";

const UpcomingMovies = () => {
  const params = useParams();
  const movie = upcoming_movies.find((m) => m.id === Number(params.id));

  return (
    <div class="movies">
      <div class="movies-image">Image</div>
      <div class="movies-content">
        <h1>{movie.movie_name}</h1>
        <h4>{movie.description}</h4>
        <h4>{movie.date_of_release}</h4>
      </div>
    </div>
  );
};

export default UpcomingMovies;
