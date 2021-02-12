import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [{
  path: '',
  component: NotesComponent
},  {
  path: 'add',
  component: AddNotesComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class NotesRoutingModule { }