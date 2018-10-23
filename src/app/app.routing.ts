import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';


const appRoutes: Routes = [
     { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
console.log("appRoutes", appRoutes)

export const Routing = RouterModule.forRoot(appRoutes);

console.log("Routing", Routing)