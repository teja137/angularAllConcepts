import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('z') colo: ElementRef;
  @ViewChildren('zz') col: QueryList<any>;
  @ContentChild('x') co: ElementRef;
  @ContentChildren('xx') c: QueryList<any>;

  constructor() { }
  ngAfterViewInit(): void {
    this.colo.nativeElement.style.color='red'
    this.col.forEach((res)=>{
      res.nativeElement.style.color='green'
    })
  }
  ngAfterContentInit(): void {
   this.co.nativeElement.style.color='orange'
   this.c.forEach((res)=>{
     res.nativeElement.style.color='hotpink'
   })
  }

}
