import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadphoneListComponent } from './components/headphone-list/headphone-list.component';
import { HeadphoneFormComponent } from './components/headphone-form/headphone-form.component';
import { NewHeadphoneBtnComponent } from './components/new-headphone-btn/new-headphone-btn.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadphoneListComponent,
    HeadphoneFormComponent,
    NewHeadphoneBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
