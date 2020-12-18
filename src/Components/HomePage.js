/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useLocalStorage from '../util/localStorage';
import SearchBar from './SearchBar';
import RenderMovies from './RenderMovies';

const outerStyle = () => css`
  display: flex;
  flex-direction: column;
`;

export default function HomePage() {
  const [searchBar, setSearchBar] = useLocalStorage('');

  return (
    <div css={outerStyle}>
      <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} />
      <RenderMovies searchBar={searchBar} />
    </div>
  );
}
