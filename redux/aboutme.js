import * as ActionTypes from './ActionTypes';

export const aboutme = (state ={isLoading: true, errMess: null, aboutme: []}, action) => {
    switch(action.type) {
        case ActionTypes.ABOUT_LOADING:
            return {...state, isLoading: true, errMess: null, aboutme: []};
        case ActionTypes.ABOUT_FAILED:
            return {...state, isLoading: false, errMess: action.payload, aboutme: []};
        case ActionTypes.ADD_ABOUT:
            return {...state, isLoading: false, errMess: null, aboutme: action.payload};
        default:
            return state;
    }
}