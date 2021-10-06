import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const KEY = '4e444e8999b67eb8a9fe595c0fd531aa';

async function getTrandingMovies() {
  const response = await axios.get(`trending/movie/week?api_key=${KEY}`);
  return response;
}

async function getSearchMovies(query) {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&include_adult=false&query=${query}`,
  );
  return response;
}

async function getMoviesById(id) {
  const response = await axios.get(`movie/${id}?api_key=${KEY}`);
  return response;
}

async function getMoviesCredits(id) {
  const response = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
  return response;
}

async function getMoviesRewiews(id) {
  const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
  return response;
}

export { getTrandingMovies, getSearchMovies, getMoviesById, getMoviesCredits, getMoviesRewiews };
