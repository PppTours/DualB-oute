import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/core/header/header.component';
import { PocComponent } from '../../poc/poc.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent, PocComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
