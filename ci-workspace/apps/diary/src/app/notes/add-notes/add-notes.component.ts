import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddNoteAction } from '../store/action/notes.action';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'ci-workspace-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private router: Router) { }

  ngOnInit(): void {
  }

  addNote(value: string) {
    if(value && value.trim()) {
      this.store.dispatch(new AddNoteAction(value));
      this.router.navigate(['/notes']);
    }
  }
}
