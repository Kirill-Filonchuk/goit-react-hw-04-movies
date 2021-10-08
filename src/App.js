import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import Movies from './views/Movies/Movies';
import MovieDetails from './views/MovieDetailsPage/MovieDetailsPage';
// redirect
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetails />
        </Route>
        {/* <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetails} /> */}
      </Switch>
    </div>
  );
}

export default App;
