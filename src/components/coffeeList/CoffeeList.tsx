import { Spin, Table } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';
import { ColumnsType } from 'antd/lib/table';
import { getCoffee } from '../../selectors/coffee.selectors';

export const CoffeeList = () => {
	const containers = useSelector(getCoffee);

    const columns: ColumnsType<any> = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Blend',
            dataIndex: 'blend_name',
        },
        {
            title: 'Origin',
            dataIndex: 'origin'
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
        }
    ];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchCoffee());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Spin tip="Loading..." spinning={containers.isLoading}>
				<Table
					columns={columns}
					dataSource={containers.items}
					tableLayout="fixed"
				/>
			</Spin>
		</>
	);
};
