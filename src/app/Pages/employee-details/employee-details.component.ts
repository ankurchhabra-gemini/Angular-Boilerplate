import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { EmpDetails } from 'src/app/shared/interfaces';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import Swal from 'sweetalert2';
import { EmpSearchComponent } from '../emp-search/emp-search.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  passDetails: any = [];
  loader: boolean = true;
  itemsPerPageList: any = '12';
  page: number = 1;
  passDetailsReal: any = [];

  @ViewChild(EmpSearchComponent) public empSearchComp!: EmpSearchComponent;
  searchText: string = '';
  // searchTextName!: string;
  // searchTextMobile!: string;
  constructor(private service: DataServiceService) {}
  // contactNo: number = 2222;

  ngOnInit(): void {
    this.getEmpDetails();

    // console.log('emmmm', this.contactNo);
    // this.service.contactNumberSubject.subscribe((res) => {
    //   console.log('emmp det', res);
    //   this.contactNo = res;
    //   // return res;
    // });
  }

  async getEmpDetails() {
    let pageNo = this.page;
    this.loader = true;
    await this.service
      .getEmployeeDetials(pageNo, this.itemsPerPageList)
      .subscribe((res) => {
        this.passDetails = res;
        this.passDetailsReal = { ...this.passDetails };
        console.log('res', this.passDetails);
        this.loader = false;
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getEmpDetails();
  }

  searchEmp(event: string) {
    this.searchText = this.empSearchComp.searchText; // we can access searchText via event also
    // this.empDetails = this.empDetailsReal.filter((ele: EmpDetails) => {
    //   return event === '' ||
    //   ele.name?.toLowerCase().match(event.toLowerCase())
    // });
  }
  filterEmp(event: FormGroup) {
    this.passDetails = { ...this.passDetailsReal };
    const name = event.value.name.toLowerCase();
    const startYear = event.value.startYear;
    const endYear = event.value.endYear;
    const tripRange = event.value.tripRange;
    console.log(this.passDetails);
    if (name) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        return ele.airline[0].name.toLowerCase().includes(name);
      });
    }
    if (startYear) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        return ele.airline[0].established >= startYear;
      });
    }
    if (endYear) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        return ele.airline[0].established <= endYear;
      });
    }
    if (tripRange) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        if (tripRange == 100) {
          return ele.trips <= tripRange;
        } else if (tripRange == 500) {
          return ele.trips <= tripRange && ele.trips > 100;
        } else {
          return ele.trips > 500;
        }
      });
    }
    console.log('SSAA', this.passDetails);
  }
}
