import { Component } from '@angular/core';
import { CrudMockFacService } from '../crud-mock-fac.service';

@Component({
  selector: 'app-facultymockapi',
  templateUrl: './facultymockapi.component.html',
  styleUrl: './facultymockapi.component.css',
})
export class FacultymockapiComponent {
  faculties: any; // Declare the faculties property

  //? Fifth step to inject crud-mock in this component in this file
  constructor(private _apiFaculty: CrudMockFacService) {}

  //? Sixth step to create noOnInit() method in this file
  ngOnInit(): void {
    //? Seventh step to subscribe the to getAll method
    this._apiFaculty.getAll().subscribe((data) => {
      this.faculties = data; // Set the faculties property
    });
  }

  delete(id: number) {
    this._apiFaculty.deleteData(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
