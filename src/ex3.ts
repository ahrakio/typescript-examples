type MyProps = {
	a: { hi: "hello" };
	b: string;
	d: Date;
	e: number;
	h: "Bye";
};

const ReactComponent = (props: MyProps) => {};

let x = 5;

type GetPropsType<T> = T extends (props: infer P) => any ? P : never;

type GetReturnType<T> = T extends (props: any) => infer P ? P : never;

const myFunc = () => {
	return 5;
};

type ReturnVal = GetReturnType<typeof myFunc>;

type Props = GetPropsType<typeof ReactComponent>;

const array = new Array<{ hi: string; z: string; a: boolean }>();

type InferArrayType<T> = T extends Array<infer P> ? P : never;

type G = InferArrayType<typeof array>;

type MyArray = Array<Array<Array<Array<number>>>>;

type InferGenericArray<T> = {
	0: T;
	1: T extends Array<infer U> ? InferGenericArray<U> : never;
}[T extends Array<any> ? 1 : 0];

type Result = InferGenericArray<MyArray>;
