import { Routes } from '@angular/router';
import {TableComponent} from "./modules/table/table.component";
import {HomeComponent} from "./modules/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
  path: 'table', component: TableComponent
},
  {
    path: '**', component: HomeComponent
  }];
