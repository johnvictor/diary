import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodosRoutingModule } from './todos/todos-routing.module';
import { StoreModule } from '@ngrx/store';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { todosReducer } from './+store/todos.reducer';
import { reducers } from './+store/diary-todos.reducer';

@NgModule({
  imports: [
    CommonModule, 
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('diary', reducers)
  ],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class DiaryTodosModule {}
