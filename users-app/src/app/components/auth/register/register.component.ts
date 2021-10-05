import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  username = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamation('@')
  ]);

  registerForm : FormGroup;
  countries = ["india", "australia","france", "USA"]

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password,
      role : new FormControl('', Validators.required),
      country : new FormControl('', Validators.required),
      tnc : new FormControl('')
    })
  }

  hasExclamation(symbol: string) : ValidatorFn {
    return function(control : AbstractControl) : ValidationErrors | null{
      const exclamation = control.value.indexOf(symbol) >= 0
      return exclamation ? null : {"exclamationError": true};
    }
  }

  onRegister(){
    console.log(this.registerForm);
  }
  ngOnInit(): void {
  }

}
