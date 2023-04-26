import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './productos/container/container.component';
import { EdicionComponent } from './productos/edicion/edicion.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'edicion-producto/:id', component: EdicionComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
