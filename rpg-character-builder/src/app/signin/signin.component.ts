import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="signin-form-container">
    
    <form [formGroup]="signinForm" (ngSubmit)="signin();" class="signinform">
    <h1>Complete the form below to begin your adventure!</h1>

      <fieldset>
        <legend>Sign In</legend>

        <label for="email">Email:</label>
        <input formControlName="email" type="email" id="email" name="email">
          @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('required')) {
            <small class="error">Email is Required.</small>
          }
          @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('email')) {
            <small class="error">Invalid Email Address.</small>
          }
          
          <label for="password">Password:</label>
          <input formControlName="password" type="password" id="password">
            @if (signinForm.controls['password'].touched && signinForm.controls['password'].hasError('required')) {
              <small class="error">Password is Required.</small>
            }
            @if (signinForm.controls['password'].touched && signinForm.controls['password'].hasError('pattern')) {
              <small class="error">Password must be at least 8 characters long and contain at least one uppercase letter and one number.</small>
            }
            <input type="submit" [disabled]="!signinForm.valid" value="Sign In">
      </fieldset>
    </form>
    </div>
  `,
  styles: `
  .signin-form-container {
    display: flex;
    justify-content: center;
    height: 60vh;
    width: 100%;
    color: #f1c40f;
    font-weight: 600;
  }

  .signin-form-container h1 {
    text-shadow: 1px 2px #000;
    font-size: 24px;
    padding-bottom: 30px;
    padding-top: 15px;
  }

  .signin-form {
    width: 100%;
  }
  
  fieldset {
    border: 2px solid black;
    background-color: #0f3460;
    border-radius: 8px;
    width: 600px;
    height: 225px;
    box-shadow: 4px 6px 4px rgb(0, 0, 0, 0.5);
  }

  legend {
    font-size: 24px;
    text-shadow: 1px 1px #000;
  }

  label, input {
    display: block;
    margin-bottom: 5px;
    margin-top: 5px;
    float: left;
  }

  input, input[type="submit"] {
    padding: 8px;
    box-sizing: border-box;
  }

  input[type="email"], input[type="password"] {
    width: 100%;
  }

  input[type="submit"] {
    margin-top: 10px;
    float: right;
    padding: 8px;
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    background-color:rgb(219, 219, 219);
  }

  input[type="submit"]:hover {
    background-color: #0f3460;
    color: #f39c12;
    border: 1px solid #ffffff;
    border-radius: 4px;
    cursor: pointer;
  }

  .error {
    color: red;
    padding: 5px;
  }
  `
})
export class SigninComponent {
  signinForm:FormGroup=this.fb.group({
    email:[null, Validators.compose([Validators.required, Validators.email])],
    password:[null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)])]
  });

  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute, private authService:AuthService) {

  }

  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    if(this.authService.signin(email,password)) {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
