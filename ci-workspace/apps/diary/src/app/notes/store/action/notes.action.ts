import { Action } from '@ngrx/store';

export const ADD_NOTE = '[NOTES] ADD_NOTE';
export const REMOVE_NOTE = '[NOTES] REMOVE_NOTE';
export const LOAD_NOTE = '[NOTES] LOAD_NOTE';
export const LOAD_NOTE_SUCCESS = '[NOTES] LOAD_NOTE_SUCCESS';

export class AddNoteAction implements Action {
    readonly type = ADD_NOTE;
    constructor(public payload: string) {}
}

export class RemoveNoteAction implements Action {
    readonly type = REMOVE_NOTE;
    constructor(public payload: number) {}
}

export class LoadNoteAction implements Action {
    readonly type = LOAD_NOTE;
}

export class LoadNoteSuccessAction implements Action {
    readonly type = LOAD_NOTE_SUCCESS;

    constructor(public payload: string[]) {}
}

export type NotesAction = 
    AddNoteAction | 
    RemoveNoteAction | 
    LoadNoteAction |
    LoadNoteSuccessAction;