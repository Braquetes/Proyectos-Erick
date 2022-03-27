import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  URL = `http://localhost/backend`;

  getProducts(){
    return this.http.get(`${this.URL}/getProducts.php`);
  }

  insertProducts(product: any){ 
    return this.http.post(`${this.URL}/createProduct.php`, product);
  }

  getProduct(id: number){
    return this.http.get(`${this.URL}/getProduct.php?id=${id}`);
  }

  updateProduct(form: any){
    return this.http.put(`${this.URL}/updateProduct.php`,form);
  }

  deleteProduct(id: any){
    return this.http.get(`${this.URL}/deleteProduct.php?id=${id}`);
  }

}
