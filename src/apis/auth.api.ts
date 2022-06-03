import axios, { AxiosError } from 'axios';
import { dispatch, EventType } from '../helpers/EventBus';

export interface AuthResponse {
	access_token: string;
    error?: string;
}

export const auth = async (username: string, password: string) => {
	const response = await axios
		.post(`${process.env.REACT_APP_API_BASE_URL}/auth`, {
			username,
			password,
		})
		.catch((error: AxiosError) => {
			if (error.response && error.response.status === 401) {
				dispatch(
					EventType.ShowErrorMessage,
					error.response.data.description
				);
                return {
                    data: null,
                    error: error.response.data.description
                };
				// console.log(error.response.data.description);
			} else if (error.request) {
				// The request was made but no response was received
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
		});


	return response && response.data ? response.data as AuthResponse : response;
};
