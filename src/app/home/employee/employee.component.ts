import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?:NgForm){
    if(form!=null)
      form.resetForm();

    this.service.formData = {
      EmployeeID :null,
      FullName:'',
      EMPCode :'',
      Position:'',
      Mobile:null
    }
  }

  onSubmit(form: NgForm) {
    if(form.value.EmployeeID==null)
      this.CreateEmployee(form);
    else
      this.UpdateEmployee(form);
  }

  CreateEmployee(form:NgForm){
    this.service.CreateEmployee(form.value).subscribe(res=>{
      this.resetForm(form);
      this.service.GetAllEmployees();
    });
  }

  UpdateEmployee(form:NgForm){
    this.service.UpdateEmployee(form.value).subscribe(res=>{
      this.resetForm(form);
      this.service.GetAllEmployees();
    });
  }
}
