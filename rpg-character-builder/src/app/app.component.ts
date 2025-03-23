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
        <li><a href="#">Home</a></li>
        <li><a href="#">Characters</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Races</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Characters</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Races</a></li>
        <li><a href="#">About</a></li>
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
