import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AnotherDialogComponent } from './another-dialog/another-dialog.component';
import { AppComponent } from './app.component';
import { SomeDialogComponent } from './some-dialog/some-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeDialogComponent,
    AnotherDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
