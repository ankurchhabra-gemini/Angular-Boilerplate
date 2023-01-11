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
import { DataShairingComponent } from './data-shairing/data-shairing.component';
import { FormsComponent } from './Forms/forms.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { LoaderComponent } from './Loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PipeComponent } from './Pipe/pipe.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { GatewayErrorComponent } from './error-handling/gateway-error/gateway-error.component';
import { NotFoundErrorComponent } from './error-handling/not-found-error/not-found-error.component';
import { OtherErrorComponent } from './error-handling/other-error/other-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { ContactComponent } from './contact/contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmpSearchComponent } from './emp-search/emp-search.component';
import { EmpFilterComponent } from './emp-filter/emp-filter.component';
import { DisplayFormComponent } from './Forms/display-form/display-form.component';
import { BadRequestComponent } from './error-handling/bad-request/bad-request.component';
import { DatePipeComponent } from './Pipe/date-pipe/date-pipe.component';
import { CurrencyPipeComponent } from './Pipe/currency-pipe/currency-pipe.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    EmployeeDetailsComponent,
    ChartComponent,
    PieChartComponent,
    DonutChartComponent,
    BarChartComponent,
    LineChartComponent,
    DataShairingComponent,
    FormsComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    LoaderComponent,
    PipeComponent,
    ErrorHandlingComponent,
    NotFoundErrorComponent,
    GatewayErrorComponent,
    OtherErrorComponent,
    DataDetailComponent,
    ContactComponent,
    EmpSearchComponent,
    EmpFilterComponent,
    DisplayFormComponent,
    BadRequestComponent,
    DatePipeComponent,
    CurrencyPipeComponent,
  ],
  imports: [
    CommonModule,
    PagesRouteRoutingModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
})
export class PagesRouteModule {}
