import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public dataService: DataServiceService) { }
  contactno:any=1111111111;

  ngOnInit(): void {

    this.dataService.contactNumberSubject.subscribe((ele)=>{
      this.contactno = ele;
    })

  }

}
