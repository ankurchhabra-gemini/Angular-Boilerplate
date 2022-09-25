import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from '../shared/guards/authguard.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'employee-details',
    pathMatch: 'full',
    component: EmployeeDetailsComponent,
    canActivate: [AuthguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRouteRoutingModule {}
