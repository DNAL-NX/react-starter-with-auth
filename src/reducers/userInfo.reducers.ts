import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';
import { User } from '../models/identity.model';

const initialState = {
	userInfo: {
		id: null,
		uid: null,
		first_name: null,
		last_name: null,
		email: null,
		avatar: null,
		username: null,
		phone_number: null,
	} as User,
	isLoading: false,
	error: null,
};

export const userInfoReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(actions.fetchUserInfo, (state, action) => {
			return {
				...state,
				isLoading: true,
				error: null,
			};
		})
		.addCase(actions.fetchUserInfoSucceeded, (state, action) => {
			return {
				...state,
				userInfo: action.payload,
				isLoading: false,
				error: null,
			};
		})
		.addCase(actions.fetchUserInfoFailed, (state, action) => {
			return {
				...state,
				userInfo: {
					id: null,
					uid: null,
					first_name: null,
					last_name: null,
					email: null,
					avatar: null,
					username: null,
					phone_number: null,
				},
				isLoading: false,
				error: action.payload as any,
			};
		});
});
