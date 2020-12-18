import React, { useState, useEffect } from 'react';
import HomePage from './Components/HomePage';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const API_KEY = '268a7d083c5b3d50039c4331c0b31383';
const MoviePage = ({ match }) => {
  const {
    params: { movieId },
  } = match;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(movieId, setData) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=268a7d083c5b3d50039c4331c0b31383&language=en-US`,
    );
    const movieData = await response.json();
    setIsLoading(false);
    setData(movieData);
  }

  useEffect(() => {
    fetchData(movieId, setData);
  }, [movieId]);

  return (
    <>
      {data ? (
        <>
          <h1></h1>
          {data.title}
          <Link to="/">Back to homepage</Link>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/:movieId" component={MoviePage} />
      </Router>
    </>
  );
}

export default App;
