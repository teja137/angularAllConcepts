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
  submitted=false;
  lo: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.log = this.fb.group({
      name: ['', Validators.required],
      pass: ['', Validators.required]
    });
    this.lo = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      p: ['', [Validators.required]]
    })
  }
  //getter method for lo form
  get bhav() {
    return this.lo.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.lo.invalid){
      return;
    }
    else{
      console.log(this.lo.value)
    }
  }

  login() {
    console.log(this.log.value)
  }
  l() {
    this.show = this.lo
  }


}
