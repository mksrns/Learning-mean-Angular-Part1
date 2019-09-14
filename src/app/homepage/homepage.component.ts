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
  page: number;

  constructor(private productServ: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.queryParams.pipe(filter(params => params.sort)).subscribe(params => {
      this.sort = 1;
      this.page = 1;
      if (params.sort) {
        this.sort = params.sort;
        this.page = params.page;
        console.log(params.sort);
        console.log(params.page);
      }
    });

    // this.getPaginatedProd(this.sort, this.filterArray['category'], this.filterArray['brand']);
    this.getPaginatedProd(this.sort, this.page);
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
    // this.getPaginatedProd(1, this.filterArray['category'], this.filterArray['brand']);

    console.log(this.filterArray['category']);
    console.log(this.filterArray['brand']);
  }
  
  clearValues(){
    this.filterArray['category'] = [];
    this.filterArray['brand']= [];
  }
  getPaginatedProd(sort, page){
    this.productServ.getAllProd(sort, page).subscribe((data:any) =>{
      this.product = data.product;
      this.router.navigateByUrl('/home?sort=' + sort + '&page=' + page);
    });
    console.log(page);
  }
  sorted(sort){
    console.log(sort);
    this.getPaginatedProd(sort, this.page);
  }
  pageNumber(page){
    this.getPaginatedProd(this.sort, page);
    console.log(this.page);
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
