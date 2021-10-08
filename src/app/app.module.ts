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

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgclassComponent,
    ResaltadoDirective,
    NgswitchComponent,
    HomeComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
