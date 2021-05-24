export const removeNullKeys = <T extends { [key: string]: any }>(obj: T) => {
	return Object.keys(obj)
		.filter((key) => obj[key] !== null)
		.reduce((carry, item) => ({ ...carry, [item]: obj[item] }), {});
};

type A = Omit<Employee, "age" | "job" | "hi" | "b">;

// OmitType<Employee, null>
type Person = {
	[key: string]: string;
};

type Employee = {
	firstName: string;
	a: number;
	lastName: string;
	age: null;
	job: null;
	hi: null;
	b: null;
	tal: null;
};

type D = Omit<Employee, KeysByType<Employee, null>>;

type KeysByType<Object, Type> = {
	[P in keyof Object]: Object[P] extends Type ? P : never;
}[keyof Object];

type EmployeeNullKeys = KeysByType<Employee, null>;

type C = Employee["firstName" | "a"];

let a = {
	firstName: "hi",
	lastName: "Hello",
	age: null,
	job: null,
	hi: null,
};

const res = removeNullKeys(a);

console.log(a);
console.log(res);
