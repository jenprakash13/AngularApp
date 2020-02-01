import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  userList : Employee[];

  readonly rootUrl = "http://localhost:7000";
  
  constructor( private http : HttpClient) { }

  postUser( formData : Employee){

    return this.http.post(this.rootUrl+'/user',formData);

  }

  userListData(){
    console.log(this.http.get(this.rootUrl+'/user').toPromise().then(res => this.userList = res as Employee[]));
    this.http.get(this.rootUrl+'/user').toPromise().then(res => this.userList = res as Employee[]);
  }

  updateUser( formData : Employee){

    return this.http.put(this.rootUrl+'/user/'+formData.id,formData);

  }

  
  deleteUser( id : number){

    return this.http.delete(this.rootUrl+'/user/'+id);

  }



}
