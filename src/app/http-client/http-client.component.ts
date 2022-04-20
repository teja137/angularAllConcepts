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
  constructor(private api: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.login=this.fb.group({
      name:[''],
      pass:['']
    })
  }
  log(){
    this.api.post(this.login.value).subscribe((res)=>{
      console.log(res);
      
    })
  }
}
