import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
        <li><a routerLink="/signin">Signin</a></li>
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
        <li><a routerLink="/signin">Signin</a></li>
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
export class AppComponent{}
