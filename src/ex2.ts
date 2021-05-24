const to = <T>(promise: Promise<T>) => {
	return promise
		.then((value) => [null, value] as const)
		.catch((err: Error) => [err, null] as const);
};

const getValue = (): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("my val");
		}, 5000);
	});
};

const result = (async () => {
	const [err, data] = await to(getValue());

	console.log(err, data);
})();
