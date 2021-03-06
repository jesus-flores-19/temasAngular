import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgstyleComponent } from './componentes/ngstyle/ngstyle.component';
import { NgclassComponent } from './componentes/ngclass/ngclass.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { NgswitchComponent } from './componentes/ngswitch/ngswitch.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { UsuariosNuevosComponent } from './componentes/usuarios/usuarios-nuevos.component';
import { UsuariosEditarComponent } from './componentes/usuarios/usuarios-editar.component';
import { UsuariosDetalleComponent } from './componentes/usuarios/usuarios-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgclassComponent,
    ResaltadoDirective,
    NgswitchComponent,
    HomeComponent,
    UsuariosComponent,
    NavbarComponent,
    UsuariosNuevosComponent,
    UsuariosEditarComponent,
    UsuariosDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
