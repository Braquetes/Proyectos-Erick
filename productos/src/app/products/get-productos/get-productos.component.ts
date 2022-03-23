import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-get-productos',
  templateUrl: './get-productos.component.html',
  styleUrls: ['./get-productos.component.css']
})
export class GetProductosComponent implements OnInit {

  productos: any;

  constructor(private PS: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.PS.getProducts().subscribe((data: any)=>{
      console.log(data);
      this.productos = data;
    });
  }

  editar(id: number){
    console.log(id);
    this.router.navigate(['/update-producto',id]);
  }

  eliminar(id: number){
    console.log(id);
    this.PS.deleteProduct(id).subscribe((data: any)=>{
      console.log(data);
      this.obtenerProductos();
    });
  }

}
