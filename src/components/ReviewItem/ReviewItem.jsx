import PropTypes from 'prop-types';

const ReviewItem = ({ author, content }) => {
  return (
    <>
      <li>
        <h4>{author}</h4>
        <p>{content}</p>
      </li>
      <hr />
    </>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
