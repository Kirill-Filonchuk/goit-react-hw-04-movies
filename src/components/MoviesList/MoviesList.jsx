import { NavLink} from "react-router-dom";
import { useLocation } from "react-router";

export default function MoviesList({movies, page}) {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, original_title }) => (<li key={id}><NavLink to={{
                pathname: `/movie/${id}`,
                state: {from:location}
            }}><p>{original_title}</p></NavLink></li>))}
        </ul>
    )
}
// state:{from: page}