import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState, csSelectProjectTodo } from '../+store/diary-todos.reducer';
import { CreateTodoAction, DeleteTodoAction } from '../+store/todos.actions';
import { Todo } from '../+store/todos.model';

@Component({
  selector: 'ci-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  todos: Todo[];
  desc = new FormControl();
  date = new FormControl();

  constructor(private store: Store< { diary: AppState}>) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    const sub = this.store.pipe(
      select(csSelectProjectTodo),
      tap( todos => console.log(todos)),
      map( todos => (Object.keys(todos).map(k => todos[k])))
    ).subscribe(res => {
      this.todos = res;
    });
    this.subscriptions.add(sub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  addTodo() {
    this.store.dispatch(new CreateTodoAction({
      date: this.date.value,
      desc: this.desc.value,
      id: '1' + Math.random()
    }));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodoAction(todo.id));
  }

}
