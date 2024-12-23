import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HeaderComponent} from './shared/core/header/header.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dualboute-frontend';
}
