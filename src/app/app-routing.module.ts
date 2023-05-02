import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductComponent } from './modules/admin/components/product/product.component';
import { ViewProductComponent } from './modules/admin/components/view-product/view-product.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'',component:ProductComponent},
  {path:'',component:ViewProductComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {
    path: 'admin',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
