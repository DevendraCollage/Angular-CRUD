import { Component } from '@angular/core';
import { CrudMockFacService } from '../crud-mock-fac.service';
import { Faculty } from '../Model/faculty';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css',
})
export class DetailEmployeeComponent {
  facId: number = -1;

  //* Step-3 Inject Service in Constructor
  constructor(
    private _apiEmployee: CrudMockFacService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  //* Step-5 Create object of Employee
  data = new Faculty();

  //* Step-6 Call method in ngOnInit method
  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id']; // Get the id of the URL of the unique employee
    this._apiEmployee.getById(id).subscribe((res: any) => {
      this.data = res;
    });
  }

  delete(id: number) {
    this._apiEmployee.deleteData(id).subscribe((res: any) => {
      this.router.navigate(['crudmock']);
    });
  }
}
