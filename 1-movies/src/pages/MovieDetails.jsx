import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenres(data.genres[0]);
    });
  }, [movieId]);

  const imgUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img src={imgUrl} alt={movie.title} className="col movieImage" />
      <div className="col movieDetails">
        <p className="title">
          <strong>{movie.title}</strong>
        </p>
        <p>
          <strong>Género: </strong>
          {genres.name}
        </p>

        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>

        <p>
          <strong>Promedio de Calificación: </strong>
          {movie.vote_average}
        </p>

        <p>
          <strong>Fecha de lanzamiento: </strong>
          {movie.release_date}
        </p>
      </div>
    </div>
  );
}