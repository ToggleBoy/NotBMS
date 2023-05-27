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
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          porro soluta saepe ea veniam atque dolor est minima rerum alias neque,
          doloremque, laborum explicabo distinctio qui repellat! Aperiam, iure
          facere?
        </p>
        <h6>Loaction</h6>
        <A href={`/theater/${props.id}`}>Book Tickets</A>
      </div>
    </div>
  );
};
