import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})
export class NavbarComponent implements OnInit {
  customerDetails: any;

  constructor(private router: Router) { }
  ngOnInit(): void {
    // const navigation = this.router.getCurrentNavigation();
    // if (navigation?.extras.state) {
    //   this.customerDetails = navigation.extras.state['activeCustomerDetails'];
    //   console.log('Operator Details:', this.customerDetails);
    // }
    this.router.navigate(['view-customer']);
  }
<<<<<<< HEAD
  
=======
>>>>>>> ec69067f3c8320e5fba4a1a60643bc81b2d32b90
}
