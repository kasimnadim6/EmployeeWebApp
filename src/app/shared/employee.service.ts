import { Injectable } from '@angular/core';
import { Employee} from '../shared/employee';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly url = "http://localhost:26121/api/Employee"

  constructor(private http:HttpClient) { }

  CreateEmployee(formData:Employee){
    return this.http.post(this.url+'/CreateEmployee',formData);
  }
  
  GetAllEmployees(){
    this.http.get(this.url+'/AllEmployees').toPromise().then(res=>this.list=res as Employee[]);
  }

  GetEmployeeByID(id:number){
    this.http.get(this.url+'/EmployeeByID?id='+id).toPromise().then(res=>this.list=res as Employee[]);
  }

  UpdateEmployee(formData:Employee){
    return this.http.put(this.url+'/UpdateEmployee?id='+formData.EmployeeID,formData);
  }

  DeleteEmployee(id:number){
    return this.http.delete(this.url+'/DeleteEmployee?id='+id);
  }

  GetEmployeeByEMPCode(EMPCode:string){
    return this.http.get(this.url+'/EmployeeByEMPCode?EmpCode='+EMPCode);
  }
}
