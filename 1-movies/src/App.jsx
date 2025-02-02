import { useState } from "react";
import "./App.css";
import { MyRoutes } from "./routers/routes";
import { SearchBar } from "./components/SearchBar";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1 className="title">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            🎞️Películas & Series🍿
          </Link>
        </h1>
        <SearchBar />
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;