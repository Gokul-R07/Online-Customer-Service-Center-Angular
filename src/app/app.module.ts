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
import { IssueCardComponent } from './customer/components/issue-card/issue-card.component';
import { NavbarComponent } from './customer/components/navbar/navbar.component';
import { FooterComponent } from './customer/components/footer/footer.component';
import { HeaderComponent } from './customer/components/header/header.component';
import { EditIssueComponent } from './customer/components/edit-issue/edit-issue.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateIssueComponent,
    IssueCardComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    EditIssueComponent
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