import { A } from "@solidjs/router";

export const MoviesCard = (props) => {
  return (
    <div class="card">
      <A href={`/movies/${props.movie.id}`}>
      <div class="card-image"></div>
      <div class="category">{props.movie.movie_name}</div>
      </A>
    </div>
  );
};

export const UpcomingMoviesCard = (props) => {
  return (
    <div class="card">
      <A href={`/upcoming-movies/${props.movie.id}`}>
      <div class="card-image"></div>
      <div class="category">{props.movie.movie_name}</div>
      </A>
    </div>
  );
};

export const CinemasCard = (props) => {
  return (
    <div class="cinemascard">
      <div class="cinemas-image">Image</div>
      <div class="cinemas-description">
        <h3>{props.cinema.cinemaName}</h3>
        <p>
          {props.cinema.description}
        </p>
        <h6>{props.cinema.location}</h6>
        <A href={`/theater/${props.cinema.id}`}>Book Tickets</A>
      </div>
    </div>
  );
};
