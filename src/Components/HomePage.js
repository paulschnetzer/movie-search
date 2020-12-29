import useLocalStorage from '../util/localStorage';
import SearchBar from './SearchBar';
import RenderMovies from './RenderMovies';
import Header from './Header';

export default function HomePage() {
  const [searchBar, setSearchBar] = useLocalStorage('');
  return (
    <div>
      <Header />
      <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} />
      <RenderMovies searchBar={searchBar} />
    </div>
  );
}
