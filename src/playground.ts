// type Item = number[] | Item[];

// let a = [[[5, 4], [5, 4, 10, 15], []]] as Item;
const flatten = <T extends {}, K extends keyof T>(arr: T[], key: K) => {
	return arr.map(({ [key]: z }) => z);
};

const employees = [
	{
		firstName: "Uriah",
		lastName: "Ahrak",
		age: 18,
		tags: ["Hey", "Hello", "MyName"],
	},
	{
		firstName: "Uriah",
		lastName: "Ahrak",
		age: 18,
		tags: ["Hey", "Hello", "MyName"],
	},
	{
		firstName: "Uriah",
		lastName: "Ahrak",
		age: 18,
		tags: ["Hey", "Hello", "MyName"],
	},
];

const newEmployees = flatten(employees, "tags");

console.log(newEmployees);
