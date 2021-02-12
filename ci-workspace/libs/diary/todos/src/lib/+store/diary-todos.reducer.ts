import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { todosReducer, TodosState, selectProjectIds, selectAllProjects, selectProjectEntites } from './todos.reducer';

export interface AppState {
    todos: TodosState
}

export const reducers: ActionReducerMap<AppState> = {
    todos: todosReducer
}

// todo selectos
export const selectTodosState = createFeatureSelector<AppState> ('diary');

// export const csSelectProjectIds = createSelector(
//     selectTodosState,
//     selectProjectIds
// );

export const csSelectProjectTodo = createSelector(
    selectTodosState,
    (state: AppState) => state.todos.entities
  );

// export const csSelectProjectEntites = createSelector(
//     selectTodosState,
//     selectProjectEntites
// );