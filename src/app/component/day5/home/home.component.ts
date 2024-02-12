import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  registerValidation = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(20),
      Validators.max(50),
    ]),
    address: new FormControl(null, [
      Validators.required,
      Validators.maxLength(100),
    ]),
  });

  get nameValid() {
    //true || false
    return this.registerValidation.controls['name'];
  }
  get ageValid() {
    //true || false
    console.log(this.registerValidation.controls['age']);

    return this.registerValidation.controls['age'];
  }
  get addressValid() {
    //true || false
    return this.registerValidation.controls['address'];
  }

  submit() {
    console.log(this.registerValidation);
    if (this.registerValidation.valid) {
      alert('sucsess');
    } else {
      alert('invaild data');
    }
  }
}
