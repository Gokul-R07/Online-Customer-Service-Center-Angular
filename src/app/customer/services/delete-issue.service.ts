import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteIssueService {

  constructor(private httpClient:HttpClient) { }

  deleteIssue(customerId: number, issueId: number|undefined) {
    return this.httpClient.delete(`http://localhost:8080/issue/delete/${customerId}/${issueId}`);
  }
}
