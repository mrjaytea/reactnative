import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {aboutme} from './aboutme';
import {qualifications} from './qualifications';
import {skills} from './skills';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            aboutme: aboutme,
            qualifications: qualifications,
            skills: skills
        }),
        applyMiddleware(thunk)
    );
    return store;
}