import { Component, Input, OnInit } from '@angular/core';

import { SharedModule } from 'primeng/api';
import { Acco } from 'src/share/model/acc.model';
import { AccoService } from 'src/share/service/acc.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() set newAccoSetter(catchedData : any) {
    console.log('catchedData triger',catchedData)
    this.accordList.push(catchedData)
  } ;

  accordList : Acco[] = [];

  constructor(private  accoServe :AccoService){}

  ngOnInit(): void {
      this.accordList =this.accoServe.getaccoList();
     this.accoServe.accordianSubject.subscribe({
        next:(updatedaccordList: any)=>{
        this.accordList=updatedaccordList
        }
      })
  }}


 