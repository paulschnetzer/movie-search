/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useLocalStorage from './util/localStorage';
import SearchBar from './Components/SearchBar';
import RenderMovies from './Components/RenderMovies';

const outerStyle = () => css`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [searchBar, setSearchBar] = useLocalStorage('');

  return (
    <div css={outerStyle}>
      <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} />
      <RenderMovies searchBar={searchBar} />
    </div>
  );
}

export default App;
