import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { MaterialModule } from './material/material.module';
import { NotesEffect } from './notes/store/effect/notes.effect';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { appReducer } from './notes/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    EffectsModule.forRoot([NotesEffect])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
