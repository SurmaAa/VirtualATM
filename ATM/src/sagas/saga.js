import { all, fork, call, put, takeLatest, takeEvery, delay } from 'redux-saga/effects';
import { CHANGE_VIEW_REQUEST, CHANGE_VIEW } from '../actions/actionNames';
import { changeView } from '../actions/actions';

function* dispatchChangeView(action) {
    yield put(changeView(action.view));
}

/*Observers*/
function* observeChangeViewRequest() {
    yield takeEvery(CHANGE_VIEW_REQUEST, dispatchChangeView);
}

export function* RootSaga() {
    yield all([
        fork(observeChangeViewRequest),
    ]);
};