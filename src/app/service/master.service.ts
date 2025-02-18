import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';
import { HttpBackend, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Customer } from '../module/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {

  }

  GetColorList(): colorentity[] {
    return [
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'Black' },
      { code: 'c5', name: 'purple' },
      { code: 'c6', name: 'blue' },
      { code: 'c7', name: 'Pink' }
    ]
  }

  GetCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:3000/customer");
  }

  SaveCustomer(data:any){
    return this.http.post("http://localhost:3000/customer",data);
  }

  GetCustomerByCode(code:any){
    return this.http.get("http://localhost:3000/customer/"+ code);
  }

  DeleteCustomerByCode(code:any){
    return this.http.delete("http://localhost:3000/customer/"+ code);
  }

}
