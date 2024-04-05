import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

 
  getCustomerByEmail(email: string): Observable<Customer> {
    console.log()
    return this.http.get<any>(`http://localhost:8080/customer/k%40gmail.com`);
  }
    
  updateCustomerProfile(requestBody:Customer) : Observable<Customer>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Customer>("http://localhost:8080/update/customer", requestBody, httpOptions)
      .pipe();
  }

}