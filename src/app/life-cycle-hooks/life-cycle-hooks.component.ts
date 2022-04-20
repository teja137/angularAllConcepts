import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  constructor() { 
    console.log("Constructor"); 
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
  }
  ngOnInit(): void {
    console.log("OnInIt");
  }
  ngDoCheck(): void {
    console.log("DoCheck");
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInIt");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInIt");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("OnDestory");
  }
  
  
  

}
