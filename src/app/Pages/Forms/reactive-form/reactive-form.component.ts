import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm! : FormGroup
  dropdownList : any = [];
  selectedItems : any = [];
  dropdownSettings : IDropdownSettings = {};
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  initForm(){
    this.reactiveForm = this._fb.group({
      user : [''],
      password: [''],
      option: [null],
      radioOption: [null],
      multiSelect: [null],
      check :[false],
      onchecked: ['']
    })
  }

  submitForm(){
    console.log(this.reactiveForm);
    alert("Submitted");
    this.reactiveForm.reset();
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
