import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : '', redirectTo:'/home', pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : "contact", component : ContactComponent},
  {path : "dashboard", component : DashboardComponent, canActivate: [AuthGuard]},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
