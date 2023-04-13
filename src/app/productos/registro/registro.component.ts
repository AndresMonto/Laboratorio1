import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})

export class RegistroComponent implements OnInit {
  public producto: Producto = new Producto();

  ngOnInit(): void {
  }

  Registrar() {
    ListadoComponent._productos.push(this.producto);
    this.producto = new Producto();
  }
}