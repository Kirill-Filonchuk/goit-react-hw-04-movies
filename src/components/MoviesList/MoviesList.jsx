import { NavLink} from "react-router-dom";
import { useLocation } from "react-router";
import s from './MoviesList.module.css'

export default function MoviesList({movies}) {
    const location = useLocation();
    return (
        <ul className={s.addInform}>
            {movies.map(({ id, original_title }) => (<li key={id} className={s.itemInform}><NavLink to={{
                pathname: `/movie/${id}`,
                state: {from:location}
            }}>{original_title}</NavLink></li>))}
        </ul>
    )
}
