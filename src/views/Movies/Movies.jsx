import { useEffect, useState } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import { getSearchMovies } from '../../utils/apiService';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
   
  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query') || '';
  
  console.log('location', location);
  console.log('query', query);
  console.log('searchQuery', searchQuery);

  useEffect(() => {
    if (query !== '') {
      setQuery(searchQuery)
    }
    if (searchQuery !== "") {
      formSubmit(searchQuery);
    }
  }, [searchQuery]);

  // useEffect(()=>{formSubmit(searchQuery);},[searchQuery])

  const handleSearchMovies = e => {
    e.preventDefault();
    // getSearchMovies(query).then(res => setMovies(res.data.results));
setMovies([])
    history.push({ ...location, search: `query=${query}`});
  };
  
  const handleChange = e => {
    setQuery(e.target.value);
  };

  function formSubmit(searchQuery) {
    if (searchQuery.trim === "") {
      setQuery([]);
    } else {
         getSearchMovies(searchQuery).then(res => setMovies(res.data.results));
    }
    return 
  };

  // const btnGoBack = () => {
  //   history.push(location?.state?.from ?? "/");
  //   // history.push(loc)
  // };

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

  {/* <button
        type="button"
        onClick={btnGoBack}
      >
        Go Back
      </button> */}
      <hr />

      <MoviesList movies={movies} />
    </div>
  );
}

