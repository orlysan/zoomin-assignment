 import { ActionTypes } from '../contants/action-types';
 
 const initialState = {
    movies:[],
    favorites:[]
 }
 
 export const moviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_MOVIES_LIST:
           return {...state, movies:payload};
         case ActionTypes.ADD_TO_FAVORITE:
            return {}

        default:
            return state;
    }
 }

 