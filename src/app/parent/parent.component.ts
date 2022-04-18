import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
text1:any;
text2:any;
  constructor() { }

  ngOnInit(): void {
  }
  txt1(event:any){
    this.text2=event
  }

}
