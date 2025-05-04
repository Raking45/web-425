import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Created Characters</h2>
    <div class="character-list" *ngIf="characters.length > 0;">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let char of characters; let i = index;">
            <td>{{ i+1 }}</td>
            <td>{{ char.name }}</td>
            <td>{{ char.gender }}</td>
            <td>{{ char.class }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  `,
  styles: [`
    .character-list {
      display: flex;
      margin-top: 30px;
      align-items: center;
      justify-content: center;
    }

    .character-list table {
      width: 800px;
      border-collapse: collapse;
      
    }

    .character-list th,
    .character-list td {
      border: 2px solid #ccc;
      padding: 10px;
      text-align: left;
      color: #fff;
    }

    .character-list th {
      background-color: #0f3460;
      color: #f1c40f;
    }

    thead tr th {
      text-align: center;
    }
    
    tbody tr td {
      text-align: center;
    }
    `]
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
}
