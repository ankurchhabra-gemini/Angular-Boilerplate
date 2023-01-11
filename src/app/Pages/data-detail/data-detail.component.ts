import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css'],
})
export class DataDetailComponent implements OnInit {
  @Input() dataFromParent: string = '';
  @Output() clearData = new EventEmitter();
  msgFromParent:string = "child data as of now";
  counter:number = 0;
  contactNum:number = 899999999999;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {

    this.dataService.contactNumberSubject.subscribe(ele =>{
      this.contactNum = ele;
    })
  }

  clearOrSetParent(clear:boolean) {
    let eventArgs: clearParentEventArgs = { reset: false, value: 'default' };
    if(clear){
      eventArgs.reset = true;
    }
    // clearData is a fn in parent component to clear the data of parent
    // we can even pass a simple string to emit fn.
    this.clearData.emit(eventArgs);
  }

  updateMsgFromParent(msgFromChild: string){
    this.msgFromParent = msgFromChild;
  }
  addCounter(){
    this.counter++;
  }
  subCounter(){
    this.counter--;
  }
  updateContact(contact:any){    
    this.dataService.updateContactNumber(contact.value);
  }
}
export interface clearParentEventArgs {
  reset: boolean;
  value: string;
}
