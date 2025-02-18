import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.scss']
})
export class FormdesignComponent implements OnInit {

  countryList=["India","America","Canada", "Srilanka", "japan","China"]
  termList=["15 Days","30 Days","45 Days", "60 Days", "75 Days","100 Days"]

  constructor(private builder:FormBuilder){

  }
  ngOnInit(): void {
    this.customerform.setValue({name:'sagar', email:'sagarchaugul1911@gmail.com', phone:'750729494',
  country:'India',term:'30days',address:'add1',dob:new Date(2000,4,21),gender:'male',status:'true'})
  }
  customerform=this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.required])),
    phone:this.builder.control('',Validators.required),
    country:this.builder.control('',Validators.required),
    address:this.builder.control('',Validators.required),
    term:this.builder.control('',Validators.required),
    dob:this.builder.control(new Date(2004,7,11)),
    gender:this.builder.control('male'),
    status:this.builder.control('true')
  });

  savecustomer(){
    console.log(this.customerform.value)
  }

  clearform(){
    this.customerform.reset();
  }

}
