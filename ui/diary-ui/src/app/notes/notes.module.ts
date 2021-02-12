import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes.routing';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NotesComponent],
  imports: [
    NotesRoutingModule,
    MaterialModule
  ]
})

export class NotesModule { }
