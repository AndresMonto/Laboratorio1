export class Producto {
    nombre: string;
    precio: number;
    stock: number;
    estado: boolean;

    constructor() {
        this.nombre = "";
        this.precio = 0;
        this.stock = 0;
        this.estado = false;
    }
}