import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';
import { UpdateCustomerService } from '../../services/update-customer.service';
import { NgToastService } from 'ng-angular-popup';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number = 0;
  customerEmail:any;
  updateForm!: FormGroup;
  email:string="";
  customerId?: number;
  customer: Customer = new Customer();
  error: string = "";

  constructor(private fb: FormBuilder, private customerService:CustomerService,private updateCustomerService: UpdateCustomerService, private toast: NgToastService) {   

    this.customerEmail=sessionStorage.getItem('email');
    const storedId = sessionStorage.getItem('id');
    if (storedId) {
      this.id = parseInt(storedId, 10);
    }
  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.fetchCustomerDetails();
  
  }

  updateCustomerProfile() {
    if (this.updateForm.valid) {
      this.customer = this.updateForm.value;
      console.log(this.customer);
      this.customerService.updateCustomerProfile(this.customer).subscribe(
        {
          next: (data) => {
            this.toast.success({ detail: "Success Message", summary: "Customer updation is success", duration: 5000 });
            console.log(data);
            this.error = "";
            this.updateForm.reset();
          },
          error: (err) => {
            this.toast.error({ detail: "Error Message", summary: "Customer updation is failed, try again later...", duration: 5000 });
            this.error = err.error;
            console.log(err);
          }
        }
      );
    }
  }
  fetchCustomerDetails() {
    this.customerService.getCustomerByEmail(this.customerEmail).subscribe({
      next: (data) => {
        if (data) {
          console.log(data);
          this.error = "";
            this.updateForm.get('firstName')?.setValue(data.firstName);
            this.updateForm.get('lastName')?.setValue(data.lastName);
            this.updateForm.get('email')?.setValue(data.email);
            this.updateForm.get('password')?.setValue(data.password);
            this.updateForm.get('phoneNumber')?.setValue(data.phoneNumber);
            this.updateForm.get('city')?.setValue(data.city);
         
        } else {
          console.log("Data is null");
        }
      },
      error: (err) => {
        this.error = err.error;
        console.log(err);
      }
    });
  }
  
}