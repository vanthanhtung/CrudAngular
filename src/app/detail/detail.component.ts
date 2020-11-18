import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idCustomer: any;
  curentCustomer = null;

  customer={
    name: "",
    password: "",
    email:""
  }

  constructor(public router: Router,
    public service: CustomerService,
    private route: ActivatedRoute
    ) {
      this.idCustomer = parseInt(this.route.snapshot.params.id);
    }

  ngOnInit(): void {
    this.getCurentCustomer(this.idCustomer);
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

  update(){
    this.service.update(this.idCustomer,this.curentCustomer).subscribe(
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
