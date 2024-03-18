import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Customer } from '../modal-interfaces/customer';
import { Operator } from '../modal-interfaces/operator';
import { Admin } from '../modal-interfaces/admin';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit  {
  loginForm!:FormGroup;
  registerForm!:FormGroup
  authenticationType:String="login"
  options = [
    { label: 'Login', value: 'login' },
    { label: 'Register', value: 'register' }
  ];

  loginUserTypes = [
    { key: '1', value: 'Customer' },
    { key: '2', value: 'Operator' },
    { key: '3', value: 'Admin' },
  ];

  registerUserTypes = [
    { key: '1', value: 'Customer' },
    { key: '2', value: 'Operator' },
  ];

  constructor(private fb: FormBuilder,private authenticationService:AuthenticationService,private toastr: ToastrService,private router: Router){
    this.createLoginForm(),
    this.createRegisterForm()


  }
  ngOnInit(): void {
   
    console.log('gokul')
  }

  createLoginForm(){
    this.loginForm=this.fb.group({
      
      email: [{ value: '', disabled: false }],
      password: [{ value: '', disabled: false }],
      userType: [{ value: 'Customer', disabled: false }],
      
    })

  }
  createRegisterForm(){
    this.registerForm=this.fb.group({
      
      firstName: [{ value: '', disabled: false }],
      lastName: [{ value: '', disabled: false }],
      email: [{ value: '', disabled: false }],
      password: [{ value: '', disabled: false }],
      city: [{ value: '', disabled: false }],
      phoneNumber: [{ value: '', disabled: false }],
      departmentName: [{ value: '', disabled: false }],
      userType: [{ value: 'Customer', disabled: false }],
      
    })

  }


  login(){ 
    const userTypeValue = this.loginForm.get('userType')?.value;

    switch (userTypeValue) {
      case 'Customer':
        this.authenticationService.customerLogin(this.loginForm.value).subscribe({
          next: (response: Customer) => {
            console.log('String response from backend:', response);
            this.toastr.success('Login Sucess');
            this.router.navigate(['/customer']);
            
          },
          error: (error) => {
            console.error('Error:', error.error);
            this.toastr.error('Login Failed');
          }
        });
        break;
      case 'Operator':
        this.authenticationService.operatorLogin(this.loginForm.value).subscribe({
          next: (response: Operator) => {
            console.log('String response from backend:', response);
            this.toastr.success('Login Sucess');
          },
          error: (error) => {
            console.error('Error:', error.error);
            this.toastr.error('Login Failed');
          }
        });
        break;
      case 'Admin':
        this.authenticationService.adminLogin(this.loginForm.value).subscribe({
          next: (response:Admin) => {
            console.log('String response from backend:', response);
            this.toastr.success('Login Sucess');
          },
          error: (error) => {
            console.error('Error:', error.error);
            this.toastr.error('Login Failed');
          }
        });
        break;
      default:
        console.log('Invalid User Type');
    }
  }
  register(){ 
    console.log(this.registerForm.value)
    const userTypeValue = this.registerForm.get('userType')?.value;

    switch (userTypeValue) {
      case 'Customer':
        this.authenticationService.customerRegister(this.registerForm.value).subscribe({
          next: (response: Customer) => {
            console.log('String response from backend:', response);
          },
          error: (error) => {
            console.error('Error:', error.error);
          }
        });
        break;
      case 'Operator':
        this.authenticationService.operatorRegister(this.registerForm.value).subscribe({
          next: (response: Operator) => {
            console.log('String response from backend:', response);
          },
          error: (error) => {
            console.error('Error:', error.error);
          }
        });
        break;
   
      default:
        console.log('Invalid User Type');
    }
  }

}
