import { ActionReducerMap } from '@ngrx/store';
import { notesReducer, NotesState } from './reducer/notes.reducer';

export interface AppState {
    diary: NotesState;
}

export const appReducer: ActionReducerMap<AppState> = {
    diary: notesReducer
}