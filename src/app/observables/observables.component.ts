import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservablesService } from '../observables.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
xo;
yo;
zo;
oo;
  constructor(private obs: ObservablesService) { }

  ngOnInit() {
  //   return new Observable((res)=>{
  //     setTimeout(() => {
  //       res.next('1')
  //     }, 1000);
  //     setTimeout(() => {
  //       res.next('7')
  //     }, 3000);
  //     setTimeout(() => {
  //       res.next('3')
  //     }, 2000);
  //   }).subscribe((val)=>{
  //     this.xo=val
  //   })
  // }

this.obs.d.subscribe((res)=>{
  this.yo=res
})

this.obs.a.subscribe((res)=>{
  this.zo=res
})
this.obs.t().subscribe((res)=>{
  this.oo=res
})

    }
  }