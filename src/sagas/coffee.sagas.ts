import { call, put, takeLatest } from 'redux-saga/effects';
import * as apis from '../apis';
import * as actions from '../actions';
import { Coffee } from '../models/coffee.model';

export function* watchFetchCoffee() {
    yield takeLatest(actions.fetchCoffee, fetchCoffeeSaga);
}

function* fetchCoffeeSaga(action: any): Generator {
	try {
		const response = yield call(apis.fetchDemurrages, action.payload);

		yield put(actions.fetchCoffeeSucceeded(response as Coffee[]));
	} catch (error: any) {
		yield put(actions.fetchCoffeeFailed(error.message));
	}
}
