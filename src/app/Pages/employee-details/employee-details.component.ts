import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  empDetails: any;
  loader: boolean = true;
  constructor(private service: DataServiceService) {}

  ngOnInit(): void {
    this.getEmpDetails();
  }

  async getEmpDetails() {
    await this.service.getEmployeeDetials().subscribe((res) => {
      console.log('res', res);
      this.empDetails = res;
      this.loader = false;
    });
  }
}
