import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';
import LongReview from './LongReview';
import ShortReview from './ShortReview';

const outerStyle = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e6f7ff;
  margin-top: 100px;
`;

export default function Reviews(props) {
  const [reviews, setReviews] = useState();
  async function fetchData(movieId, setReviews) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=268a7d083c5b3d50039c4331c0b31383&language=en-US&page=1`,
    );
    const data = await response.json();
    let shortendData = data.results.map((e) => ({
      id: uuidv4(),
      author: e.author,
      content: e.content,
    }));
    setReviews(shortendData);
  }

  useEffect(() => {
    fetchData(props.movieId, setReviews);
  }, [props.movieId]);

  if (!reviews) {
    return null;
  }
  return (
    <div css={outerStyle}>
      <h1>{reviews.length === 0 ? 0 : reviews.length} Reviews</h1>
      {reviews.map((review, index) => {
        return review.content.length < 500 ? (
          <ShortReview review={review} key={index} />
        ) : (
          <LongReview review={review} key={index} />
        );
      })}
    </div>
  );
}
