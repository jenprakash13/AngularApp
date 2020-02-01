import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/serviceAPI/employee.service';
import { Employee } from 'src/app/model/employee.model';
import {EmployeeComponent} from '../employee/employee.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  responseMsg;
  constructor( private service : EmployeeService ) { }

  ngOnInit() {
    console.log( this.service.userListData());
    this.service.userListData();
  }

  assignValue(user : Employee){

    this.service.formData = user;

 }

 deleteUser(id : number){
   this.service.deleteUser(id).subscribe(res =>{
    this.service.userListData();
    this.responseMsg ="User Deleted..";
  });
 }

}
