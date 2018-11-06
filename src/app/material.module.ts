import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos de Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }
