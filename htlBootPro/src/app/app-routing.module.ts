import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesLandingComponent } from './pages/pages-landing/pages-landing.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages-lnding', component: PagesLandingComponent },
  { path: 'page-login', component: PagesLoginComponent },
  { path: 'users-profile', component: UsersProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
