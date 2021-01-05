import useLocalStorage from '../util/localStorage';

import RenderMovies from './RenderMovies';
import Header from './Header';
import Test from './test';

export default function HomePage() {
  // const [searchBy, setSearchBy] = useLocalStorage('searchBy', 'title');
  // const [totalMovieData, setTotalMovieData] = useLocalStorage('movieData', '');
  // console.log(totalMovieData);
  return (
    // <div>
    //   <Header setSearchBy={setSearchBy} setTotalMovieData={setTotalMovieData} />
    //   <RenderMovies
    //     searchBy={searchBy}
    //     totalMovieData={totalMovieData}
    //     setTotalMovieData={setTotalMovieData}
    //   />
    // </div>
    <Test />
  );
}
