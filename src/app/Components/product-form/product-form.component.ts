import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,RouterLink],
  providers: [
    ProductService// Don't forget to provide HttpService here
   ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{

  product:any;
  isEditMode:boolean=false;
  productId:any;
  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  productForm=new FormGroup({
    name:new FormControl('',[Validators.minLength(1),Validators.required]),
    description:new FormControl(''),
    price:new FormControl(0,[Validators.required,Validators.min(0)]),
  });  
    
  ngOnInit(): void {
    this.productId=this.route.snapshot.params['id'];
    if(this.productId){
      //edit-product
      this.isEditMode = true;
      this.productService.getProductById(this.productId).subscribe(
        {
          next:(data)=>{
            console.log(data);
            this.product=data;
            this.getName.setValue(this.product.name);
            this.getDescription.setValue(this.product.description);
            this.getPrice.setValue(this.product.price);
          },
        }
      );
    }
    //add-product
    this.route.params.subscribe({
      next:(data)=>{
        this.productId=data['id'];
        this.getName.setValue('');
        this.getPrice.setValue(null);
        this.getDescription.setValue('');
      },
    });

  }

  get getName(){
    return this.productForm.controls['name'];
  }
  get getPrice(){
    return this.productForm.controls['price'];
    }
  get getDescription(){
    return this.productForm.controls['description'];
  }
  
  saveProduct(): void {
    console.log("the form values is:");
    console.log(this.productForm.value);
    if (this.isEditMode) {
      this.productService.editProduct(this.productId, this.productForm.value).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

}
