export const isOperator = (str: string): boolean => {
	return /[+\-\*\/]/gi.test(str);
};

export const isNumber = (str: string): boolean => {
	return /[0-9]/gi.test(str);
};

export const toOperation = (str: string): Function | undefined => {
	switch (str) {
		case '+':
			return sum;
		case '-':
			return substraction;
		case '/':
			return division;
		case '*':
			return multiply;
		default:
			return undefined;
	}
};

export const sum = (numOne: number, numTwo: number): number => numOne + numTwo;
export const substraction = (numOne: number, numTwo: number): number =>
	numOne - numTwo;
export const division = (numOne: number, numTwo: number) => numOne / numTwo;
export const multiply = (numOne: number, numTwo: number) => numOne * numTwo;
