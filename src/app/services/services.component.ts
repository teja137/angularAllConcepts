import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  information = [];
  dat;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.information=this.info()
    this.dat=this.service.data()
  }


  info(){
    return [
      {
        id:1,
        name: 'halo',
        type: 'game'
      },
      {
        id:2,
        name: 'no mans sky',
        type: 'universe'
      },
      {
        id:3,
        name: 'last of us',
        type: 'survival'
      },
      {
        id:4,
        name: 'nfs',
        type: 'racing'
      },
      {
        id:5,
        name: 'fantastic five',
        type: 'movie'
      },
      {
        id:6,
        name: 'iron man',
        type: 'suite'
      },
      {
        id:7,
        name: 'steve jobs',
        type: 'LSD'
      }
    ]
  }

 
}
