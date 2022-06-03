
import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchUserInfoAPI } from '../apis/userInfo.api';
import { User } from '../models/identity.model';

export function* watchFetchUserInfo() {
    yield takeLatest(actions.fetchUserInfo, fetchUserInfoSaga);
}

function* fetchUserInfoSaga(): Generator {
    try {
        const userInfo = yield call(fetchUserInfoAPI);

        yield put(actions.fetchUserInfoSucceeded(userInfo as User));
    }
    catch(error: any) {
        console.log('error thrown in fetchUserInfoSaga: ', error);
    }
}