import useLocalStorage from '../util/localStorage';
import { SearchBars } from './SearchBar';
import RenderMovies from './RenderMovies';
import Header from './Header';

export default function HomePage() {
  const [searchBar, setSearchBar] = useLocalStorage('searchBar', '');
  const [searchBy, setSearchBy] = useLocalStorage('searchBy', 'title');
  const [totalMovieData, setTotalMovieData] = useLocalStorage('movieData', ''); //title, genre, actor
  console.log(totalMovieData);
  return (
    <div>
      <Header setSearchBy={setSearchBy} setTotalMovieData={setTotalMovieData} />
      <SearchBars
        setTotalMovieData={setTotalMovieData}
        searchBar={searchBar}
        setSearchBar={setSearchBar}
        searchBy={searchBy}
      />
      <RenderMovies
        searchBar={searchBar}
        searchBy={searchBy}
        totalMovieData={totalMovieData}
        setTotalMovieData={setTotalMovieData}
      />
    </div>
  );
}
