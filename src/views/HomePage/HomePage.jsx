import { useState, useEffect} from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { getTrandingMovies } from "../../utils/apiService"

// tuple
export default function HomePage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrandingMovies()
        .then(resp=>setMovies(resp.data.results))
    }, [])
    console.log('movies', movies);
    
    return (
        <div>
            <h1>Home Page</h1>
            <MoviesList movies={ movies} page='/'/>
        </div>
    )
}