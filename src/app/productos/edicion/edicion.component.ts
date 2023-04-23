import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})


export class EdicionComponent implements OnInit {
  public producto: Producto = new Producto();


  constructor(private servicioProducto:ProductoService, private route: ActivatedRoute){}

  ngOnInit(): void {
  }

  Editar(producto: Producto) {
    this.servicioProducto.actualizarProducto(producto).subscribe(result =>{
      console.log(result);
    });
  }

  modificarProducto(producto: Producto){
    this.servicioProducto.getProductos(producto).subscribe(result =>{
      this.producto =  result[0];
      console.log(result);
    });
  }
}
