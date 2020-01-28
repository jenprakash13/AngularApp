import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;

  readonly rootUrl = "http://localhost:7000";
  
  constructor( private http : HttpClient) { }

  postEmployee( formData : Employee){

    return this.http.post(this.rootUrl+'/user',formData);

  }


}
