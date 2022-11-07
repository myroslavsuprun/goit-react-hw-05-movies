import PropTypes from 'prop-types';

const GenreItem = ({ name }) => {
  return <li>{name}</li>;
};

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GenreItem;
