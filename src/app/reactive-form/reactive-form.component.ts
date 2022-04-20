import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  log: FormGroup;
  show;
  submitted = false;
  lo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.log = this.fb.group({
      name: [''],
      pass: ['']
    });
    this.lo = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      p: ['', [Validators.required]]
    })
  }
  //getter method for lo form
  //email and p from lo form can be accessed through bhav method
  get bhav() {
    return this.lo.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.lo.invalid) {
      return;
    }
    else {
      localStorage.setItem('anyName', JSON.stringify(this.lo.value))
      //Storing the lo form values in local storage with "anyName"
    }
  }
  formValue = JSON.parse(localStorage.getItem('anyName')); //to get the stored object from local storage
  
  //on clicking load data button, onload method is called and stored data is displayed in console
  onLoad(){
    console.log(this.formValue);
  }

  login() {
    console.log(this.log.value)
  }
  l() {
    this.show = this.lo
  }


}
