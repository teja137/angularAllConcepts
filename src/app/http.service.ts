import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  post(data){
    return  this.http.post('http://localhost:3000/posts',data)
    }
    get(){
      return this.http.get('http://localhost:3000/posts')
    }
}
