import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import Movies from './views/Movies/Movies';
import MovieDetails from './views/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" exact component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
