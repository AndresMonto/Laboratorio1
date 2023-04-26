import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-eliminacion',
  templateUrl: './eliminacion.component.html',
  styleUrls: ['./eliminacion.component.css']
})
export class EliminacionComponent implements OnInit {

  @Input() listar: ListadoComponent | undefined;

  constructor(private servicioProducto:ProductoService, private router: Router){}

  ngOnInit(): void {}

  Eliminar(producto: Producto){
    if(confirm(`¿Desea eliminar el producto ${producto.nombre}?`)){
      this.servicioProducto.eliminarProducto(producto).subscribe(result =>{
        this.listar?.ngOnInit();
        console.log(result);
      });
    }
  }
}
