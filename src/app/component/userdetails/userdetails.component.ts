import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  inputdata:any;
  custdata:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<UserdetailsComponent>, private service:MasterService){

  }

  ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata.code >0){
      this.service.GetCustomerByCode(this.inputdata.code).subscribe(item=>{
        this.custdata=item;
        })
     }
  }

  ClosePopup(){
    this.ref.close('Closed')
  }




}
