import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class CreateIssueService {

    constructor(private httpClient:HttpClient) { }
  
    addIssueToCustomer(customerId: number | undefined, issueDetails: any): Observable<any> {
      return this.httpClient.post(`http://localhost:8080/issue/${customerId}`, issueDetails);
    }
    
  
  }