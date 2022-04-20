import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() {
    setTimeout(() => {
      console.log("hi, I'm constructor");
      }, 1000);    
   }

  ngOnChanges(changes: SimpleChanges): void {
setTimeout(() => {
  console.log("hi, I'm ngOnChanges");
  }, 2000);  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("hi, I'm ngOnInit");
    }, 3000);
  }

  ngDoCheck(): void {
    setTimeout(() => {
      console.log("hi,I'm ngDoCheck");
    }, 4000);
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      console.log("hi,I'm ngAfterContentInit");
    }, 5000);
  }
 
  ngAfterContentChecked(): void {
    setTimeout(() => {
      console.log("hi, I'm ngAfterContentChecked");
    }, 6000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log("hi,I'm ngAfterViewInit");  
    }, 7000);
  }
  ngAfterViewChecked(): void {
    setTimeout(() => {
      console.log("hi, I'm ngAfterViewChecked");
    }, 8000);
  }
  ngOnDestroy() {
    setTimeout(() => {
      console.log("destroy");
    }, 9000);
    
  }


}
