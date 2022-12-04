import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
