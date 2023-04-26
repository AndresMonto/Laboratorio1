import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { count, isEmpty, Observable } from 'rxjs';
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
  public productos: Observable<Producto[]> | undefined;
  public any: boolean = true;

  @Input() eliminar: EliminacionComponent | undefined;

  constructor( private servicioProducto:ProductoService, private router: Router){
  }

  ngOnInit(): void {
    this.productos = this.servicioProducto.getProductos();
    this.productos.subscribe(result => this.any = result.length > 0);
  }

  Limpiar() {
    this.productos = new Observable();
  }

  ModificarProducto(producto: Producto){
    this.router.navigate(['/edicion-producto', producto.id]);
  }
}
