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
}
