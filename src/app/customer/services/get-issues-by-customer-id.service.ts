
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetIssuesByCustomerIdService {

  constructor(private httpClient:HttpClient) { }
  getIssuesByCustomerId(customerId: number | undefined):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/issues/${customerId}`);
  }
}
