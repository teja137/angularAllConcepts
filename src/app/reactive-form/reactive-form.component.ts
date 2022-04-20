import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
log;
lo;
show;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.log=this.fb.group({
      name:['',Validators.required],
      pass:['',Validators.required]
    });
    this.lo=this.fb.group({
      n:[''],
      p:['']
    })
  }

  login(){
    console.log(this.log.value)
  }
  l(){
    this.show=this.lo
  }

  
}
