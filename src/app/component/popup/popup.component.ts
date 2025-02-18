import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  inputdata:any;
  closedmassege="Closed Usig diirective";
  editdata:any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopupComponent>,private buildr:FormBuilder,
  private service:MasterService){

  }

ngOnInit(): void {
   this.inputdata=this.data;
   if(this.inputdata.code >0){
    this.setpopupdata(this.inputdata.code);
   }
  }

  setpopupdata(code:any) {
    this.service.GetCustomerByCode(code).subscribe(item=>{
      this.editdata=item;
      this.myform.setValue({
        name:this.editdata.name,
        email:this.editdata.email,
        phone:this.editdata.phone,
        status:this.editdata.status,
      })
    });

  }
  ClosePopup(){
    this.ref.close("Closed using fuction")
  }

  myform=this.buildr.group({
    name:this.buildr.control(''),
    email:this.buildr.control(''),
    phone:this.buildr.control(''),
    status:this.buildr.control(false)
  });

  saveUser(){
    this.service.SaveCustomer(this.myform.value).subscribe(res=>{
      //this.ClosePopup();
    });
  }
}
