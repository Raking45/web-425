import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component';
import { AuthService } from '../auth.service';

export interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Undecided';
  class: 'Barbarian' | 'Warrior' | 'Knight' | 'Priest' | 'Wizard' | 'Rogue' | 'Ranger' | 'Druid';
}
@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule, CharacterListComponent],
  template: `
    <div class="character-form-container">
      <h2>Create a New Character</h2>
      <form #characterForm="ngForm" (ngSubmit)="addCharacter()" class="character-form">

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

      <!-- Use CharacterListComponent -->
      <app-character-list [characters]="characters"></app-character-list>
    </div>
  `,
  styles: [`
    h2 {
      font-size: 2.5rem;
      color: #f1c40f;
      text-shadow: 1px 1px #000;
    }
    
    label {
      display: block;
      margin-bottom: 0.25rem;
      font-size: 18px;
      text-shadow: 1px 1px #000;
    }

    .character-form-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 2rem;
      color: #f1c40f;
      font-weight: 600;
    }

    form.character-form {
      width: 500px;
      margin: 0 auto;
      background-color: #0f3460;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    input[type="text"] {
      width: 100%;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-right: -1.5rem;
      border-radius: 5px;
      border: none;
      font-size: 16px;
    }

    select {
      padding: 0.75rem 1rem;
      border-radius: 5px;
    }
    
    button[type="submit"] {
      margin-top: 1rem;
      padding: 0.8rem 1.5rem;
      background-color: #f1c40f;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
      font-size: 1rem;
    }

    button[type="submit"]:hover {
      background-color:rgb(109, 167, 238);
      color: #f1c40f;
      border: 1px solid #f1c40f;
    }

    app-character-list {
      margin-top: 3rem;
    }
    `]
})

export class CreateCharacterComponent {
  characters: Character[] = [];
  name: string = '';
  gender: 'Male' | 'Female' | 'Undecided' = 'Male';
  class: 'Barbarian' | 'Warrior' | 'Knight' | 'Priest' | 'Wizard' | 'Rogue' | 'Ranger' | 'Druid' = 'Warrior';

  constructor(private authService: AuthService) {

  }
  
  addCharacter() {
    if(!this.authService.isSignedIn()) {
      alert('You must be signed in to create a character.');
      return;
    }
    
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
