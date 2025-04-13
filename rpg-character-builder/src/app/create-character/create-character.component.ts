import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Undecided';
  class: 'Barbarian' | 'Warrior' | 'Knight' | 'Priest' | 'Wizard' | 'Rogue' | 'Ranger' | 'Druid';
}
@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="character-form-container">
      <form #characterForm="ngForm" (ngSubmit)="addCharacter()" class="character-form">
        <h2>Create a New Character</h2>

        <label for="name">Name</label>
        <input type="text" id="name" name="name" required [(ngModel)]="name" />

        <label for="gender">Gender</label>
        <select id="gender" name="gender" [(ngModel)]="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Undecided">Undecided</option>
        </select>

        <label for="class">Class</label>
        <select id="class" name="class" [(ngModel)]="class">
          <option value="Barbarian">Barbarian</option>
          <option value="Warrior">Warrior</option>
          <option value="Knight">Knight</option>
          <option value="Priest">Priest</option>
          <option value="Wizard">Wizard</option>
          <option value="Rogue">Rogue</option>
          <option value="Ranger">Ranger</option>
          <option value="Druid">Druid</option>
        </select>

        <button type="submit">Create Character</button>
      </form>

      <div class="character-list" *ngIf="characters.length > 0;">
        <h2>Created Characters</h2>
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
            <tr *ngFor="let char of characters; let i = index">
              <td>{{ i+1 }}</td>
              <td>{{ char.name }}</td>
              <td>{{ char.gender }}</td>
              <td>{{ char.class }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    h2 {
      color: #f1c40f;
    }
    
    label {
      color: #fff;
      font-weight: 600;
    }

    .character-form-container {
      padding: 20px;
      max-width: 600px;
      margin: auto;
      border: 2px solid black;
      background-color: #0f3460;
    }

    .character-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .character-form input,
    .character-form select,
    .character-form button {
      padding: 8px;
      font-size: 16px;
      font-weight: 600;
      background-color:rgb(219, 219, 219);
    }

    .character-form button:hover {
      background-color: #0f3460;
      color: #f39c12;
    }

    .character-list {
      margin-top: 30px;
    }

    .character-list table {
      width: 100%;
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

export class CreateCharacterComponent {
  characters: Character[] = [];
  name: string = '';
  gender: 'Male' | 'Female' | 'Undecided' = 'Male';
  class: 'Barbarian' | 'Warrior' | 'Knight' | 'Priest' | 'Wizard' | 'Rogue' | 'Ranger' | 'Druid' = 'Warrior';
  
  addCharacter() {
    if (!this.name.trim()) return;
    const newCharacter: Character = {
      name: this.name,
      gender: this.gender,
      class: this.class
    };

    this.characters.push(newCharacter)
    this.resetForm();
  }

  resetForm() {
    this.name='';
    this.gender='Male';
    this.class='Warrior';
  }

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
  
}
