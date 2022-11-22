import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //todo: Declaraciones, Componentes, Directivas, Pipes...
      AppComponent,
    ],
  imports: [ //todo: Sólo se importan otros módulos.
      BrowserModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
