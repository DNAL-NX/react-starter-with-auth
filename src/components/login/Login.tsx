import { Form, Input, Button, Checkbox } from 'antd';
import * as actions from '../../actions';
import './Login.scss';
import { useAppDispatch } from '../../app/hooks';

export const Login = () => {
    const dispatch = useAppDispatch();

	const onFinish = async (values: any) => {
		if (values.username && values.password) {
            dispatch(actions.fetchIdentity({
                username: values.username,
                password: values.password
            }));
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name="login"
			className="login"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[
					{ required: true, message: 'Please input your username!' },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[
					{ required: true, message: 'Please input your password!' },
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
