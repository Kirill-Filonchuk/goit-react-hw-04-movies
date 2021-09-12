import { useState } from "react";
import { getSearchMovies } from '../../utils/apiService'
import MoviesList from "../../components/MoviesList/MoviesList";

export default function Movies() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearchMovies = (e) => {
        e.preventDefault()
        getSearchMovies(query)
        .then(res=>setMovies(res.data.results))
    }
  return (
    <div>
      <h1>Movies</h1>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSearchMovies}>
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel">Search</span>
          </button>

          <input
            className="SearchFormInput"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
                      value={query}
                      onChange={handleChange}
          />
        </form>
          </header>
          <MoviesList movies={movies} page='/movies'/>
    </div>
  );
}
