import React, { useEffect, useState } from 'react';
export default function RenderMovies(props) {
  const [totalMovieData, setTotalMovieData] = useState();
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        props.searchBar
          ? `https://api.themoviedb.org/3/search/movie?api_key=${props.API_KEY}&language=en-US&query=${props.searchBar}
        &page=1
        `
          : `https://api.themoviedb.org/3/trending/movie/week?api_key=${props.API_KEY}
        `,
      );
      let movieData = await response.json();
      setTotalMovieData(Object.values(movieData.results));
    }

    fetchData(props.searchBar);
    props.setSearchBar(props.searchBar);
    console.log('hello');
  }, [props.searchBar]);

  if (!totalMovieData) return <p>loading...</p>;

  return totalMovieData.map((movie) => {
    return (
      <div>
        {movie['original_title']}
        <img
          src={
            movie['poster_path']
              ? `https://image.tmdb.org/t/p/w500${movie['poster_path']}`
              : 'https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373244122.jpg'
          }
          alt={`movieposter of ${movie['original_title']}`}
        />
        {movie['release_date'] ? movie['release_date'].slice(0, 4) : null}
      </div>
    );
  });
}
