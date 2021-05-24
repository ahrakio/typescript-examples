/**
 * 1. Type assertions
 * 2. keyof | literal types
 * 3. Utility Types (Pick)
 * 4. "Assignable to"
 * 5. never, any, unknown
 */

type Employee = {
	firstName: string;
	lastName: string;
	age: number;
	rating: number;
	hourlyWage: number;
};

type A = Pick<Employee, "firstName" | "lastName">;

type Keys = keyof Employee;

export const pluck = <T extends {}, K extends keyof T>(arr: T[], keys: K[]) => {
	return arr.map((obj) =>
		keys.reduce(
			(carry, item) => ({ ...carry, [item]: obj[item] }),
			{} as Pick<T, K>
		)
	);
};

/**
 * 1. Typo
 * 2. Return type is unknown
 */

const employees = [
	{
		firstName: "Uriah",
		lastName: "Ahrak",
		age: 25,
		rating: 33,
		hourlyWage: 55.5,
	},
	{
		firstName: "Ido",
		lastName: "Malka",
		age: 29,
		rating: 33,
		hourlyWage: 55.5,
	},
	{
		firstName: "Yuval",
		lastName: "Weinbaum",
		age: 33,
		rating: 33,
		hourlyWage: 55.5,
	},
];

const result = pluck(employees, ["lastName", "age", "firstName"]);

console.log(result);
