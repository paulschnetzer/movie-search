import { useRef, useEffect } from 'react';

export let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

export const generateArrayOfYears = () => {
  const max = new Date().getFullYear();
  const min = 1900;
  const years = [];
  for (let i = max; i >= min; i--) {
    years.push({ label: i, value: i });
  }
  return years;
};

export const handleOnSuggestionsFetchRequest = async (e, setSuggestions) => {
  if (!e.value || /^\s/.test(e.value)) {
    setSuggestions([]);
    return;
  }
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=268a7d083c5b3d50039c4331c0b31383&language=en-US&query=${e.value}
          &page=1`,
  );
  const movieData = await response.json();
  const filterdMovieData = movieData.results.filter(
    (movieData) => movieData.poster_path,
  );
  setSuggestions(filterdMovieData);
};

export const handleRenderSuggestion = (suggestion, handleClick) => (
  <section onClick={handleClick}>
    <img
      src={`https://image.tmdb.org/t/p/w200/${suggestion.poster_path}`}
      alt={`movieposter of ${suggestion.title}`}
    />
    <div>
      <p>{suggestion.title}</p>
      <p>
        {suggestion.release_date ? suggestion.release_date.slice(0, 4) : null}
      </p>
    </div>
  </section>
);
