import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastrModule } from 'ngx-toastr';
import { NgToastModule } from 'ng-angular-popup'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationComponent } from './authentication/components/authentication.component';
import { CreateIssueComponent } from './customer/components/create-issue/create-issue.component';
import { CustomerComponent } from './customer/components/customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IssueCardComponent } from './customer/components/issue-card/issue-card.component';
import { NavbarComponent } from './customer/components/navbar/navbar.component';
import { FooterComponent  as CustomerFooter} from './customer/components/customer-footer/customer-footer.component';
import { HeaderComponent as CustomerHeader } from './customer/components/customer-header/customer-header.component';
import { EditIssueComponent } from './customer/components/edit-issue/edit-issue.component';
import { ViewSolutionComponent } from './customer/components/view-solution/view-solution.component';

import { OperatorModuleComponent } from './operator/components/operator-module/operator-module.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    OperatorModuleComponent,
    HeaderComponent,
    FooterComponent,
    AuthenticationComponent,
    CreateIssueComponent,
    CustomerComponent,
    HomepageComponent,
    IssueCardComponent,
    NavbarComponent,
    CustomerFooter,
    CustomerHeader,
    EditIssueComponent,
    ViewSolutionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule,
    RadioButtonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }