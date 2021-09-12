import { NavLink } from "react-router-dom";

export default function MoviesList({movies, page}) {

    return (
        <ul>
            {movies.map(({ id, original_title }) => (<li key={id}><NavLink to={{pathname:`/movies/${id}` , state:{from: page}}}><p>{original_title}</p></NavLink></li>))}
        </ul>
    )
}