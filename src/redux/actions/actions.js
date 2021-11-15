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