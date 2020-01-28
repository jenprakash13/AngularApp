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
    this.insertRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postEmployee(form.value).subscribe(res =>{
      this.resetFormValues(form);
    });
  }

}
