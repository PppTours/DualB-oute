import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/core/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
