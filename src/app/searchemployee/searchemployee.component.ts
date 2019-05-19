import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  searchedEmployee : Employee;
  constructor(private service:EmployeeService) { }

  ngOnInit() {
  }

  searchEmployee(EMPCode){
    this.service.GetEmployeeByEMPCode(EMPCode)
    .toPromise().then(res=>this.searchedEmployee=res as Employee);
  }
}
