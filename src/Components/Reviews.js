import React from 'react';

export default function Reviews() {
  async function fetchData() {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/553604/reviews?api_key=268a7d083c5b3d50039c4331c0b31383&language=en-US&page=1',
    );
    const reviews = await response.json();
    console.log(reviews);
  }
  fetchData();
  return <div></div>;
}
