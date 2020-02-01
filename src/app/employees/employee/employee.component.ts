import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/serviceAPI/employee.service';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

   responseMsg;

  constructor( private service : EmployeeService) { }

 

  ngOnInit() {
    this.resetFormValues();
  }

  resetFormValues( form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData ={
      email       :'',
      id          :null,
      first_name  :'',
      last_name   :''
    }

  }

  onSubmit(form : NgForm){
    if( form.value.id === null){
      this.insertRecord(form);
      this.responseMsg = "Data insert sucessfully";
      this.service.userListData();
    }else{
      this.updateRecord(form);
      this.responseMsg = "Data Update sucessfully";
      this.service.userListData();
    }
    
  }

  insertRecord(form : NgForm){
    this.service.postUser(form.value).subscribe(res =>{
      this.resetFormValues(form);
    });
  }

  updateRecord(form : NgForm){
    this.service.updateUser(form.value).subscribe(res =>{
      this.resetFormValues(form);
    });
  }

}
