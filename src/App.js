/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import useLocalStorage from './customHooks/localStorage';
import SearchBar from './Components/SearchBar';
import RenderMovies from './Components/RenderMovies';
const API_KEY = '268a7d083c5b3d50039c4331c0b31383';
const outerStyle = () => css`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [searchBar, setSearchBar] = useLocalStorage('');

  return (
    <div css={outerStyle}>
      <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} />
      <RenderMovies
        searchBar={searchBar}
        setSearchBar={setSearchBar}
        API_KEY={API_KEY}
      />
    </div>
  );
}

export default App;
