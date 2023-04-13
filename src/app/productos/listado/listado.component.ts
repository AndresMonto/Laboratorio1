import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public static _productos: Producto[] = [];
  public productos: Producto[] = ListadoComponent._productos;

  ngOnInit(): void {
  }
}
