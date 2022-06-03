export enum EventType {
    Logout = 'logout',
    ShowErrorMessage = 'showErrorMessage',
    ShowWarningMessage = 'showWarningMessage'
}

export const on = (event: EventType, listener: any) => {
    console.log('addEventListener: ', event);

	return document.addEventListener(event, (e: any) => listener(e.detail));
};

export const dispatch = (event: EventType, data: any = null) => {
    console.log('dispatch event: ', event, data);

	document.dispatchEvent(new CustomEvent(event, { detail: data }));
};

export const remove = (event: EventType, eventListener: any) => {
    console.log('remove listener: ', event);

	document.removeEventListener(event, eventListener);
};