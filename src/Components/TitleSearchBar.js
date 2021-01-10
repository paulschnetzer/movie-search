/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  handleOnSuggestionsFetchRequest,
  handleRenderSuggestion,
} from '../util/helperFunctions';
import React, { useState, useEffect } from 'react';
import { fetchDataByTitle } from '../util/fetchData';
import useLocalStorage from '../util/localStorage';
import Autosuggest from 'react-autosuggest';

const titleSearchStyle = () => css`
  background: linear-gradient(#070812, transparent);
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
  }
  img {
    height: 60px;
  }
`;

export default function TitleSearchBar(props) {
  const [movie, setMovie] = useLocalStorage('movie', '');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    props.setSearchBy('title');
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    fetchDataByTitle(movie, props.setTotalMovieData);
    props.setMoviePage(2);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      fetchDataByTitle(movie, props.setTotalMovieData);
      props.setMoviePage(2);
    }
  };

  const handleChange = (e, { newValue }) => {
    setMovie(/^\s/.test(newValue) ? '' : newValue);
  };
  return (
    <div css={titleSearchStyle}>
      <form onSubmit={handleClick}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={(e) => {
            handleOnSuggestionsFetchRequest(e, setSuggestions);
          }}
          onSuggestionsClearRequested={() => {
            setSuggestions([]);
          }}
          getSuggestionValue={(suggestion) => suggestion.title}
          renderSuggestion={(e) => handleRenderSuggestion(e, handleClick)}
          inputProps={{
            placeholder: 'Search ...',
            value: movie,
            onChange: handleChange,
            onKeyUp: handleKeyUp,
          }}
        />
      </form>
    </div>
  );
}
