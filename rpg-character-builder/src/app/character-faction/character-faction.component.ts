import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div>
      <h1>Character Factions</h1>

      @if (factions !== null && factions.length > 0) {
        <div class="faction-container">
          @for (faction of factions; track faction) {
            <div class="faction-card">
              <h2>{{ faction.name }}</h2>
              <p>{{ faction.description }}</p>
            </div>
          }
        </div>
      } @else {
        <p class="error-message">{{ errorMessage }}</p>
      }
    </div>
  `,
  styles: [`
    .faction-container {
      display: flex;
      flex-wrap: wrap;
      padding: 2rem 5rem;
      justify-content: center;
      gap: 1rem;
    }

    h1 {
      font-family: 'MedievalSharp', cursive;
      font-size: 2.5rem;
      color: #f1c40f;
      text-align: center;
      margin-top: 1.5rem;
    }

    ul li {
      list-style-type: none;
      color: #fff;
    }

    .error-message {
      color: red;
      font-weight: bold;
      margin-top: 1rem 0;
    }

    .faction-card {
      flex: 0 1 calc(28.33% - 20px);
      background-color: #0f3460;
      padding: 1rem;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
      text-align: left;
      min-height: 250px;
      margin: auto;
      margin-bottom: 25px;
    }

    .faction-card h2 {
      font-family: 'MedievalSharp', cursive;
      font-size: 1.8rem;
      color: #f1c40f;
      margin-bottom: 1rem;
      text-align: center;
    }

    .faction-card p {
      font-family: 'Roboto', sans-serif;
      margin: 5px 15px;
      font-size: 1.2rem;
    }
    `]
})
export class CharacterFactionComponent implements OnInit {
  factions: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`http://localhost:3000/api/character-factions`).subscribe({
      next: (res) => {
        console.log('API response', res);
        this.factions = res;
      },
      error: (err) => {
        console.error('Error fetching factions', err);
        if(err.error === 'Factions not found') {
          this.errorMessage = 'No available factions. Check back later.';
        } else {
          this.errorMessage = 'Error fetching factions. Please try again later.'
        }
      }
    });
  }
}
