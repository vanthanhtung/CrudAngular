import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customers: any =[];

  customer={
    name: "",
    password: "",
    email:""
  }
  constructor(public router: Router,public service: CustomerService) { }

  ngOnInit(): void {
  }

  createNew(): void{
    const data = {
      name: this.customer.name,
      password: this.customer.password,
      email: this.customer.email
    };

    this.service.create(data).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
