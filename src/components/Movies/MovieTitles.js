import "./MovieTitles.scss";
import Movie from "./Movie";
import React, { useState, useEffect } from "react";

function MovieTitles(props) {
  const APIKEY = process.env.REACT_APP_MOVIEDB_API;
  const [data, setData] = useState({ results: [{}] });

  useEffect(() => {
    var requestUrl =
      "https://api.themoviedb.org/3/" + props.url + "&api_key=" + APIKEY;
    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="category-title">
      <h2>{props.categoryTitle}</h2>
      <div className="movies-container">
        {data.results.map((result, i) => {
          if (i < 5) {
            var backdrop =
              "http://image.tmdb.org/t/p/original" + result.backdrop_path;
            var title = "";
            if (!result.name) {
              title = result.original_title;
            } else {
              title = result.name;
            }
            return (
              <Movie
                key={i}
                backdrop={backdrop}
                title={title}
                rating={result.vote_average}
                description={result.overview}
              />
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
}

export default MovieTitles;
