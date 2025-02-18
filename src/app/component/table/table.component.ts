import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/module/Customer';
import { MasterService } from 'src/app/service/master.service';
import { PopupComponent } from '../popup/popup.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
 
  customerList !:Customer[];
  datasource:any;
  displayedcoloumn:string[]=["code","name","email","phone","status","action"];
  @ViewChild (MatPaginator) paginator !:MatPaginator;
  @ViewChild (MatSort) sort !:MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
    this.loadCustomer();
  }
  Filterchange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.datasource.filter=value;

  }
  loadCustomer(){
    this.service.GetCustomer().subscribe(res => {
      this.customerList = res;
      this.datasource = new MatTableDataSource<Customer>(this.customerList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
  }

  addcustomer(){
    this.OpenPopup(0,"Add Customer", PopupComponent)
  }

  viewcustomer(code:any){
    this.OpenPopup(code,"View Customer",UserdetailsComponent)
  }

  editcustomer(code:any){
    this.OpenPopup(code,"Edit Customer", PopupComponent)
  }

  deletecustomer(code:any){
    
      if(this.datasource.code >0){
        this.service.DeleteCustomerByCode(this.datasource.code).subscribe(item=>{
          this.datasource=item;
          console.log('Customer deleted successfully');
          })}
        else{
        console.error('Error deleting customer:');
      }
  }

  OpenPopup(code:any,title:any,component:any){
    var _popup= this.dialog.open(component,{
      width:'40%',
      height:"70%",
      enterAnimationDuration:"1000ms",
      data:{
        title:title,
        code:code
      }
    });

    _popup.afterClosed().subscribe(item=>{
      console.log(item)
      this.loadCustomer();
    })
  }
}
