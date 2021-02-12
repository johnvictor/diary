import { Action } from '@ngrx/store';
import { Todo } from './todos.model';

export enum TodosActionTypes {
    SelectTodo = '[Todo] select todo',
    CreateTodo = '[Todo] create todo',
    UpdateTodo = '[Todo] update todo',
    DeleteTodo = '[Todo] delete todo'
}

export class CreateTodoAction implements Action {
    readonly type = TodosActionTypes.CreateTodo;
    constructor(public payload: Todo) {}
}

export class UpdateTodoAction implements Action {
    readonly type = TodosActionTypes.UpdateTodo;
    constructor(public payload: any) {}
}

export class DeleteTodoAction implements Action {
    readonly type = TodosActionTypes.DeleteTodo;
    constructor(public payload: string) {}
}

export class SelectTodoAction implements Action {
    readonly type = TodosActionTypes.SelectTodo;
    constructor(public payload: string) {}
}

export type TodoActions = 
    CreateTodoAction | 
    UpdateTodoAction | 
    DeleteTodoAction | 
    UpdateTodoAction |
    SelectTodoAction
;