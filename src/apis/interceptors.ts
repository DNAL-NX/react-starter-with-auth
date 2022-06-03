import axios, { AxiosError } from "axios";
import { LocalStorageKeys } from "../app/storage";
import { dispatch, EventType } from "../helpers/EventBus";
import { Identity } from "../models/identity.model";
import * as actions from '../actions';
import { store } from "../app/store";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
	(request) => {
		// attach access token
		const identityStr = localStorage.getItem(
			LocalStorageKeys.currentIdentity
		);
		if (identityStr) {
			const identity = JSON.parse(identityStr) as Identity;
			request.headers = {
				...request.headers,
				Authorization: 'JWT ' + identity.token,
			};
		}
		return request;
	},
	(error) => {
        Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);

        // console.log('dispatch event');

        dispatch(EventType.Logout);
        dispatch(
            EventType.ShowWarningMessage,
            'Token expired! Please login again.'
        );

        // Trigger an fetchIdentityFailed action to direct the user to login page
        store.dispatch(actions.fetchIdentityFailed(null));
    } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        Promise.reject(error);
    }
});