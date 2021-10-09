import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getSearchMovies } from '../../utils/apiService';
import MoviesList from '../../components/MoviesList/MoviesList';
import s from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query') || '';

  // console.log('location', location);
  // console.log('query', query);
  // console.log('searchQuery', searchQuery);

  useEffect(() => {
    if (query !== '') {
      setQuery(searchQuery);
    }
    if (searchQuery !== '') {
      formSubmit(searchQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearchMovies = e => {
    e.preventDefault();

    setMovies([]);
    history.push({ ...location, search: `query=${query}` });
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  function formSubmit(searchQuery) {
    if (searchQuery.trim === '') {
      setQuery([]);
    } else {
      getSearchMovies(searchQuery).then(res => setMovies(res.data.results));
    }
    return;
  }

  // const btnGoBack = () => {
  //   history.push(location?.state?.from ?? "/");
  //   // history.push(loc)
  // };

  return (
    <div>
      <h1>Enter the name of the movie</h1>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSearchMovies}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search Movies"
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
