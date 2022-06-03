import { auth } from '../apis/auth.api';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { instanceOf } from '../helpers/instanceOf';
import { Identity } from '../models/identity.model';
import { LocalStorageKeys, saveToLocalStorage } from '../app/storage';

export function* watchFetchIdentity() {
	yield takeLatest(actions.fetchIdentity, fetchIdentitySaga);
}

export function* watchFetchIdentitySucceeded() {
	yield takeEvery(actions.fetchIdentitySucceeded, fetchIdentitySucceededSaga);
}

export function* watchFetchIdentityFailed() {
	yield takeEvery(actions.fetchIdentityFailed, fetchIdentityFailedSaga);
}

function* fetchIdentitySaga(action: any): Generator {
	try {
		const response = yield call(
			auth,
			action.payload.username,
			action.payload.password
		);

		if (response && instanceOf(response, 'access_token')) {
			const identity: Identity = {
				token: (response as any).access_token,
			};
			yield put(actions.fetchIdentitySucceeded(identity));
		} else {
			const errorMsg = (response as any).error;
			yield put(actions.fetchIdentityFailed(errorMsg));
		}
	} catch (error: any) {
		const errorMsg = error.description;
		yield put(actions.fetchIdentityFailed(errorMsg));
	}
}

function* fetchIdentitySucceededSaga(action: any): Generator {
	yield call(
		saveToLocalStorage,
		LocalStorageKeys.currentIdentity,
		action.payload
	);

	yield put(actions.fetchUserInfo());
}

function* fetchIdentityFailedSaga(action: any) {
	yield call(saveToLocalStorage, LocalStorageKeys.currentIdentity, null);
}
