import { all } from "redux-saga/effects";
import { watchFetchCoffee } from "./coffee.sagas";
import { watchFetchIdentity, watchFetchIdentityFailed, watchFetchIdentitySucceeded } from "./identity.sagas";
import { watchFetchUserInfo } from "./userInfo.sagas";

export default function* rootSaga() {
    yield all([
        watchFetchIdentity(),
        watchFetchIdentitySucceeded(),
        watchFetchIdentityFailed(),
        watchFetchCoffee(),
        watchFetchUserInfo()
    ]);
}