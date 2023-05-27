import { MoviesCard, UpcomingMoviesCard } from "../components/Card";
import { movies_list, upcoming_movies } from "../data/Data";

const Home = () => {

  return (
    <div class="home">
      <h3>Trending Movies</h3>
      <div class="movies-list">
        <For each={movies_list}>{(item) => <MoviesCard movie={item} />}</For>
      </div>
      <h3>Upcoming Movies</h3>
      <div class="movies-list">
        <For each={upcoming_movies}>{(item) => <UpcomingMoviesCard movie={item} />}</For>
      </div>
    </div>
  );
};

export default Home;
