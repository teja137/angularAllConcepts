import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
login;
data;
  constructor(private api: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.login=this.fb.group({
      id:[''],
      name:[''],
      pin:['']
    })
    this.get()
  }
  post(){
    this.api.post(this.login.value).subscribe((res)=>{
      this.get()
    });
  }
  get(){
    this.api.get().subscribe((res)=>{
      this.data=res
    })
  }
  put(){
    this.api.put(this.login.value.id,this.login.value).subscribe((res)=>{
      this.get()
    })
  }

  delete(){
    this.api.delete(this.login.value.id).subscribe((res)=>{
      this.get()
    })
  }


}
