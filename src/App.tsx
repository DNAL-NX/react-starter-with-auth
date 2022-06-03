import 'antd/dist/antd.css';
import './App.css';
import { Login } from './components/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/Layout';
import { EventType, on, remove } from './helpers/EventBus';
import { useEffect } from 'react';
import { Alert, message, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { identity } from './selectors/identity.selectors';

function App() {
	const currentIdentity = useSelector(identity);

	const showErrorMessage = (messageStr: string, duration: number = 5) => {
		message.error(messageStr, duration);
	};

	const showWarningMessage = (messageStr: string, duration: number = 5) => {
		message.warning(messageStr, duration);
	};

	message.config({
		maxCount: 1,
	});

	useEffect(() => {
		const errorMessageEventListener = on(
			EventType.ShowErrorMessage,
			showErrorMessage
		);
		const warningMessageEventListener = on(
			EventType.ShowWarningMessage,
			showWarningMessage
		);

		// FIXME:
		// const logoutEventListener = on(EventType.Logout, logout);

		return () => {
			remove(EventType.ShowErrorMessage, errorMessageEventListener);
			remove(EventType.ShowErrorMessage, warningMessageEventListener);
			// FIXME:
			// remove(EventType.Logout, logoutEventListener);
		};
	});

	if (!currentIdentity.identity) {
		return (
			<Spin tip="Loading..." spinning={currentIdentity.isLoading}>
				<Login />
			</Spin>
		);
	}

    if (currentIdentity.error) {
        <Alert
            message="Error"
            description={currentIdentity.error}
            type="error"
            showIcon
        />
    }

	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<MainLayout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
