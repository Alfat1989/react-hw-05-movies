import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar.jsx';

import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route
              path="cast"
              element={'/**создаем сомпоненты где рендерится CAST  */'}
            />
            <Route
              path="review"
              element={'/**создаем сомпоненты где рендерится REVIEWS */'}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
