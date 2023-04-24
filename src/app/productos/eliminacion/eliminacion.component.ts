import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminacion',
  templateUrl: './eliminacion.component.html',
  styleUrls: ['./eliminacion.component.css']
})
export class EliminacionComponent implements OnInit {
  constructor(private servicioProducto:ProductoService){}

  ngOnInit(): void {
  }

  Eliminar(producto: Producto){
    if(confirm(`¿Desea eliminar el producto ${producto.nombre}?`)){
      this.servicioProducto.eliminarProducto(producto).subscribe(result =>{
        console.log(result);
      });
    }
  }
}
