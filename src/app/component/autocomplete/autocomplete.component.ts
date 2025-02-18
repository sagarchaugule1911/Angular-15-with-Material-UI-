import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { colorentity } from 'src/app/Entity/colorentity';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  colorarray=['Red', 'Green' , 'Yellow' ,'Black']
  filteroptions!:Observable<String[]>
  formcontrol=new FormControl('');

  colorarraylist!:colorentity[];
  filteroptionslist!:Observable<colorentity[]>
  

  constructor(private service:MasterService){
   this.colorarraylist= this.service.GetColorList();
  }

  ngOnInit(): void {
    // this.filteroptions=this.formcontrol.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )
    this.filteroptionslist=this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._LISTFILTER(value || ''))
    )
}
   
private _FILTER(value:string):string[]{
const searchvalue=value.toLocaleLowerCase();
return this.colorarray.filter(Option=>Option.toLocaleLowerCase().includes(searchvalue))
}

private _LISTFILTER(value:string):colorentity[]{
  const searchvalue=value.toLocaleLowerCase();
  return this.colorarraylist.filter(Option=>
    Option.name.toLocaleLowerCase().includes(searchvalue) ||
    Option.code.toLocaleLowerCase().includes(searchvalue));
  }

}
