import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { CrudComponent } from './crud/crud.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { VerdatosComponent } from './verdatos/verdatos.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrerComponent,
    CrudComponent,
    VerdatosComponent,
    EditarperfilComponent,

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
