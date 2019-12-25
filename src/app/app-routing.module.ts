import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashbaordComponent} from '../app/components/dashbaord/dashbaord.component';
import {SearchComponent} from '../app/components/search/search.component';
import {DetailsComponent} from '../app/components/details/details.component';

const routes: Routes = [
  {path:'dashboard', component:DashbaordComponent},
  {path:'search', component:SearchComponent},
  {path:'details', component:DetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
