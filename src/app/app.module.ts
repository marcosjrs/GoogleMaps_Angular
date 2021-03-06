import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { DialogoInfoMarcadorComponent } from './components/dialogo-info-marcador/dialogo-info-marcador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  entryComponents:[
    DialogoInfoMarcadorComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    DialogoInfoMarcadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY' //https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
