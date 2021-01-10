import useLocalStorage from '../util/localStorage';

import RenderMovies from './RenderMovies';
import Header from './Header';
import Banner from './Banner';

export default function HomePage() {
  const [totalMovieData, setTotalMovieData] = useLocalStorage('movieData', '');
  const [searchBy, setSearchBy] = useLocalStorage('searchBy', 'title');
  const [moviePage, setMoviePage] = useLocalStorage('moviePages', 2);
  return (
    <>
      <Header
        setSearchBy={setSearchBy}
        setTotalMovieData={setTotalMovieData}
        setMoviePage={setMoviePage}
      />
      <Banner />
      <RenderMovies
        searchBy={searchBy}
        totalMovieData={totalMovieData}
        setTotalMovieData={setTotalMovieData}
        moviePage={moviePage}
        setMoviePage={setMoviePage}
        setSearchBy={setSearchBy}
      />
    </>
  );
}
