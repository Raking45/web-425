import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="guilds.length > 0" class="guild-list">
        <h2>Created Guilds</h2>
        <div class="guild-cards">
          <div *ngFor="let guild of guilds" class="guild-card">
            <h3>{{guild.guildName}}</h3>
            <p>{{guild.description}}</p>
            <ul class="stats">
              <li>Type: {{guild.type}}</li>
              <li>Notifications: {{guild.notificationPreference}}</li>
            </ul>
          </div>
        </div>
      </section>
  `,
  styles: [`
  .guild-list {
    margin-top: 3rem;
  }

  .guild-cards {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .guild-card {
    background: #0f3460;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 350px;
    max-width: 500px;
  }

  h3 {
    font-size: 1.5rem;
  }

  ul.stats {
    padding: 0;
    list-style: none;
  }

  ul.stats li {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
    `]
})
export class GuildListComponent {
  @Input() guilds: any[] = [];
}
