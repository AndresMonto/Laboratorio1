import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EdicionComponent } from './edicion/edicion.component';
import { RouterModule, Routes } from '@angular/router';
import { EliminacionComponent } from './eliminacion/eliminacion.component';

const routes: Routes = [
  { path: 'edicion-producto/:id', component: EdicionComponent },
];

@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    EdicionComponent,
    EliminacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RegistroComponent,
    ListadoComponent,
    EdicionComponent,
    RouterModule
  ]
})
export class ProductosModule { }
