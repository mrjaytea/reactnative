import * as ActionTypes from './ActionTypes';

export const qualifications = (state ={isLoading: true, errMess: null, qualifications: []}, action) => {
    switch(action.type) {
        case ActionTypes.QUALIFICATIONS_LOADING:
            return {...state, isLoading: true, errMess: null, qualifications: []};
        case ActionTypes.ADD_QUALIFICATIONS:
            return {...state, isLoading: false, errMess: null, qualifications: action.payload};
        case ActionTypes.QUALIFICATIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, qualifications: []};
        default:
            return state;
    }
}