import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PagesRouteRoutingModule } from './pages-route-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChartComponent } from './chart/chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { DonutChartComponent } from './chart/donut-chart/donut-chart.component';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';

@NgModule({
  declarations: [HomeComponent, EmployeeDetailsComponent, ChartComponent, PieChartComponent,
    DonutChartComponent,
    BarChartComponent,
    LineChartComponent,],
  imports: [
    CommonModule,
    PagesRouteRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PagesRouteModule {}
