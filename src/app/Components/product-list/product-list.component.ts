import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/IProduct';
import { ProductService } from '../../Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  providers: [
   ProductService// Don't forget to provide HttpService here
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
products:IProduct[]=[];
// products:any;
constructor(private productService:ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
  });
  }
  deleteProduct(Id:number)
  {
    
    if (confirm('Are you sure you want to delete this product?')) {
        this.productService.deleteProduct(Id).subscribe(() => {
          this.products = this.products.filter(p => p.id !== Id);
      });
    }
  }
}
