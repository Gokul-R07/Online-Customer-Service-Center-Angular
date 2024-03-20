import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class getCustomerByEmailService {

  constructor(private httpClient: HttpClient) { }
  getCustomerByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`http://localhost:8080/customer/${email}`);
  }
}
