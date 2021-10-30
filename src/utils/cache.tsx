export const SetMap = (key: string, val: any) => {
	const data = JSON.stringify(val)
	localStorage.setItem(key, data);
}

export const GetMap = (key: string): any => {
	const result = localStorage.getItem(key);
	if ([null, undefined, ""].includes(result)) {
		return {};
	}

	if (typeof result === "string") {
		return JSON.parse(result)
	}
	return {};
}


export const SetCache = (key: string, val: any) => {
	localStorage.setItem(key, val);
}

export const GetCache = (key: string): any => {
	return localStorage.getItem(key);
}


