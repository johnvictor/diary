import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes.routing';
import { MaterialModule } from '../material/material.module';
import { AddNotesComponent } from './add-notes/add-notes.component';

@NgModule({
  declarations: [NotesComponent, AddNotesComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MaterialModule
  ]
})

export class NotesModule { }
