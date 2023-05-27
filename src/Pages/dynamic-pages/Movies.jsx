import { useParams } from "@solidjs/router";
import { movies_list } from "../../data/Data";
import { A } from "@solidjs/router";

const Movies = () => {
  const params = useParams();
  const movie = movies_list.find((m) => m.id === Number(params.id));

  return (
    <div class="movies">
      <div class="movies-image">Image</div>
      <div class="movies-content">
        <h1>{movie.movie_name}</h1>
        <h4>{movie.description}</h4>
        <h4>{movie.date_of_release}</h4>
        <A href="/">Book Ticket</A>
      </div>
    </div>
  );
};

export default Movies;
