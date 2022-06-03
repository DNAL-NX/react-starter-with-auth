import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout } from 'antd';
import { useEffect } from 'react';
import { CoffeeList } from '../coffeeList/CoffeeList';
import './Layout.scss';
import { SettingsMenu } from '../settingsMenu/SettingsMenu';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../../selectors/userInfo.selectors';
import * as actions from '../../actions';
const { Header, Content } = Layout;

export const MainLayout = () => {
	const currentUser = useSelector(userInfo);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchUserInfo());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderUserName = () => {
		return currentUser &&
			currentUser.userInfo &&
			currentUser.userInfo.username
			? currentUser.userInfo.username
			: '';
	};

	return (
		<Layout style={{ minHeight: '100vh', width: 'auto' }}>
			<Header className="header">
				<div className="logo">
				</div>
				<div className="settings-button">
					<Dropdown overlay={<SettingsMenu />}>
						<Button type="primary">
							<UserOutlined />
							{renderUserName()}
							<DownOutlined />
						</Button>
					</Dropdown>
				</div>
			</Header>

			<Layout className="site-layout">
				<Content style={{ padding: '20px 25px' }}>
					<CoffeeList></CoffeeList>
				</Content>
			</Layout>
		</Layout>
	);
};
