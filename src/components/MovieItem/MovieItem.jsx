import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
