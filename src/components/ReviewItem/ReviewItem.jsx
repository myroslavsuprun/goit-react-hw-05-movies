import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  AuthorSpan,
  Author,
  Content,
  ReviewItemStyled,
  ToggleButton,
} from './ReviewItem.styled';

const ReviewItem = ({ author, content }) => {
  const [contentToShow, setContentToShow] = useState(null);
  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    if (content.length >= 200) {
      setContentToShow(content.slice(0, 200));
    } else {
      setContentToShow(content);
    }
  }, [setContentToShow, content]);

  useEffect(() => {
    if (isReadMore) {
      setContentToShow(content.slice(0, 200));
    } else {
      setContentToShow(content);
    }
  }, [isReadMore, setContentToShow, content]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <ReviewItemStyled>
      <Author>
        <AuthorSpan>Author: </AuthorSpan>
        {author}
      </Author>
      <Content>
        {contentToShow && `${contentToShow}...`}
        <ToggleButton onClick={toggleReadMore}>
          {isReadMore ? 'Read more' : 'Read less'}
        </ToggleButton>
      </Content>
    </ReviewItemStyled>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
