import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({ 
  selector: 'app-root',  standalone: true, 
  imports: [RouterOutlet, RouterLink],  template: ` 
  <div class="app-container">
    <header>
    <h1>RPG Character Builder</h1>
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/create-character">Create Character</a></li>
        <li><a routerLink="/character-faction">Character Faction</a></li>
        <li><a routerLink="/create-guild">Create Guild</a></li>
        <li><a routerLink="/players">Players</a></li>
        <li>
        <div class="sign-in-container">
        @if (email) {
        <div class="signin-greeting-header">
          <p>Welcome, {{ email }}!</p>
          <button (click)="signout()">Sign Out</button>
        </div>
        } @else {
        <a routerLink="./signin" class="sign-in-link">Sign In </a>
        }
      </div>
      </li>
      </ul>
    </nav>

    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/create-character">Create Character</a></li>
        <li><a routerLink="/character-faction">Character Faction</a></li>
        <li><a routerLink="/create-guild">Create Guild</a></li>
        <li><a routerLink="/players">Players</a></li>
        <li>
        <div class="sign-in-container">
        @if (email) {
        <div class="signin-greeting-footer">
          <p>Welcome, {{ email }}!</p>
          <button (click)="signout()">Sign Out</button>
        </div>
        } @else {
        <a routerLink="./signin" class="sign-in-link">Sign In </a>
        }
      </div>
        </li>
      </ul>
    </nav>
    <p>&copy; 2025 RPG Character Builder</p>
    <p>All Rights Reserved</p>
    </footer>
  </div>
  `, styles:[
  `
  
  `
  ]
})
export class AppComponent{
  email?:string;
  constructor(private authService:AuthService, private cookieService:CookieService) {
  }

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if(isAuth) {
        this.email=this.cookieService.get('session_user');
      }
    });
  }

  signout() {
    this.authService.signout();
    this.email=undefined;
  }
}
