import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];