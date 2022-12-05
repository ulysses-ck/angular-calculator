import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-input-key',
	templateUrl: './input-key.component.html',
	styleUrls: ['./input-key.component.css'],
})
export class InputKeyComponent {
	@Input() key: string = '';
	@Input() isPressed: boolean = false;
}
