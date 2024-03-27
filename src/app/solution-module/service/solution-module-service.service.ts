import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionModuleServiceService {

  // constructor(private http: HttpClient) { }

  // private solutionUrl : string ="http://localhost:8080/operator/solution";

  // public solutionSubmit(requestBody: solution):Observable<solution>{
  //   return this.http.post<solution>(this.solutionUrl,requestBody).pipe();
  // }
  private apiUrl = "http://localhost:8080/operator/solution"; // Replace this with your backend API URL

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, data, { headers });
  }

}
