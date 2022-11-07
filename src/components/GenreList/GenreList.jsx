import PropTypes from 'prop-types';

import { GenreItem } from 'components/GenreItem';

const GenreList = ({ genres }) => {
  return (
    <ul>
      {genres.map(({ name, id }) => (
        <GenreItem key={id} name={name} />
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenreList;
