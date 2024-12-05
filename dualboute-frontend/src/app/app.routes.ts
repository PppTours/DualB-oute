import { Routes } from '@angular/router';
import {HOME} from '@angular/cdk/keycodes';
import {HomeComponent} from './feature/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: {routeName: 'home'}},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
