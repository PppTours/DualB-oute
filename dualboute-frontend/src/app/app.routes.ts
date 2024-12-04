import { Routes } from '@angular/router';
import {LoginComponent} from './feature/login/login.component';
import {needLoginGuard, needLogOutGuard} from './shared/auth/auth.guard';
import {LogoutComponent} from './feature/logout/logout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {routeName: 'login'}, canActivate: [needLogOutGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [needLoginGuard], data: {routeName: 'logout'} },
  { path: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
