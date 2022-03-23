import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './products/create-producto/create-producto.component';
import { GetProductosComponent } from './products/get-productos/get-productos.component';

const routes: Routes = [
  {
    path: 'get-productos',
    component: GetProductosComponent
  },
  {
    path: 'create-producto',
    component: CreateProductoComponent
  },
  {
    path: 'update-producto/:id',
    component: CreateProductoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'get-productos',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
