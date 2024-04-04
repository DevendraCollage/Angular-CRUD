import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudMockFacService {
  //! This service file is only use for calling the different methods of the API

  //? First step to Inject HTTPClient
  constructor(private _http: HttpClient) {}

  //? Third step to create get all method (This will get all th data of the faculty)
  getAll(): Observable<any[]> {
    //? Fourth step to call the apiURL from getAll method
    return this._http.get<any[]>(
      'https://65e3074788c4088649f53321.mockapi.io/Faculty'
    );
  }

  //? This method will getById method (This will get faculty by there respective id)
  getById(id: number): Observable<any> {
    //? Fifth step to call the apiURL from getById method
    return this._http.get<any>(
      'https://65e3074788c4088649f53321.mockapi.io/Faculty/' + id
    );
  }

  //? This method will delete the data from deleteByIf method
  deleteData(id: number): Observable<any> {
    return this._http.delete<any>(
      'https://65e3074788c4088649f53321.mockapi.io/Faculty/' + id
    );
  }

  //? This method will insert the new data into the database
  insert(form: any) {
    return this._http.post(
      'https://65e3074788c4088649f53321.mockapi.io/Faculty',
      form
    );
  }

  //? This method will update the define data
  update(id: Number, form: any) {
    return this._http.put(
      'https://65e3074788c4088649f53321.mockapi.io/Faculty/' + id,
      form
    );
  }
}
