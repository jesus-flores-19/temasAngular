import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgstyleComponent } from './componentes/ngstyle/ngstyle.component';
import { NgclassComponent } from './componentes/ngclass/ngclass.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgclassComponent,
    ResaltadoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
