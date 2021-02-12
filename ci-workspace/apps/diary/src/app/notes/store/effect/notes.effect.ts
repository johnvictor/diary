import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';
import { LoadNoteSuccessAction, LOAD_NOTE } from '../action/notes.action';

@Injectable()
export class NotesEffect {
    allNotes = ['third note', 'fourth note', 'fifth note'];

    @Effect()
    loadNotes = this.actions$.pipe(
        ofType(LOAD_NOTE),
        delay(3000),
        mapTo(new LoadNoteSuccessAction(this.allNotes))
    );

    constructor(private actions$: Actions) {}
}