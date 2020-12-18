/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
const style = () => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 80px;
  input {
    height: 40px;
    width: 300px;
    padding-left: 40px;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 20px;
    outline: none;
    background-image: url('/loupe.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 10px 50%;
    transition: 0.3s;
    transition-timing-function: ease-out;
    cursor: pointer;
    :focus {
      transform: scale(1.05);
      cursor: text;
    }
  }
`;

export default function SearchBar(props) {
  return (
    <div css={style}>
      <input
        value={props.searchBar}
        onChange={(e) => props.setSearchBar(e.currentTarget.value)}
      />
    </div>
  );
}
