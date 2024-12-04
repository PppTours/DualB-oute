import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {AuthService} from '../../shared/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errors: any;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).then(() => {
        this.router.navigate(['']).then(r => console.log('Navigated to main page.'));
      }).catch((error) => {
        this.errors = error;
      });
    }
  }
}
