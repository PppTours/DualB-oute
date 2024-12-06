import { Routes } from '@angular/router';
import {HOME} from '@angular/cdk/keycodes';
import {HomeComponent} from './feature/home/home.component';
import { BadComponent } from './bad/bad.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: {routeName: 'home'}},
  { path: 'bad', component: BadComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
