import { getMoviesById } from '../../utils/apiService';
import { useState, useEffect, Suspence, lazy } from 'react';
import { useRouteMatch, useLocation, useHistory, Link, Route, Switch,  useParams } from 'react-router-dom';

import Reviews from '../../components/Reviews/Reviews';
import Cast from '../../components/Cast/Cast';

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState(null);

  const {url, path} = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesById(movieId).then(res => {
      console.log(res);
      setMovieInfo(res);
    });
  }, []);
    console.log('location', location);

  console.log('history',history);
  console.log('location.state.search', location.state.search);
  // console.log('match', match);
  // console.log('match.path',path);

  // console.log('movieId', movieId);

  // const btnGoBack = () => {
  //   if (location && location.state && location.state.from) {
  //     history.push(location.state.from);
  //     // history.push({
  //     //   state: { from: location, query: `${ query }`}
  //     return   
  //   }
  //     // history.push(location.state.from);
  //      console.log('BTN_history',history);
  //   history.push("/")
  //   // history.push(location?.state?.from ?? "/");
  //   // console.log('BTN_history',history);

  // }
const btnGoBack = () => {
    history.push(location?.state?.from ?? "/");
    // history.push(loc)
  };
  //   history.push({
  //   state:{query:location.state.query}
  // })


  return (
    <div>
      <button
        type="button"
        onClick={btnGoBack}
      >
        Go Back
      </button>
      <h1>MovieDetails</h1>
      {movieInfo && (
        <div>
          <img
            src={
              movieInfo.data.poster_path
                ? `https://image.tmdb.org/t/p/w300${movieInfo.data.poster_path}`
                : 'https://media.comicbook.com/files/img/default-movie.png'
            }
            alt=""
          />{' '}
          <p>{movieInfo.data.original_title}</p> <p>{movieInfo.data.overview}</p>
          <p>
            <span>User Score - </span>
            {movieInfo.data.vote_average} %
          </p>
          <p>
            <span>Genres</span>
            <ul>
              {movieInfo.data.genres.map(({ name }, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </p>
        </div>
      )}

      <hr />
      <h2>Additional information</h2>
      {/* <ul> */}
         <ul >
          <li >
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
          <li>
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
      {/* <Cast id={movieId} /> */}
        <Switch>
        {/* <Route path={`${path}/cast/`}> */}
        <Route path="/movie/:movieId/cast" exact>
            <Cast id={movieId} />
          </Route>
        {/* <Route path={`${path}/reviews`}> */}
        <Route path="/movie/:movieId/reviews" exact>
            <Reviews id={movieId} />
        </Route>
        
        </Switch>
    </div>
  );
}
