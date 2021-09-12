import { getMoviesById } from '../../utils/apiService';
import { useState, useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';

export default function MovieDetails() {
    const [movieInfo, setMovieInfo] = useState(null);
    const match = useRouteMatch()
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        getMoviesById(match.params.movieId)
            .then(res => {
                console.log(res);
               setMovieInfo(res) 
            } )
    },[match.params.movieId]);
console.log(location);
    // console.log(match);
    // console.log(movieInfo);

    return (
        <div>
            <button type="button" onClick={() => { history.push(location.state.from) }}>Go Back</button>
            <h1>MovieDetails</h1>
            {
                movieInfo && (<div><img src={movieInfo.data.poster_path ? `https://image.tmdb.org/t/p/w300${movieInfo.data.poster_path}` :"https://media.comicbook.com/files/img/default-movie.png"}  alt=""/> <p></p> </div>
)
            }
            
        </div>
    )
}