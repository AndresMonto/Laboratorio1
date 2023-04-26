import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EdicionComponent } from './edicion/edicion.component';
import { EliminacionComponent } from './eliminacion/eliminacion.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    EdicionComponent,
    EliminacionComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    RegistroComponent,
    ListadoComponent,
    EdicionComponent,
    EliminacionComponent,
    ContainerComponent,
  ]
})
export class ProductosModule { }
