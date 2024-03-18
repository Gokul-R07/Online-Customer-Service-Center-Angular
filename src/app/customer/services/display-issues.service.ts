import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayIssuesService {

  constructor(private httpClient:HttpClient) { }
  getAllIssues():Observable<any>{
    return this.httpClient.get('http://localhost:8080/issues');
  }

  updateIssueDescription(customerId:number|undefined, issueId:number, issueDescription:String):Observable<any>{
    return this.httpClient.put(`http://localhost:8080/issue/update/{customerId}/{issueId}`, issueDescription);
  }

}
