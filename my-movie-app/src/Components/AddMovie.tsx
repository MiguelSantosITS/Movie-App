import React, { useState } from "react";
import { useMovieStore } from "../Store/store";

const AddMovie: React.FC = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const addMovie = useMovieStore((state) => state.addMovie);

  const handleAddMovie = () => {
    if (name.trim() && image.trim()) {
      addMovie(name, image);
      setName("");
      setImage("");
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Movie Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Image Link"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="form-control mb-2"
      />
      <button
        className="btn btn-primary"
        onClick={handleAddMovie}
        disabled={!name || !image}
      >
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
