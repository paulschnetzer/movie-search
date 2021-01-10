/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import { fetchAllGenres, fetchDataByMultiSearch } from '../util/fetchData';
import useLocalStorage from '../util/localStorage';
import { generateArrayOfYears } from '../util/helperFunctions';
const detailSearchStyle = () => css`
  background: linear-gradient(#070812, transparent);
  form {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    height: 180px;
  }
  section {
    width: 30%;
    h1 {
      color: #e6f7ff;
      font-weight: 200;
      letter-spacing: 3px;
      margin-bottom: 5px;
      font-size: 140%;
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
  }
`;

export function DetailSearchBar(props) {
  const [years, setYears] = useState(null);
  const [genres, setGenres] = useState(null);
  const [selectedYear, setSelectedYear] = useLocalStorage('year', '');
  const [selectedGenre, setSelectedGenre] = useLocalStorage('genre', '');
  useEffect(() => {
    fetchAllGenres(setGenres);
    setYears(generateArrayOfYears());
    props.setSearchBy('detail');
  }, []);

  if (!genres || !generateArrayOfYears()) {
    return <div>Loading...</div>;
  }

  return (
    <div css={detailSearchStyle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setMoviePage(2);
          fetchDataByMultiSearch(
            selectedYear.value,
            selectedGenre.value,
            props.setTotalMovieData,
          );
        }}
      >
        <section>
          <h1>Year</h1>
          <Select
            defaultValue={selectedYear}
            onChange={setSelectedYear}
            options={years}
          />
          <button>Search</button>
        </section>
        <section>
          <h1>Genre</h1>

          <Select
            options={genres}
            defaultValue={selectedGenre}
            onChange={setSelectedGenre}
          />
        </section>
      </form>
    </div>
  );
}
