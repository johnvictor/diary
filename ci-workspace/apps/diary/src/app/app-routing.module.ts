import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'notes',
  loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
},{
  path: 'todos',
  loadChildren: () => import('@ci-workspace/diary/todos').then(m => m.DiaryTodosModule)
}, {
  path: '**',
  redirectTo: '/todos'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
