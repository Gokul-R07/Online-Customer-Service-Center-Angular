import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginInput } from '../modal-interfaces/login-input';
import { Customer } from '../modal-interfaces/customer';
import { Operator } from '../modal-interfaces/operator';
import { Admin } from '../modal-interfaces/admin';
import { RegisterInput } from '../modal-interfaces/register-input';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router,private fb: FormBuilder) { }
  private customerLoginUrl : string = "http://localhost:8080/login/customer";
  private operatorLoginUrl : string = "http://localhost:8080/operator/login";
  private adminLoginUrl : string = "http://localhost:8080/loginAdmin";
  private customerRegisterUrl : string = "http://localhost:8080/customer";
  private operatorRegisterUrl : string = "http://localhost:8080/operator/register";

  public customerLogin(requestBody:LoginInput) : Observable<Customer>{
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     return this.http.post<Customer>(this.customerLoginUrl, requestBody, httpOptions)
       .pipe();
   }

  public operatorLogin(requestBody:LoginInput) : Observable<Operator>{
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     return this.http.post<Operator>(this.operatorLoginUrl, requestBody, httpOptions)
       .pipe();
   }

  public adminLogin(requestBody:LoginInput) : Observable<Admin>{
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     return this.http.post<Admin>(this.adminLoginUrl, requestBody, httpOptions)
       .pipe();
   }

  public customerRegister(requestBody:RegisterInput) : Observable<Customer>{
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     return this.http.post<Customer>(this.customerRegisterUrl, requestBody, httpOptions)
       .pipe();
   }

  public operatorRegister(requestBody:RegisterInput) : Observable<Operator>{
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     return this.http.post<Operator>(this.operatorRegisterUrl, requestBody, httpOptions)
       .pipe();
   }

 

  

}
