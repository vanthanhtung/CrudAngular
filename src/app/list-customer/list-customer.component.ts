import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  constructor(
    public router: Router,
    private service: CustomerService,
    private route: ActivatedRoute
    ) { }

  customers: any =[];

  curentCustomer = null;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.service.getAll()
      .subscribe(
        data => {
          this.customers = data;
        },
        error => {
          console.log(error)
        }
      );
  }

  getCurentCustomer(id: any): void{
    this.service.getById(id)
    .subscribe(
      data => {
        this.curentCustomer = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  register(){
    this.router.navigateByUrl('/create');
  }

  delete(id): void{
    debugger
    this.service.delete(id).subscribe(
      (response) => {
        this.getData();
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
