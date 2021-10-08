import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { UsuariosDetalleComponent } from './componentes/usuarios/usuarios-detalle.component';
import { UsuariosEditarComponent } from './componentes/usuarios/usuarios-editar.component';
import { UsuariosNuevosComponent } from './componentes/usuarios/usuarios-nuevos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {
    path: "usuarios/:id", 
    component:UsuariosComponent,
    children:[
      {path: "nuevo", component:UsuariosNuevosComponent},
      {path: "editar", component:UsuariosEditarComponent},
      {path: "detalle", component: UsuariosDetalleComponent}
    ]
  },
  {path: "**", pathMatch: "full", redirectTo: "home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
