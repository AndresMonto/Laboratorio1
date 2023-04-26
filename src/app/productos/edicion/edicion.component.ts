import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})


export class EdicionComponent implements OnInit {
  public producto: Producto = new Producto();


  constructor(private servicioProducto:ProductoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    var producto = new Producto();
    var id = this.route.snapshot.paramMap.get('id')
    producto.id = id == null ? 0 : Number.parseInt(id);

    this.servicioProducto.getProductos(producto).subscribe(result =>{
      this.producto =  result[0];
      console.log(result);
    });
  }

  Editar(producto: Producto) {
    this.servicioProducto.actualizarProducto(producto).subscribe(result =>{
      this.router.navigate(['/']);
      console.log(result);
    });
  }

  Cancelar() {
    this.router.navigate(['/']);
  }
}
