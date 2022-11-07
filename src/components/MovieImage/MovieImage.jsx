import PropTypes from 'prop-types';

const MovieImage = ({ poster, title }) => {
  return <img width="300" src={poster} alt={title} />;
};

MovieImage.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default MovieImage;
