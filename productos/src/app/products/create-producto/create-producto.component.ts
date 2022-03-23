import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {

  producto = {
    idProducto: '',
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: '',
    stock: '',
    idMarca: '',
    idCategoria: ''
  }

  constructor(private PS: ProductsService, private router: Router, private AR: ActivatedRoute) { }
  id: any;
  ngOnInit(): void {
    this.id = this.AR.snapshot.params['id'];
    if(this.id){
      this.PS.getProduct(this.id).subscribe((data: any)=>{
        console.log(data);
        this.producto = data;
      });
    }
  }

  save(form: NgForm){

    if(this.id){
      console.log(form.value);
      this.PS.updateProduct(form.value).subscribe((data: any)=>{
        console.log(data);
        this.router.navigate(['get-productos']);
      });
    }else{
      console.log(form.value);
      this.PS.insertProducts(form.value).subscribe((data: any) => {
        if(data){
          console.log(data);
          this.router.navigate(['/get-productos']);
        }
      });
    }
  }

}
