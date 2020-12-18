const API_KEY = '268a7d083c5b3d50039c4331c0b31383';

export default async function fetchData(searchBar, setTotalMovieData) {
  const response = await fetch(
    searchBar
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchBar}
    &page=1
    `
      : `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
    `,
  );
  const movieData = await response.json();
  setTotalMovieData(Object.values(movieData.results));
}
