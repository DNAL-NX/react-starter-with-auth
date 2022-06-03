import { Moment } from 'moment';
import { Coffee } from '../models/coffee.model';
import {
    axiosInstance,
} from './interceptors';

export const fetchDemurrages = async (dateRange: Moment[]) => {
	const response = await axiosInstance.get(
		`${
			process.env.REACT_APP_API_BASE_URL
		}/api/coffee`
	);

	if (
		response &&
		response.status === 200 &&
		response.data
	) {
		const mappedList = response.data.map(
			(coffee: Coffee) => {
				return {
					...coffee,
					key: coffee.uid,
				};
			}
		);
		return mappedList;
	}

	return [] as Array<Coffee>;
};
