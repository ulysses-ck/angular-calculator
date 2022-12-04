import { Component } from '@angular/core';

import { isNumber, isOperator, toOperation } from './utilities/Functions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	result: number = 0;

	analizeInput(event: any) {
		if (event.key === '=') {
			event.preventDefault();
			this.result = this.getTotalResult(
				this.getNumbers(event.target.value)
			);
		}
	}

	/** user enter i.e. an 18+19 in string */
	/** this function differences numbers from signs and do the operation */
	getNumbers(inputUser: string) {
		let arrCharactersSeparated: string[] = [];

		/** temporary variable where should be stored a value like numberOne */
		let tempString: string = '';

		inputUser.split('').map((character, index) => {
			/** if index is the last and there is a value in tempString */
			/** this tempString value should be added to arrchars[] */
			/** after last character was addded to arrChars[] */
			if (inputUser.length - 1 === index) {
				tempString += character;
				arrCharactersSeparated.push(tempString);
			} else if (isOperator(character)) {
				/** when is an operator, tempString that holds the last number */
				/** is pushed to the arrChar[] and also push the operator */
				arrCharactersSeparated.push(tempString);
				arrCharactersSeparated.push(character);
				tempString = '';
			} else if (isNumber(character)) {
				tempString += character;
			}
		});

		return arrCharactersSeparated;
	}

	/** like eval() function, without xss */
	getTotalResult(arrChars: string[]) {
		let result = 0;
		let operator: Function | undefined;
		arrChars.forEach((element, index) => {
			if (
				index === arrChars.length - 1 ||
				(result && isNumber(element))
			) {
				result = operator!(result, Number(element));
			} else if (isOperator(element)) {
				/** return a function proper to string */
				/** i.e. "+"" is sum() and so on */
				operator = toOperation(element);
			} else if (isNumber(element)) {
				result = Number(element);
			}
		});

		return result;
	}
}
