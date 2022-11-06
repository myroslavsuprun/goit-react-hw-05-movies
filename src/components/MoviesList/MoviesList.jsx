import { MovieItem } from 'components/MovieItem';
import PropTypes from 'prop-types';

const MoviesList = ({ moviesData }) => {
  return (
    <ul>
      {moviesData.map(({ title, id }) => {
        return <MovieItem key={id} id={id} title={title} />;
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};
