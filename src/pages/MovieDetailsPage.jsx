import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../servers/servers';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { title, genres, overview, poster_path } = movie;
  console.log(movieId);
  console.log(movie);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <h2>Detail Page {movieId}</h2>
      {movie && (
        <div style={{ display: 'flex' }}>
          <div className="img_box">
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt={title}
            />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <p>{overview}</p>
            <h4>Genres:</h4>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
              {genres &&
                genres.map(({ name }) => (
                  <li style={{ marginRight: '10px' }}>
                    <p>{name}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'review'}>Review</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
