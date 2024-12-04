// src/app/shared/auth/auth.service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { LoginData, LoginResponse, User } from '../models/user.model';
import { EventEmitter } from '@angular/core';

/**
 * AuthService handles authentication-related operations such as login, logout, and token verification.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8000/';
  private loginUrl = `${this.baseUrl}api/auth/token/login/`;
  private logOutUrl = `${this.baseUrl}api/auth/logout/`;
  private userMeUrl = `${this.baseUrl}api/auth/users/me/`;

  private http = inject(HttpClient);
  private router = inject(Router);

  public userProfile: User | null = null;

  public userLoggedIn = new EventEmitter<void>();

  /**
   * Logs in the user with the provided login data.
   * @param userLoginData - The login data containing username and password.
   * @returns A promise that resolves to the authentication token.
   * @throws An error message if login fails.
   */
  async login(userLoginData: LoginData): Promise<string> {
    try {
      const response = await firstValueFrom(this.http.post<LoginResponse>(this.loginUrl, userLoginData));
      localStorage.setItem('Token', response.auth_token);
      await this.fetchUserProfile();
      this.userLoggedIn.emit();
      return response.auth_token;
    } catch (error) {
      console.error('Login error:', error);
      throw 'An error occurred during login. Please try again.';
    }
  }

  /**
   * Logs out the current user.
   * @returns A promise that resolves when the user is logged out.
   * @throws An error message if logout fails.
   */
  async logOut(): Promise<void> {
    try {
      await firstValueFrom(this.http.post(this.logOutUrl, {}));
      localStorage.removeItem('Token');
      await this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
      throw 'An error occurred during logout. Please try again.';
    }
  }

  /**
   * Verifies the current authentication token.
   * @returns A promise that resolves to a boolean indicating whether the token is valid.
   */
  async verifyToken(): Promise<boolean> {
    try {
      const response = await firstValueFrom(this.http.get<User>(this.userMeUrl));
      if (response.id) {
        return true;
      }
      localStorage.removeItem('Token');
      return false;
    } catch (error: unknown) {
      console.error('Token verification error:', error);
      localStorage.removeItem('Token');
      return false;
    }
  }

  /**
   * Fetches the user profile of the currently logged-in user.
   * @private
   */
  private async fetchUserProfile(): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.get<User>(this.userMeUrl));
      this.userProfile = new User(response.id, response.email, response.first_name, response.last_name);
      console.log('User profile:', this.userProfile);
    } catch (error) {
      console.error('Fetch user profile error:', error);
    }
  }
}
