import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuildListComponent } from '../guild-list/guild-list.component';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
    <div class="guild-container">
      <h1>Create a New Guild</h1>

      <form [formGroup]="guildForm" (ngSubmit)="onSubmit()" noValidate>

        <div class="form-group">
          <label for="guildName">Guild Name</label>
          <input id="guildName" type="text" formControlName="guildName" />
          <div *ngIf="guildForm.get('guildName')?.touched && guildForm.get('guildName')?.invalid" class="error">
            Guild name is required.
          </div>
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" formControlName="description"></textarea>
          <div *ngIf="guildForm.get('description')?.touched && guildForm.get('description')?.invalid" class="error">
            Description is required.
          </div>
        </div>

        <div class="form-group">
          <label for="type">Type</label>
          <select id="type" formControlName="type">
            <option value="">Select Type</option>
            <option *ngFor="let type of guildTypes" [value]="type">{{type}}</option>
          </select>
          <div *ngIf="guildForm.get('type')?.touched && guildForm.get('type')?.invalid" class="error">
            Type is required.
          </div>
        </div>

        <div class="form-group">
          <label>Notification Preference</label>
          <div class="radio-group">
            <label *ngFor="let pref of notificationPreferences">
              <input type="radio" [value]="pref" formControlName="notificationPreference" />
              {{pref}}
            </label>
          </div>
          <div *ngIf="guildForm.get('notificationPreference')?.touched && guildForm.get('notificationPreference')?.invalid" class="error">
            Notification preference is required.
          </div>
        </div>

        <div class="form-group checkbox-group">
          <label>
            <input type="checkbox" formControlName="acceptTerms" />
            Accept Terms and Conditions
          </label>
          <div *ngIf="guildForm.get('acceptTerms')?.touched && guildForm.get('acceptTerms')?.invalid" class="error">
            Your must accept the terms.
          </div>
        </div>

        <button type="submit" [disabled]="guildForm.invalid || !guildForm.dirty">Create Guild</button>
      </form>

      <!-- Use Guild List Component -->
      <app-guild-list [guilds]="guilds"></app-guild-list>
    </div>
  `,
  styles: [`
  .guild-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    color: #f1c40f;
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
    color: #f1c40f;
    text-shadow: 1px 1px #000;
  }

  form {
    width: 500px;
    margin: .5rem auto;
    background-color: #0f3460;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.5);
  }

  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .form-group label {
    text-shadow: 1px 1px #000;
  }

  .form-group select {
    cursor: pointer;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 18px;
  }

  input[type="text"], textarea, select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
  }

  input[type="radio"] {
    cursor: pointer;
  }

  .checkbox-group {
    text-align: left;
  }

  input[type="checkbox"] {
    cursor: pointer;
  }

  button {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    background-color: #f1c40f;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;
  }

  button:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }

  .error {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }

  h2 {
    text-shadow: 1px 1px #000;
    font-size: 2.5rem;
  }

  h2, h3 {
    color: #f1c40f;
  }

  p {
    color: #ffffff;
  }
    `]
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  guilds: any[] = [];
  guildTypes = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationPreferences = ['Email', 'SMS', 'In-App'];
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      notificationPreference: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.guildForm.valid) {
      this.guilds.push(this.guildForm.value);
      this.guildForm.reset({
        guildName:'',
        description:'',
        type:'',
        notificationPreference:'',
        acceptTerms:false,
      });
      this.guildForm.markAsPristine();
      this.guildForm.markAsUntouched();
      this.submitted = false
    }
  }
}
