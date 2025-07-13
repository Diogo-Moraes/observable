import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { ListaEInterfaceComponent } from './componentes/lista-einterface/lista-einterface.component';

const routes: Routes = [
 {path:"" , component: TwoWayComponent },
 {path: "lista", component: ListaEInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
