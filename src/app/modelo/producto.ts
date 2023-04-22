export class Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    estado: boolean;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.precio = 0;
        this.stock = 0;
        this.estado = false;
    }
}
