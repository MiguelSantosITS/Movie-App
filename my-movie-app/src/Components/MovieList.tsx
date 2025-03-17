import React from "react";
import { useMovieStore } from "../Store/store";

const MovieList: React.FC = () => {
  const { movies, filter, toggleViewed, deleteMovie } = useMovieStore();

  const filteredMovies = movies.filter((movie) => {
    if (filter === "viewed") return movie.viewed;
    if (filter === "notViewed") return !movie.viewed;
    return true;
  });

  return (
    <div>
      {filteredMovies.length === 0 ? (
        <p className="text-muted">No Movie Found.</p>
      ) : (
        <ul className="list-group">
          {filteredMovies.map((movie) => (
            <li
              key={movie.id}
              className="list-group-item d-flex align-items-center"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="me-3"
                style={{ width: 50, height: 50 }}
              />
              <span className="flex-grow-1">{movie.name}</span>
              <button
                className="btn btn-success me-2"
                onClick={() => toggleViewed(movie.id)}
              >
                {movie.viewed ? "Unseen" : "Seen"}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteMovie(movie.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
