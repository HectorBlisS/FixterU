import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
//import {initialState} from "./initialState";
import {rootReducer} from "../reducers/rootReducer";
import {initSaga} from "../sagas/initSaga";

const sagaMiddleware = createSagaMiddleware();

export function configureStore(){
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, sagaMiddleware)
    );
    sagaMiddleware.run(initSaga);
    store.dispatch({type:"LOAD_COURSES"});
    return store;
}