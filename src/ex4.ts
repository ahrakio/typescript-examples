// Before
const func = (): [number, number] => {
	return [1, 2];
};

// After
const func2 = (): [length: number, count: number] => {
	return [1, 2];
};

const f1 = (param: [...Array<number>, ...Array<string>]) => {
	return param[0];
};

type C<T extends Array<any>, E extends Array<any>> = [...T, ...E];

class Square {
	// Previously: implicit any!
	// Now: inferred to `number`!
	area;
	sideLength;

	constructor(sideLength: number) {
		this.sideLength = sideLength;
		this.area = sideLength ** 2;
	}
}

// Deprecated APIs
// const x :ApplicationCache;
// x.on

// (values ??= []).push()...
// (values || []).push()

type X = {
	a: string;
	b: boolean;
	c: number;
};
