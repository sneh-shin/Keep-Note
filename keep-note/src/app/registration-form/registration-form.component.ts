import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  /** Based on the screen size, switch from standard to one column per row */
  
  userForm = this.fb.group({
    firstName : ['',Validators.required],
    lastName : ['',Validators.compose([Validators.required,Validators.minLength(2)])],
    email: ['',Validators.compose([Validators.required,this.checkIfEmailsAreValid])],
    password: [''],
    conPassword:[''],
    gender: [''],
    age: ['',Validators.compose([Validators.required])],
    phoneNumber: [''],
    street: [''],
    city: [''],
    state: [''],
    zipCode:['']
    })

  checkIfEmailsAreValid(c: AbstractControl) {
    if (c.value !== '') {
      const emailString = c.value;
      const emails = emailString.split(',').map((e: string) => e.trim());
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const anyInvalidEmail = emails.every((e: string) => e.match(emailRegex) !== null);
      if (!anyInvalidEmail) {
        return { checkIfGuestEmailsAreValid: true }
      }
    }
    return null;
  }

  saveData(formData: any) {
    this._snackBar.open('Congrats, you have submitted the form!!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      })

    }
  

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar) {}
}
