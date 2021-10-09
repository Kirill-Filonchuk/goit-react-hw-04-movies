import { getMoviesById } from '../../utils/apiService';
import { useState, useEffect, Suspense, lazy } from 'react';
import { useRouteMatch, useLocation, useHistory, Link, Route, Switch, useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css'

// import Reviews from '../../components/Reviews/Reviews';
// import Cast from '../../components/Cast/Cast';
const Reviews = lazy(() => import('../../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */))
const Cast = lazy(() => import('../../components/Cast/Cast' /* webpackChunkName: "Cast" */))

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState(null);

  const {url, path} = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesById(movieId).then(res => {
      // console.log(res);
      setMovieInfo(res);
    });
  }, [movieId]);
    // console.log('location', location);
  // console.log('history',history);
  // console.log('location.state.search', location.state.search);
 
const btnGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };
 
  return (
    <div className={s.container}>
      <button
        className={s.button}
        type="button"
        onClick={btnGoBack}
      >
        Go Back
      </button>
{/*       
      <h1>MovieDetails</h1> */}
      {movieInfo && (
        <div className={s.card}>
          <img
            src={
              movieInfo.data.poster_path
                ? `https://image.tmdb.org/t/p/w300${movieInfo.data.poster_path}`
                : 'https://media.comicbook.com/files/img/default-movie.png'
            }
            alt=""
          />{' '}
          <h2>{movieInfo.data.original_title}</h2>
          <p>{movieInfo.data.overview}</p>
          <p>
            <span>User Score - </span>
            {movieInfo.data.vote_average} %
          </p>
         
            <h3>Genres</h3>
            <ul className={s.genres}>
              {movieInfo.data.genres.map(({ name }, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          
        </div>
      )}

      <hr />
      <h2>Additional information</h2>
        <ul className={s.addInform}>
          <li key={1} className={s.itemInform}>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: {
                  // from: location?.state?.from ?? "/",
                  from: location.state? location.state.from : '/',
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li key={2} className={s.itemInform}>
            <Link
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location.state? location.state.from : '/',
                },
              }}
            >
              Reviews
            </Link>
          </li>
      </ul>
      <hr />
      {/* <Cast id={movieId} /> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
        <Route path={`${path}/cast/`}>
        {/* <Route path="/movie/:movieId/cast" exact> */}
            <Cast id={movieId} />
          </Route>
        <Route path={`${path}/reviews`}>
        {/* <Route path="/movie/:movieId/reviews" exact> */}
            <Reviews id={movieId} />
        </Route>
        </Switch>
        </Suspense>
    </div>
  );
}
