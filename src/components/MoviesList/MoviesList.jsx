import { Link } from 'react-router-dom';

const MoviesList = ({ prop }) => {
  return prop.map(({ id, title }) => {
    return (
      <li key={id}>
        <p>
          <Link to={`movies/${id}`}>{title}</Link>
        </p>
      </li>
    );
  });
};

export default MoviesList;
