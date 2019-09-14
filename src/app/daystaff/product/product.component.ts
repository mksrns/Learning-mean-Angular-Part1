import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  addProductForm: FormGroup;
  isAddedProduct: boolean = false;
  category: any;
  brand: any;
  
  constructor(private formbuilder: FormBuilder, private productServ: ProductService) { }

  ngOnInit() { 
    this.addProductForm = this.formbuilder.group({ 
      name:['', [Validators.required]],
      sku: ['', [Validators.required]],
      description: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
    });

    this.getAllCat();
    this.getAllBrad();
  }

  onAddProduct(){
    let newProduct = this.addProductForm.value;
    this.addProduct(newProduct);
  }

  addProduct(newProduct){
    this.productServ.createProd(newProduct).subscribe(
      (data:any)=>{
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'New Product Added',
          showConfirmButton: false,
          timer: 1500
        });
        this.isAddedProduct = true;
    },
      error=>{
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
    );
  }

  getAllCat(){
    this.productServ.getAllCategory().subscribe((data:any) => {
      this.category = data.category;
    });
  }

  getAllBrad(){
    this.productServ.getAllBrand().subscribe((data:any) =>{
      this.brand = data.brand;
    });
  }
}
