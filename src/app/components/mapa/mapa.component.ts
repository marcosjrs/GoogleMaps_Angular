import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/models/marcador';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html'
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[];
  latMapa: number = 43.38596317684374;
  lngMapa: number = -8.4065151;

  constructor(public snackBar: MatSnackBar) {    
    this.marcadores = this.recuperarMarcadores();
    if(this.marcadores.length>0){
      this.openSnackBar("Se han recuperado antiguos marcadores", "Cerrar");
    }
  }

  ngOnInit() {
  }

  addMarcador(evento){
    if(!this.marcadores) this.marcadores = [];
    this.marcadores.push( new Marcador(evento.coords.lat, evento.coords.lng) );
    this.persistirMarcadores();
    this.openSnackBar("Marcador Añadido", "Cerrar");
  }
  borrarMarcador(marcador){
    this.marcadores = this.marcadores.filter( (m)=> marcador.lat!=m.lat && marcador.lng!=m.lng  );
    this.persistirMarcadores();
    this.openSnackBar("Marcador Eliminado", "Cerrar");
  }

  persistirMarcadores(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  recuperarMarcadores(){
    return JSON.parse( localStorage.getItem('marcadores') );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
