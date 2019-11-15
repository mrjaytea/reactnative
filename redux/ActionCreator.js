import * as ActionTypes from './ActionTypes';
import baseUrl from '../shared/baseUrl';

// About Me ============================================
export const fetchAboutMe = () => (dispatch) => {
    dispatch(aboutMeLoading);
    return fetch(baseUrl + 'about')
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw(error);
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw(errMess);
        })
        .then(response => response.json())
        .then(aboutme => dispatch(addAboutMe(aboutme)))
        .catch(error => dispatch(aboutMeFailed(error.message)))
}

export const aboutMeLoading = () => ({
    type: ActionTypes.ABOUT_LOADING
})

export const addAboutMe = (aboutme) => ({
    type: ActionTypes.ADD_ABOUT,
    payload: aboutme
})

export const aboutMeFailed = (errmess) => ({
    type: ActionTypes.ABOUT_FAILED,
    payload: errmess
})

// Qualifications===========================================
export const fetchQualifications = () => (dispatch) => {
    dispatch(qualificationsLoading);
    return fetch(baseUrl + 'qualifications')
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw(error);
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw(errMess);
        })
        .then(response => response.json())
        .then(qualifications => dispatch(addQualifications(qualifications)))
        .catch(error => dispatch(qualificationsFailed(error.message)))
}

export const qualificationsLoading = () => ({
    type: ActionTypes.QUALIFICATIONS_LOADING
})

export const addQualifications = (qualifications) => ({
    type: ActionTypes.ADD_QUALIFICATIONS,
    payload: qualifications
})

export const qualificationsFailed = (errmess) => ({
    type: ActionTypes.QUALIFICATIONS_FAILED,
    payload: errmess
})

// Skills
export const fetchSkills = () => (dispatch) => {
    dispatch(skillsLoading);
    return fetch(baseUrl + 'skills')
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw(error);
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw(errMess);
        })
        .then(response => response.json())
        .then(skills => dispatch(addSkills(skills)))
        .catch(error => dispatch(skillsFailed(error.message)))
}

export const skillsLoading = () => ({
    type: ActionTypes.SKILLS_LOADING
})

export const addSkills = (skills) => ({
    type: ActionTypes.ADD_SKILLS,
    payload: skills
})

export const skillsFailed = (errmess) => ({
    type: ActionTypes.SKILLS_FAILED,
    payload: errmess
})