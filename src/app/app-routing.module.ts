import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';

const routes: Routes = [
  {path:'autocomplete' ,component:AutocompleteComponent},
  {path:'input' , component:InputComponent},
  {path:'', component:HomeComponent},
  {path:'card' , component:CardComponent},
  {path:'slider' , component:SliderComponent},
  {path:'table' , component:TableComponent},
  {path:'form', component:FormdesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
