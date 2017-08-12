import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_SELECTED_MOVIE = 'GET_SELECTED_MOVIE';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  }
};

export const getSelectedMovie = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/${id}`, {
    params: {
      id
    }
  });
  return {
    type: GET_SELECTED_MOVIE,
    payload: promise
  }
}

