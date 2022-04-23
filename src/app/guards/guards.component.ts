import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  canAct(){
    this.route.navigate(['ca'])
  }
  nameAddress(){
    this.route.navigate(['na'])
  }
  canDea(){
    this.route.navigate(['add'])
  }
}
