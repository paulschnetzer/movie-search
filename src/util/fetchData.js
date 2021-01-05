const API_KEY = '268a7d083c5b3d50039c4331c0b31383';

export async function fetchDataByTitle(searchBar, setTotalMovieData) {
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
  console.log('titleFetch');
}

export async function fetchDataByMultiSearch(year, genre, setTotalMovieData) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=268a7d083c5b3d50039c4331c0b31383&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=${year}&with_genres=${genre}`,
  );
  const movieData = await response.json();
  setTotalMovieData(Object.values(movieData.results));
}

export async function fetchNewPageTitle(
  searchBar,
  totalMovieData,
  setTotalMovieData,
  page,
) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchBar}&page=${page}`,
  );
  const movieData = await response.json();
  setTotalMovieData(totalMovieData.concat(movieData.results));
}

export async function fetchAllGenres(setDropDownMenu) {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  );
  const movieData = await response.json();
  setDropDownMenu(
    movieData.genres.map((genre) => {
      return {
        value: genre.id,
        label: genre.name,
      };
    }),
  );
}
export async function fetchData(movieId, setData) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
  );
  const movieData = await response.json();
  setData(movieData);
}
