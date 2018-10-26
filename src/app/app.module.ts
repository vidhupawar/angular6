import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { HttpClientModule ,HttpHeaders } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { Routing } from './app-routing.module';
import { AppConfig } from './app.config';
import { AppService } from './service/app.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports:[
     //base functionality to start app
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    HttpClientModule
  ],
  providers: [
    AppService,
    AppConfig
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
export const AppLayoutRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];