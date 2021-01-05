/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import {
  fetchAllGenres,
  fetchDataByGenre,
  fetchDataByMultiSearch,
} from '../util/fetchData';
import { fetchDataByTitle } from '../util/fetchData';
import useLocalStorage from '../util/localStorage';

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
    cursor: text;
    :focus {
      transform: scale(1.05);
      cursor: text;
    }
  }
`;

export function TitleSearchBar(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setTotalMovieData('');
    fetchDataByTitle(props.searchBar, props.setTotalMovieData);
  }
  function handleChange(e) {
    if (/^\s/.test(e.currentTarget.value)) {
      e.currentTarget.value = '';
    }
    props.setSearchBar(e.currentTarget.value);
  }
  return (
    <div css={style}>
      <form onSubmit={handleSubmit}>
        <input value={props.searchBar} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

const generateArrayOfYears = () => {
  const max = new Date().getFullYear();
  const min = 1900;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push({ label: i, value: i });
  }
  console.log('hello');
  return years;
};

export function DetailSearchBar(props) {
  const [years, setYears] = useState(null);
  const [genres, setGenres] = useState(null);
  useEffect(() => {
    fetchAllGenres(setGenres);
    setYears(generateArrayOfYears());
  }, []);

  const [selectedYear, setSelectedYear] = useLocalStorage('year', '');
  const [selectedGenre, setSelectedGenre] = useLocalStorage('genre', '');

  if (!genres || !generateArrayOfYears()) {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchDataByMultiSearch(
          selectedYear.value,
          selectedGenre.value,
          props.setTotalMovieData,
        );
      }}
    >
      <h1>Year</h1>
      <Select
        defaultValue={selectedYear}
        onChange={setSelectedYear}
        options={years}
      />

      <h1>Genre</h1>
      <Select
        options={genres}
        defaultValue={selectedGenre}
        onChange={setSelectedGenre}
      />

      <button>Submit</button>
    </form>
  );
}

export function SearchBars(props) {
  if (props.searchBy === 'detail') {
    return <DetailSearchBar setTotalMovieData={props.setTotalMovieData} />;
  } else if (props.searchBy === 'title') {
    return (
      <TitleSearchBar
        setSearchBar={props.setSearchBar}
        searchBar={props.searchBar}
        setTotalMovieData={props.setTotalMovieData}
      />
    );
  }
}
