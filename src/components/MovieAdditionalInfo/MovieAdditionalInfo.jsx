import { Link } from 'react-router-dom';

const MovieAdditionalInfo = () => {
  return (
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  );
};

export default MovieAdditionalInfo;
