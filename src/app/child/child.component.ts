import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input () text:any;
@Output () text2 = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  txt2(event:any){
    this.text2.emit(event.target.value)
  }

}
