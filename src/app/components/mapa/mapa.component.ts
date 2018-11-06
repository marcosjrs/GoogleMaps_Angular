import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/models/marcador';
import { MatSnackBar } from '@angular/material'
import {MatDialog} from '@angular/material';
import { DialogoInfoMarcadorComponent } from '../dialogo-info-marcador/dialogo-info-marcador.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html'
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[];
  latMapa: number = 43.38596317684374;
  lngMapa: number = -8.4065151;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {    
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

  editarMarcador(marcador:Marcador){

    const dialogRef = this.dialog.open(DialogoInfoMarcadorComponent, {
      width: '250px',
      data: { 
        titulo: marcador.titulo , desc: marcador.desc
      }
    });

    dialogRef.afterClosed().subscribe(result => {   
      if(result) {
        marcador.titulo = result.titulo;
        marcador.desc = result.desc;
        this.openSnackBar("Marcador Editado", "Cerrar");
      }       
      this.persistirMarcadores();     
    });
    
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
