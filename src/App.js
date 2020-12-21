import HomePage from './Components/HomePage';
import MoviePage from './Components/MoviePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
