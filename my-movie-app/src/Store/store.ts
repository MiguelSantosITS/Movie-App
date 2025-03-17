import { create } from "zustand";

interface Movie {
  id: number;
  name: string;
  image: string;
  viewed: boolean;
}

type FilterType = "all" | "viewed" | "notViewed";

interface MovieStore {
  movies: Movie[];
  filter: FilterType;
  addMovie: (name: string, image: string) => void;
  toggleViewed: (id: number) => void;
  deleteMovie: (id: number) => void;
  setFilter: (filter: FilterType) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  filter: "all",
  addMovie: (name, image) =>
    set((state) => ({
      movies: [...state.movies, { id: Date.now(), name, image, viewed: false }],
    })),

  toggleViewed: (id) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id ? { ...movie, viewed: !movie.viewed } : movie
      ),
    })),
  deleteMovie: (id) =>
    set((state) => ({
      movies: state.movies.filter((movie) => movie.id !== id),
    })),
  setFilter: (filter) => set({ filter }),
}));
