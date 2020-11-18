import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DetailComponent } from './detail/detail.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const routes: Routes = [
  {path: '',component: ListCustomerComponent},
  {path: 'create',component: CreateCustomerComponent},
  {path: 'update/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
