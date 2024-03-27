
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class UpdateCustomerService {

  constructor(private http:HttpClient) { }
  
  public updateCustomerService(requestBody:Customer) : Observable<Customer>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Customer>("http://localhost:8080/update/customer", requestBody, httpOptions)
      .pipe();
  }

  
}
