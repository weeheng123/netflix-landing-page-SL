import "./App.scss";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import MovieTitles from "../Movies/MovieTitles";

function App() {
  const movieTitles = [
    {
      categoryTitle: "Top TV Picks for Wee Heng",
      url: "discover/tv?sort_by=popularity.desc&page=1",
    },
    {
      categoryTitle: "Trending now",
      url: "discover/movie?sort_by=popularity.desc&page=1",
    },
    {
      categoryTitle: "Most watched in Horror",
      url: "genre/27/movies?sort_by=popularity.desc&page=1",
    },
    {
      categoryTitle: "Sci-Fi greats",
      url: "genre/878/movies?sort_by=popularity.desc&page=1",
    },
    {
      categoryTitle: "Comedy magic",
      url: "genre/35/movies?sort_by=popularity.desc&page=1",
    },
  ];

  return (
    <React.Fragment>
      <Navbar />
      <Main />
      {movieTitles.map((title, i) => (
        <MovieTitles categoryTitle={title.categoryTitle} url={title.url} />
      ))}
    </React.Fragment>
  );
}

export default App;
