import {takeLatest, put} from 'redux-saga/effects';
import * as firebaseMethods from '../firebase';

function* loadCourses(){
    const courses = yield firebaseMethods.loadCourses();
    console.log(courses);
    yield put({type:"LOAD_COURSES_SUCCESS", courses});
}

export function* initSaga(){
    yield takeLatest("LOAD_COURSES", loadCourses);
}