import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';
import { getFromLocalStorage, LocalStorageKeys } from '../app/storage';

const initialState = {
    identity: getFromLocalStorage(LocalStorageKeys.currentIdentity),
    isLoading: false,
    error: null
};


export const loginReducer = createReducer(initialState, (builder) => {
	builder
        .addCase(actions.fetchIdentity, (state, action) => {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        })
		.addCase(actions.fetchIdentitySucceeded, (state, action) => {
			return {
                ...state,
                identity: action.payload,
                isLoading: false,
                error: null
            };
		})
		.addCase(actions.fetchIdentityFailed, (state, action) => {
			return {
                ...state,
                identity: null,
                isLoading: false,
                error: action.payload as any
            };
		});
});
