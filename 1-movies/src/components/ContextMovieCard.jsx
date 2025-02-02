import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import "./ContextMovieCard.css";

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMovies(page);
  }, [page]);

  const loadMovies = (page) => {
    get(`/discover/movie?page=${page}`).then((data) => {
      setMovies((prevMovies) => {
        // Filtrar duplicados por el id
        const uniqueMovies = [
          ...prevMovies,
          ...data.results.filter(
            (movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
          ),
        ];
        return uniqueMovies;
      });
      setHasMore(data.page < data.total_pages);
    });
  };

  const loadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <ul className="container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      {hasMore && (
        <button onClick={loadMore} className="loadMoreButton">
          Cargar más
        </button>
      )}
    </>
  );
}
