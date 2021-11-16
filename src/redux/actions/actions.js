import { ActionTypes } from '../contants/action-types'

export const getMoviesList = (movies) => {
    return {
        type: ActionTypes.GET_MOVIES_LIST,
        payload: movies,
    }
}

export const addToFavorite = (favorite) => {
    return {
        type: ActionTypes.ADD_TO_FAVORITE,
        payload: favorite,
    }
}

export const setFavoriteMovie = (selected) => {
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: selected,
    }
}

export const removeFromFavorite = (removeFav) => {
    return {
        type: ActionTypes.REMOVE_FROM_FAVORITE,
        payload: removeFav,
    }
}