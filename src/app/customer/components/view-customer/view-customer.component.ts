import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
  
})
export class ViewCustomerComponent {
  customer:Customer=new Customer()
  data:any
  error:string=""
  customerDetails:any
  constructor(private customerService: CustomerService,private router:Router) {

    this.customerService.getCustomerByEmail("gk@gmail.com").subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.customer = data;
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("Completed successfully");
      }
    }
    );
     
}
}


  




