import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUser = {
    email: 'nicolasg@test.com',
    password: '987654',
  };
  
  private isLoggedIn = false; 

  login(email: string, password: string): boolean {
    if (email === this.validUser.email && password === this.validUser.password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
