/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { fetchNewPageTitle, fetchNewPageDetail } from '../util/fetchData';
import TitleSearchBar from './TitleSearchBar';
import { DetailSearchBar } from './DetailSearchBar';

const outerStyle = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  button {
    margin: 20px 0;
    border-radius: 10px;
    font-size: 100%;
    font-weight: bold;
    padding: 10px 20px;
    color: #e6f7ff;
    background-color: #3355ff;
    border: none;
    letter-spacing: 2px;
    transition: 0.3s;
    outline: none;
    :hover {
      background-color: #001a99;
      border: none;
    }
  }
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
  const handleAdd = () => {
    if (JSON.parse(localStorage.getItem('searchBy')) === 'title') {
      fetchNewPageTitle(
        localStorage.getItem('movie'),
        props.totalMovieData,
        props.setTotalMovieData,
        props.moviePage,
        props.setMoviePage,
      );
    } else {
      fetchNewPageDetail(
        JSON.parse(localStorage.getItem('year')).value,
        JSON.parse(localStorage.getItem('genre')).value,
        props.totalMovieData,
        props.setTotalMovieData,
        props.moviePage,
        props.setMoviePage,
      );
    }
  };
  return (
    <>
      {props.searchBy === 'title' ? (
        <TitleSearchBar
          setTotalMovieData={props.setTotalMovieData}
          setMoviePage={props.setMoviePage}
          setSearchBy={props.setSearchBy}
        />
      ) : (
        <DetailSearchBar
          setTotalMovieData={props.setTotalMovieData}
          setMoviePage={props.setMoviePage}
          setSearchBy={props.setSearchBy}
        />
      )}

      {props.totalMovieData ? (
        <div css={outerStyle}>
          <section>
            {props.totalMovieData.map((movie, index) => {
              if (!movie['poster_path']) {
                return null;
              }
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
            })}
          </section>
          <button onClick={handleAdd}>Load More Results</button>
        </div>
      ) : null}
    </>
  );
}
