import {combineReducers} from 'redux';
import {coursesReducer} from './coursesReducer';

export const rootReducer = combineReducers({
    ofertaAcademica: coursesReducer
});