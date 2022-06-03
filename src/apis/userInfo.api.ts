import { User } from '../models/identity.model';
import { axiosInstance } from './interceptors';

export const fetchUserInfoAPI = async () => {
	try {
		const response = await axiosInstance.get(`/protected`);

		if (response && response.status === 200) {
			return response.data as User;
		}
        return response;
	} catch (error) {
        throw error;
    }
};
