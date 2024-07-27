import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string='https://localhost:7257/api/Product';

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.baseUrl);
  }
  getProductById(productId:number):Observable<IProduct>
  {
    return this.http.get<IProduct>(`${this.baseUrl}/${productId}`);
  }
  addProduct(product:any)
  {
    return this.http.post(this.baseUrl,product);
  }
  editProduct(productId:number,product:any)
  {
    return this.http.put(`${this.baseUrl}/${productId}`,product);
  }
  deleteProduct(productId:number)
  {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }

}
