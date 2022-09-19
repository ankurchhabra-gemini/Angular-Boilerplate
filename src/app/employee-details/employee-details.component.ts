import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/service/data-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  empDetails: any;
  constructor(private service: DataServiceService) {}

  ngOnInit(): void {
    this.getEmpDetails();
  }

  async getEmpDetails() {
    await this.service.getEmployeeDetials().subscribe((res) => {
      console.log('res', res);
      this.empDetails = res;
    });
  }
}
