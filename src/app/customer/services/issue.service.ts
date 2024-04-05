import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient:HttpClient) { }

  addIssueToCustomer(customerId: number | undefined, issueDetails: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/issue/${customerId}`, issueDetails);
  }

  public updateIssueDescription(customerId:number, issueId:number, newDescription:string|null):Observable<any>{
    return this.httpClient.put(`http://localhost:8080/issue/update/${customerId}/${issueId}`, newDescription);
  }

  deleteIssue(customerId: number, issueId: number|undefined){
    return this.httpClient.delete(`http://localhost:8080/issue/delete/${customerId}/${issueId}`,{responseType:"text"});
  }

  getIssuesByCustomerId(customerId: number | undefined):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/issues/${customerId}`);
  }

  getAllIssues():Observable<any>{
    return this.httpClient.get(`http://localhost:8080/issues`);
  }

  getIssueByIssueId(issueId:number):Observable<any>
  {
    console.log("inside get issue service."+issueId);
    let url = `http://localhost:8080/issue/${issueId}`;
    console.log(url);
    return this.httpClient.get(url,{responseType:'json'});
  }

  acceptIssueSolution(issueId:number, solutionId:number):Observable<any>{
    return this.httpClient.post(`http://localhost:8080/solution/accept/${issueId}`,  solutionId, {responseType:'text'});
  }


  rejectIssueSolution(issueId:number, solutionId:number):Observable<any>{
    return this.httpClient.post(`http://localhost:8080/solution/reject/${issueId}`,  solutionId, {responseType:'text'});
  }


}
