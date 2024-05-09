import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AdditemComponent } from './additem/additem.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'additem',component:AdditemComponent},
  {path:'additem/:id',component:AdditemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
