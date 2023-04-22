import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { EdicionComponent } from '../edicion/edicion.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public productos: Producto[] = [];

  @Input() editar: EdicionComponent | undefined;

  constructor(private servicioProducto:ProductoService, private router: Router){}

  ngOnInit(): void {
    this.servicioProducto.getProductos().subscribe(result =>{
      console.log(result);
      this.productos = result;
    });
  }

  Limpiar() {
    this.productos = [];
  }
}
