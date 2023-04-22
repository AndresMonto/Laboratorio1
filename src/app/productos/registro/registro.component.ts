import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})

export class RegistroComponent implements OnInit {
  public producto: Producto = new Producto();

  @Input() listar: ListadoComponent | undefined;

  constructor(private servicioProducto:ProductoService){}

  ngOnInit(): void {
  }

  Registrar() {
    this.servicioProducto.crearProducto(this.producto).subscribe(restult => {
      this.producto = new Producto();
      console.log(restult);
      this.listar?.ngOnInit();
    });
  }
}
