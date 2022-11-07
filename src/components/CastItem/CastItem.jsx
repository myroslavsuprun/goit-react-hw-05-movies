import PropTypes from 'prop-types';

const CastItem = ({ name, character, profileImg }) => {
  return (
    <li>
      {profileImg && <img width="200" src={profileImg} alt={character} />}
      {name && (
        <>
          <h3>{name}</h3>
          <p>{character}</p>
        </>
      )}
    </li>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profileImg: PropTypes.string,
};

export default CastItem;
