import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  private apiUrl = 'http://localhost:8080/Issue-Status';

  constructor(private http: HttpClient) { }

  getKeyValues(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
