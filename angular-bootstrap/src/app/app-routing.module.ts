import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';

import { HomeComponent } from './home/home.component';

import { FormComponent } from './form/form.component'

import { SuccessComponent } from './success/success.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'form', component: FormComponent },
  { path: 'success', component: SuccessComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
