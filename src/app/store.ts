import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { loginReducer } from '../reducers/identity.reducers';
import { userInfoReducer } from '../reducers/userInfo.reducers';
import { coffeeReducer } from '../reducers/coffee.reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
        identity: loginReducer,
        userInfo: userInfoReducer,
        coffee: coffeeReducer
    },
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
