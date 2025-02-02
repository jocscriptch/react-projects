import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { MovieDetails } from '../pages/MovieDetails';

export function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/movie/:movieId" element={<MovieDetails />} />
    </Routes>
  );
}