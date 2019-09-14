import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, filter, catchError, mergeMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  product: any;
  category: any;
  brand: any;
  filterArray: any = [];
  sort: number;

  constructor(private productServ: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.queryParams.pipe(filter(params => params.sort)).subscribe(params => {
      this.sort = 1;
      if (params.sort) {
        this.sort = params.sort;
        console.log(params.sort);
      }
    });

    this.getPaginatedProd(this.sort, this.filterArray['category'], this.filterArray['brand']);
    this.getCategory();
    this.getBrand();
  }
  addFilter(type, value:string, isChecked){
    if (isChecked) {
      this.filterArray[type].push(value);
    }
    else {
      var index = this.filterArray[type].indexOf(value);
      this.filterArray[type].splice(index, 1);
    }
    // this.filterFunction();
    this.getPaginatedProd(1, this.filterArray['category'], this.filterArray['brand']);

    console.log(this.filterArray['category']);
    console.log(this.filterArray['brand']);
  }
  
  clearValues(){
    this.filterArray['category'] = [];
    this.filterArray['brand']= [];
  }
  getPaginatedProd(sort, x, y){
    this.productServ.getAllProd(sort, x, y).subscribe((data:any) =>{
      this.product = data.product;
      this.router.navigateByUrl('/home?sort=' + sort);
    });
    
  }
  filterFunction(){

  }
  getCategory(){
    this.productServ.getAllCategory().subscribe((data:any) =>{
      this.category = data.category;
    });
  }
  getBrand(){
    this.productServ.getAllBrand().subscribe((data:any) =>{
      this.brand = data.brand;
    });
  }

}
