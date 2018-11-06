import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialogo-info-marcador',
  templateUrl: './dialogo-info-marcador.component.html'
})
export class DialogoInfoMarcadorComponent{

  constructor(
    public dialogRef: MatDialogRef<DialogoInfoMarcadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {titulo:string, desc:string}) {}

  guardar(){
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
