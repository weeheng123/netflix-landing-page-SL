import "./MovieTitles.scss";

function Movie(props) {
  return (
    <div
      className="movies"
      key={props.key}
      style={{ backgroundImage: "url(" + props.backdrop + ")" }}
    >
      <div className="overlay">
        <div className="movie">
          <p className="movie-title">{props.title}</p>
          <p className="movie-rating">{props.rating}/10</p>
          <p className="movie-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
