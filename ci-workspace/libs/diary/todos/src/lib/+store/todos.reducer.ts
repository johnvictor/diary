// 01 define the shape of the state

import { TodoActions, TodosActionTypes } from './todos.actions';
import { Todo } from './todos.model';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

const initialTodos: Todo[] = [
    {
        id: '0',
        date: new Date().toDateString(),
        desc: 'first task'
    },
    {
        id: '1',
        date: new Date().toDateString(),
        desc: 'second task'
    }
];
//01 define the shape of the state
export interface TodosState extends EntityState<Todo> {
    selectedTodoId: string;
}

// 02 defind adapter
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

//02 define the initial state
export const initialState: TodosState = adapter.getInitialState({
    selectedTodoId: null,
    entities: { ...initialTodos }
});

//03 build the most simplest reducer
export function todosReducer(state = initialState, action: TodoActions): TodosState {
    switch(action.type) {
        case TodosActionTypes.SelectTodo:
            return {
                ...state,
                selectedTodoId: action.payload,
            };
        case TodosActionTypes.CreateTodo:
            return adapter.addOne(action.payload, state);
        case TodosActionTypes.UpdateTodo:
            return adapter.updateOne(action.payload, state);
        case TodosActionTypes.DeleteTodo:
            return adapter.removeOne(action.payload, state);
        default:
            return state;
    }
}

// selectors
export const getSelectedProjectId = (state: TodosState) => state.selectedTodoId;

const { selectIds , selectEntities, selectAll } = adapter.getSelectors();

export const selectProjectIds = selectIds;
export const selectProjectEntites = selectEntities;
export const selectAllProjects = selectAll;