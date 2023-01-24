import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import { trendingMovies } from '../servers/servers';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  console.log(location);
  console.log(movies);

  useEffect(() => {
    trendingMovies()
      .then(setMovies)
      .catch(err => err.message);
  }, []);

  //   const children = movies.map(({ id, title, poster_path }) => {
  //     return (
  //       <>
  //         <li key={id}>
  //           <img
  //             src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
  //             alt={title}
  //           />
  //           <p>
  //             <Link to={id} element={''}>
  //               {title}
  //             </Link>
  //           </p>
  //         </li>
  //       </>
  //     );
  //   });

  return (
    <>
      <h1>Home Page</h1>
      <ul>{movies && <MoviesList prop={movies} />}</ul>
    </>
  );
};

export default HomePage;
