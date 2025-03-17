import React from "react";
import { useMovieStore } from "../Store/store";

const FilterMovies: React.FC = () => {
  const { filter, setFilter } = useMovieStore();

  return (
    <div className="mb-3">
      <button
        className={`btn ${
          filter === "all" ? "btn-primary" : "btn-outline-primary"
        } me-2`}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={`btn ${
          filter === "viewed" ? "btn-primary" : "btn-outline-primary"
        } me-2`}
        onClick={() => setFilter("viewed")}
      >
        Seen
      </button>

      <button
        className={`btn ${
          filter === "notViewed" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => setFilter("notViewed")}
      >
        For viewing
      </button>
    </div>
  );
};

export default FilterMovies;
