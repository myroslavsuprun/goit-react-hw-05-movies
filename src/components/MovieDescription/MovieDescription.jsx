import PropTypes from 'prop-types';

import { GenreList } from 'components';

const MovieDescription = ({
  title,
  vote_average,
  release_date,
  genres,
  overview,
}) => {
  const release_year = release_date.slice(0, 4);
  return (
    <div>
      <h3>{title}</h3>
      <div>{vote_average}</div>
      <div>{release_year}</div>
      <div>{overview}</div>

      <GenreList genres={genres} />
    </div>
  );
};

MovieDescription.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieDescription;
