import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent , children: [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {path:'view-product',component:ViewProductComponent},
    {path:'product',component:ProductComponent},
    { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
  ],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
