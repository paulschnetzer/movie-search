/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import fetchData from '../util/fetchData';

const outerStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const innerStyle = () => css`
  width: 200px;
  margin-bottom: -4px;
  position: relative;
  border-radius: 20px;
  filter: brightness(70%);
  :not(:hover) {
    transition: 0.1s ease-out;
    transform: scale(1);
  }
  :hover {
    filter: brightness(100%);
    transition: 0.2s ease-out;
    transform: scale(1.05);
    z-index: 1000;
  }
`;
export default function RenderMovies({ searchBar }) {
  const [totalMovieData, setTotalMovieData] = useState();

  useEffect(() => {
    fetchData(searchBar, setTotalMovieData);
  }, [searchBar]);

  if (!totalMovieData) return <p>loading...</p>;

  return (
    <div css={outerStyle}>
      {totalMovieData.map((movie, i) => {
        return (
          <div css={innerStyle()} key={i}>
            <section>
              {/* <p>
                {movie['original_title']}{' '}
                {movie['release_date']
                  ? '(' + movie['release_date'].slice(0, 4) + ')'
                  : null}
              </p> */}
            </section>
            <img
              src={
                movie['poster_path']
                  ? `https://image.tmdb.org/t/p/w200${movie['poster_path']}`
                  : 'https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373244122.jpg'
              }
              alt={`movieposter of   ${movie['original_title']}`}
            />
          </div>
        );
      })}
      ;
    </div>
  );
}
