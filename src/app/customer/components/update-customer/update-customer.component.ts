import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';
import { UpdateCustomerService } from '../../services/update-customer.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateForm!: FormGroup;
  customer: Customer = new Customer();
  error: string = "";

  constructor(private fb: FormBuilder, private updateCustomerService: UpdateCustomerService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  updateCustomerProfile() {
    if (this.updateForm.valid) {
      this.customer = this.updateForm.value;
      this.updateCustomerService.updateCustomerService(this.customer).subscribe(
        {
          next: (data) => {
            this.toast.success({ detail: "Success Message", summary: "Customer updation is success", duration: 5000 });
            console.log(data);
            this.error = "";
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

}