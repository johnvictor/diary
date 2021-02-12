import { ADD_NOTE, LOAD_NOTE, NotesAction, REMOVE_NOTE, LOAD_NOTE_SUCCESS } from '../action/notes.action';

export interface NotesState {
    notes: string[];
    isLoading: boolean;
}

const initialState: NotesState = {
    notes: [
        'first note',
        'second note'
    ],
    isLoading: false
};

export function notesReducer(
    state = initialState, 
    action: NotesAction
) {
    switch (action.type) {
        case ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] };

        case REMOVE_NOTE:
            let notes = [...state.notes];
            notes = notes.filter((v, i) => i !== action.payload);
            return { ...state, notes: notes };

        case LOAD_NOTE:
            // let notes = [...state.notes];
            // notes = notes.filter((v, i) => i !== action.payload);
            return { ...state };

        case LOAD_NOTE_SUCCESS:
            return { ...state, notes: [...state.notes, ...action.payload] };

        default:
            return { ...state };
    }
}