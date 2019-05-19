import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/employee';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let service:EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [EmployeeListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component=new EmployeeListComponent(service);
  });

  it('should retrive the All Employee', () => {
    const dummyData = [
      { EmployeeID: '1', FullName: 'Kasim', EMPCode: 'M1049315', Mobile: 8861321329, Position: 'Engineer' }
    ];
  
    spyOn(service,'GetAllEmployees').and.callFake(()=>{
      return 

      component.ngOnInit();
      expect(component.ngOnInit).toEqual(dummyData);
    })
  })
});
