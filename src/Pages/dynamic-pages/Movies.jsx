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
        <h3>{movie.movie_name}</h3>
        <p>{movie.description}</p>
        <h6>{movie.date_of_release}</h6>
        <A href={`/movies/theater/${movie.id}`}>select Theater</A>
      </div>
    </div>
  );
};

export default Movies;
