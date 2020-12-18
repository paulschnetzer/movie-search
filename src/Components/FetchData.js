import React, { useEffect } from 'react';

export default function FetchData({
  searchBar,
  setSearchBar,
  API_KEY,
  setTotalMovieData,
}) {
  async function fetchData() {
    let response = await fetch(
      searchBar
        ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchBar}
        &page=1
        `
        : `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
        `,
    );
    let movieData = await response.json();
    setTotalMovieData(Object.values(movieData.results));
  }

  useEffect(() => {
    fetchData(searchBar);
    setSearchBar(searchBar);
  }, [searchBar]);
  return null;
}
