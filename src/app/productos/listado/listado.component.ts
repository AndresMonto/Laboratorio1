import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { EdicionComponent } from '../edicion/edicion.component';
import { EliminacionComponent } from '../eliminacion/eliminacion.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public productos: Producto[] = [];

  @Input() eliminar: EliminacionComponent | undefined;

  constructor( private servicioProducto:ProductoService, private router: Router){
  }

  ngOnInit(): void {
    this.servicioProducto.getProductos().subscribe(result =>{
      this.productos = result;
      console.log(result);
    });
  }

  Limpiar() {
    this.productos = [];
  }

  ModificarProducto(producto: Producto){
    this.router.navigate(['/edicion-producto', producto.id]);
  }
}
