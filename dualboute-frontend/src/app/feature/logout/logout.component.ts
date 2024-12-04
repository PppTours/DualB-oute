import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'app-logout',
  imports: [
    MatButton
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logOut().then(() => {
      console.log('Logged out.');
    }).catch((error) => {
      console.error(error);
    });

  }
}
