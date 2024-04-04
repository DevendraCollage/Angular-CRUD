import { Component } from '@angular/core';
import { CrudMockFacService } from '../crud-mock-fac.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  id: number = -1;

  data: any = {
    name: '',
    image: '',
    desc: '',
  };

  constructor(
    private _api: CrudMockFacService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  submit(form: any) {
    if (this.id == 0) {
      this._api.insert(form).subscribe(() => {
        this.router.navigate(['crudmock']);
      });
    } else {
      this._api.update(this.id, form).subscribe(() => {
        this.router.navigate(['crudmock']);
      });
    }
  }

  ngOnInit() {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    if (this.id > 0) {
      this._api.getById(this.id).subscribe((res: any) => {
        this.data.FacultyName = res.FacultyName;
        this.data.FacultyImage = res.FacultyImage;
        this.data.FacultyAbout = res.FacultyAbout;
      });
    }
  }
}
