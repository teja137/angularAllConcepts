import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  data(){
    return [
      {
        id:1,
        name:"prabhu",
        age:25,
        status:'pip'
      },
      {
        id:2,
        name:"rajesh",
        age:24,
        status:'bench'
      },
      {
        id:3,
        name:"vinay",
        age:23,
        status:'deployed'
      }
    ]
  }
}
