/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { fetchDataByGenre, fetchDataByTitle } from '../util/fetchData';

import { Link } from 'react-router-dom';

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
  img {
    height: 300px;
  }
  filter: brightness(70%);
  :not(:hover) {
    transition: 0.1s ease-out;
    transform: scale(1);
  }
  :hover {
    filter: brightness(100%);
    transition: 0.3s ease-out;
    transform: scale(1.01);
    z-index: 1000;
  }
`;
export default function RenderMovies(props) {
  const [totalMovieData, setTotalMovieData] = useState();
  const [searchBy, setSearchBy] = useState('genre'); //title, genre, actor

  useEffect(() => {
    if (searchBy === 'title') {
      fetchDataByTitle(props.searchBar, setTotalMovieData);
    }
    if (searchBy === 'genre') {
      fetchDataByGenre(props.searchBar, setTotalMovieData);
    }
  }, [props.searchBar]);

  if (!totalMovieData) return <p>loading...</p>;

  return (
    <div css={outerStyle}>
      {totalMovieData.map((movie, index) => {
        if (movie['poster_path']) {
          return (
            <div css={innerStyle} key={index}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie['poster_path']}`}
                  alt={`movieposter of ${movie['original_title']}`}
                />
              </Link>
            </div>
          );
        }
        return null;
      })}
      ;
    </div>
  );
}
