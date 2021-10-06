import { getMoviesById } from '../../utils/apiService';
import { useState, useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory, NavLink, Route, Switch } from 'react-router-dom';

import Reviews from '../../components/Reviews/Reviews';
import Cast from '../../components/Cast/Cast';

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState(null);

  // const [moviesReviews, setMoviesReviews] = useState(null);

  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    getMoviesById(match.params.movieId).then(res => {
      console.log(res);
      setMovieInfo(res);
    });
  }, [match.params.movieId]);
    console.log('location', location);
  console.log('location.state.from', location.state.from);
  console.log('location.state.search', location.state.search);
  console.log('match', match);

  console.log('movieInfo', movieInfo);
console.log('match.path + "/reviews"',match.path+"/reviews");
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          // history.push(location.state.from);
          history.push({
            pathname:location.state.from,
            // state: {from: location.state.from } ,
            search:location.search,
          });
        }}
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
      <ul>
        <li key={1}>
          <NavLink to={`${match.url}/cast`}>Cast</NavLink>
        </li>
        <li key={11}>
          <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      {/* <Route path={`${match.url}/:reviews`}> */}
      <Switch>
        {/* <Route exact path="/cast"  component={<Reviews id={match.params.movieId} />} /> */}
        <Route exact path={match.path + "/cast"}>
          <Reviews id={match.params.movieId +"/cast"} />
        </Route>
        {/* <Route exact path={match.path + "/reviews"} component={<Cast id={match.path+"/reviews"} />} /> */}
         <Route exact path={match.path + "/reviews"}>
        <Cast id={match.path+"/reviews"} />
        </Route>
      </Switch>
    </div>
  );
}
