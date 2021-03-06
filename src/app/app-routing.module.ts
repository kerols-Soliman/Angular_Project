import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
<<<<<<< HEAD
=======
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Regist2Component } from './regist/regist.component';
>>>>>>> 6eda4d73e34b419d842bf7569e0261cdfb99632a
import { ShowCategoryComponent } from './show-category/show-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  {path:"Product/edit",component:EditProductComponent},
  {path:"EditCategory/:id",component:EditCategoryComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  {path:'Category',component:ShowCategoryComponent},
  {path:'createCategory',component:CreateCategoryComponent},
  {path:'createProduct',component:CreateProductComponent},
  {path:'regist',component:Regist2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
