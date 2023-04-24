import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../modelo/producto';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public productos: Array<Producto> = [];

  private url = 'http://localhost:8080/tiendaservices/ProductoService.php';

  constructor(private http: HttpClient) { }

  public agregar(p: Producto) {
    this.productos.push(p);
  }

  public getProductos(p: Producto | null = null) {
    var header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost');

    var params = new HttpParams();
    if(p != null)
      params = params.append('param', p.id.toString());

    return this.http.get<Producto[]>(this.url, { headers: header, params: params });
  }

  public crearProducto(producto: Producto) {

    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.post(this.url, JSON.stringify(producto), { headers: header });
  }

  public actualizarProducto(producto: Producto) {

    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.put(this.url, JSON.stringify(producto), { headers: header });
  }

  public eliminarProducto(producto: Producto) {

    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');

    var params = new HttpParams();
    params = params.append('id', producto.id.toString());

    return this.http.delete(this.url, { headers: header, params: params});
  }

}
