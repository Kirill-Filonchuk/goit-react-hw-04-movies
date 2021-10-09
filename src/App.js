import './App.css';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage/HomePage';
// import Movies from './views/Movies/Movies';
// import MovieDetails from './views/MovieDetailsPage/MovieDetailsPage';
// redirect
const HomePage = lazy(() => import('./views/HomePage/HomePage' /* webpackChunkName: "HomePage" */));
const Movies = lazy(() => import('./views/Movies/Movies' /* webpackChunkName: "Movies" */));
const MovieDetails = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

function App() {
  return (
    <div className="app">
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </div>
  );
}

export default App;
