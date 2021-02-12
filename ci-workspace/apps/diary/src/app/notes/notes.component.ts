import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogout } from './model/notes.model';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoadNoteAction, RemoveNoteAction } from './store/action/notes.action';
import { AppState } from './store/app.reducer';
import { NotesState } from './store/reducer/notes.reducer';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: NotesState;
  storeSub = new Subscription();
  constructor(private http: HttpClient, private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getNotes();
  }

  logout() {
    this.http.get<ILogout>('/auth/logout').subscribe((res: ILogout) => {
      if (res.status) {
        this.router.navigate(['login']);
      }
    });
  }

  getNotes() {
    const sub = this.store.select('diary').subscribe(res => {
      this.notes = res;
    });
    this.storeSub.add(sub);
  }

  addNote() {
    // this.router.navigate(['notes/add']);
    this.store.dispatch(new LoadNoteAction());
  }

  removeNote(index) {
    this.store.dispatch(new RemoveNoteAction(index));
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

  // getNotes() {
  //   this.http.get('/api/notes').subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }

}
