import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
yes = true;
no = false;
  constructor() { }

  ngOnInit(): void {
  }

  info(){
    return [
      {
        'id':1,
        'name':"Prabhu",
        'age':25,
        'job':'Software'
      },
      {
        'id':2,
        'name':"Jesus",
        'age':0,
        'job':'Life Manager'
      },{
        'id':3,
        'name':"Us",
        'age':null,
        'job':'nothing'
      }
    ]
  }

}
