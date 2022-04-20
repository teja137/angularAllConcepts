import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor() { }
  d = new Observable((res)=>{
    const array = [1,2,3,4,5,6,7]
    res.next(array)
  })
  a = new Observable((res)=>{
    res.next({
      name:"GOD",
      place:"Universe"
    })
  })
  t(){
    return new Observable((res)=>{
      setTimeout(() => {
        res.next("one")
      }, 1000);
      setTimeout(() => {
        res.next("thirty")
      }, 2000);
      setTimeout(() => {
        res.next("Seven")
      }, 3000);
    })
  }
}
