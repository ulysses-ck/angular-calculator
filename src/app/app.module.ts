import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { AutoFocus } from './auto-focus.directive';
import { InputKeyComponent } from './components/input-key/input-key.component';

@NgModule({
	declarations: [AppComponent, InputKeyComponent, AutoFocus],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
