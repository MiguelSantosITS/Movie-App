import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import FilterMovies from "./Components/FilterMovies";

const App: React.FC = () => {
  return (
    <>
      <span></span>
      <div className="container mt-4">
        <h1 className="mb-4">🎬 Movies</h1>
        <AddMovie />
        <FilterMovies />
        <MovieList />
      </div>
    </>
  );
};

export default App;
