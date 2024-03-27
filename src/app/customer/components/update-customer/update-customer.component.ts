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
  updateForm!: FormGroup;
  email:string="";
  customerId?: number;
  customer: Customer = new Customer();
  error: string = "";

  constructor(private fb: FormBuilder, private customerService:CustomerService,private updateCustomerService: UpdateCustomerService, private toast: NgToastService) {   this.fetchCustomerDetails();}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required]
    });
  
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
    this.customerService.getCustomerByEmail("gk@gmail.com").subscribe({
      next: (data) => {
        if (data) {
          console.log(data);
          this.error = "";
          // this.updateForm.get('firstName').setValue(data.firstName);
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