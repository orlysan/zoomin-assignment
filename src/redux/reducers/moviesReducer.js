 import { ActionTypes } from '../contants/action-types';
 
 const initialState = {
    movies:[]
 }
 
 export const moviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_MOVIES_LIST:
           return {...state, movies:payload};

        default:
            return state;
    }
 }

 