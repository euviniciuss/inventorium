import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product/list/product-list.component';
import { ProductCreateComponent } from './pages/product/create/product-create.component';
import { ProductUpdateComponent } from './pages/product/update/product-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product",
    component: ProductComponent,
    children: [
      {
        path: "",
        component: ProductListComponent,
      },
      {
        path: "create",
        component: ProductCreateComponent,
      },
      {
        path: "update/:id",
        component: ProductUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
