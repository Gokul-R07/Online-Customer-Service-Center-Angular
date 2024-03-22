import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/allocated-issue-by-id'; // Update the API URL if needed

  constructor(private http: HttpClient) { }

  getAllAllocatedIssueByOperatorId(operatorId: number): Observable<any> {
    const url = `${this.apiUrl}/${operatorId}`;
    return this.http.get(url);
  }
}
