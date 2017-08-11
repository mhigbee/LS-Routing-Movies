import { combineReducers } from 'redux';
import { GET_MOVIES, GET_SELECTED_MOVIE } from '../actions';

const movieReducer = (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    case GET_SELECTED_MOVIE:
      return action.payload.data;
    default:
      return movies;
  }
};

const rootReducer = combineReducers({
  movies: movieReducer
});

export default rootReducer;