import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
     this.service.GetAllEmployees();
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete?')) {
      this.service.DeleteEmployee(id).subscribe(res => {
        this.service.GetAllEmployees();
      });
    }
  }
}
