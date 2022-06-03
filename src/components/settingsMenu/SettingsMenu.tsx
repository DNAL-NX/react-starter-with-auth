import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useDispatch } from 'react-redux';
import * as actions from '../../actions';

export const SettingsMenu = () => {
    const dispatch = useDispatch();

    const logout = () => {
		dispatch(actions.fetchIdentityFailed(null));
	};

	return (
		<Menu>
			<Menu.Item key="settings" icon={<SettingOutlined />}>
				Settings
			</Menu.Item>
			<Menu.Item
				danger
				key="logout"
				icon={<LogoutOutlined />}
				onClick={logout}
			>
				Log out
			</Menu.Item>
		</Menu>
	);
};