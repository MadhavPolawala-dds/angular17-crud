import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms-tut',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './forms-tut.component.html',
  styleUrl: './forms-tut.component.css',
})
export class FormsTutComponent {
  onSubmit(item: any) {
    console.warn(item);
  }

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  loginFormSubmit() {
    console.log(this.loginForm.value);
  }
  get nameValidation() {
    return this.loginForm.get('name');
  }

  get emailValidation() {
    return this.loginForm.get('email');
  }

  get passwordValidation() {
    return this.loginForm.get('password');
  }
}
