import { ActionTypes } from "../contants/action-types";

const initialState = {
  movies: [],
  favorites: [],
  selectedMovie: []
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_MOVIES_LIST:
      return { ...state, movies: payload };
    case ActionTypes.SELECTED_MOVIE:
      return { ...state, selectedMovie: payload };
    case ActionTypes.ADD_TO_FAVORITE:
      return { ...state, favorites: payload };
    case ActionTypes.REMOVE_FROM_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(item => item !== payload)
      };
    }

    default:
      return state;
  }
};
