import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/models/marcador';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html'
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[];
  latMapa: number = 43.38596317684374;
  lngMapa: number = -8.4065151;

  constructor() {    
    //Para pruebas
    this.marcadores = [new Marcador(43.38596317684374, -8.4065151, "A Coruña","Torre de Hércules" )]
  }

  ngOnInit() {
  }

  addMarcador(evento){
    this.marcadores.push( new Marcador(evento.coords.lat, evento.coords.lng) );
  }

}
