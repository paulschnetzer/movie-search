/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SearchBars } from './SearchBar';
import { fetchNewPageTitle } from '../util/fetchData';
import useLocalStorage from '../util/localStorage';
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
  const [searchBar, setSearchBar] = useLocalStorage('searchBar', '');
  const handleAdd = () => {
    fetchNewPageTitle(
      searchBar,
      props.totalMovieData,
      props.setTotalMovieData,
      2,
    );
  };

  return (
    <>
      <SearchBars
        setTotalMovieData={props.setTotalMovieData}
        searchBar={searchBar}
        setSearchBar={setSearchBar}
        searchBy={props.searchBy}
      />
      {props.totalMovieData ? (
        <div css={outerStyle}>
          {props.totalMovieData.map((movie, index) => {
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
          <button onClick={handleAdd}>More</button>;
        </div>
      ) : null}
    </>
  );
}
