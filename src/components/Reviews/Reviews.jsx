import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { TMDBAPI } from 'js/API/TMDBAPI';

import { ReviewItem } from 'components';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      const reviewsResponse = await TMDBAPI.getMovieReviews(movieId);
      setReviews(reviewsResponse);
    })();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  if (reviews.length <= 0) {
    return <p>There are no reviews yet</p>;
  }

  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return <ReviewItem key={id} content={content} author={author} />;
      })}
    </ul>
  );
};

export default Reviews;
