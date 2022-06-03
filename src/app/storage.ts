
export enum LocalStorageKeys {
    currentIdentity = 'currentIdentity'
}

export const saveToLocalStorage = (storageKey: string, storageValue: any) => {
    console.log('saveToLocalStorage: ', storageKey, storageValue);

    if (storageValue === null) {
        localStorage.removeItem(storageKey);
    } else {
        localStorage.setItem(storageKey, JSON.stringify(storageValue));
    }
}

export const getFromLocalStorage = (storageKey: string) => {
    const storageValue = localStorage.getItem(storageKey);
		if (storageValue) {
			return JSON.parse(storageValue);
		}
		return null;
}