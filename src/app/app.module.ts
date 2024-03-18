import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateIssueComponent } from './customer/components/create-issue/create-issue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup'
import { GetIssuesByCustomerIdComponent } from './customer/components/get-issues-by-customer-id/get-issues-by-customer-id.component';
import { DisplayIssuesComponent } from './customer/components/display-issues/display-issues.component';
import { IssueCardComponent } from './customer/components/issue-card/issue-card.component';
import { DeleteIssueComponent } from './customer/components/delete-issue/delete-issue.component';
import { UpdateIssueComponent } from './customer/components/update-issue/update-issue.component';
import { NavbarComponent } from './customer/components/navbar/navbar.component';
import { FooterComponent } from './customer/components/footer/footer.component';
import { HeaderComponent } from './customer/components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateIssueComponent,
    GetIssuesByCustomerIdComponent,
    DisplayIssuesComponent,
    IssueCardComponent,
    DeleteIssueComponent,
    UpdateIssueComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }