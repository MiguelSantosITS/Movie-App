import React from "react";
import { useMovieStore } from "../Store/store";

interface MovieItemProps {
  movie: {
    id: number;
    name: string;
    image: string;
    viewed: boolean;
  };
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { toggleViewed, deleteMovie } = useMovieStore();

  return (
    <div className="card mb-3">
      <img src={movie.image} className="card-img-top" alt={movie.name} />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">{movie.viewed ? "✔ Seen" : "⏳ Unseen"}</p>
        <button
          className="btn btn-success me-2"
          onClick={() => toggleViewed(movie.id)}
        >
          {movie.viewed ? "Mark us not Seen" : "Mark us Seen"}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => deleteMovie(movie.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
