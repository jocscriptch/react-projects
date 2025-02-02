import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../data/httpClient";
import "./SearchBar.css";

export function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchText.length > 0) {
      get(`/search/movie?query=${searchText}`).then((data) => {
        setSuggestions(data.results.slice(0, 5)); // Mostrar solo las primeras 5 
      });
    } else {
      setSuggestions([]);
    }
  }, [searchText]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSuggestionClick = () => {
    setSearchText(""); 
    setSuggestions([]); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchText}
        onChange={handleInputChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((movie) => (
            <li key={movie.id} className="suggestion-item">
              <Link to={`/movie/${movie.id}`} onClick={handleSuggestionClick}>
                <img
                  src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`}
                  alt={movie.title}
                />
                <span>{movie.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
